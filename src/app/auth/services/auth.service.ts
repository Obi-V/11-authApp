import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { AuthStatus, CheckTokenResponse, LoginResponse, User } from '../interfaces';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    //Para disparar el evento al iniciar el service y que cambie el estado de checking
    this.checkAuthStatus().subscribe()
  }

  // http://localhost:3000
  private readonly baseUrl: string = environment.baseUrl

  private http = inject(HttpClient)

  private _currentUser = signal<User | null>(null)
  private _authStatus = signal<AuthStatus>(AuthStatus.checking)

  // Reutilizable
  private setAuthentication(user: User, token: string): boolean {

    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);

    localStorage.setItem('token', token);

    return true
  }

  // Extraer fuera del service con una señal solo lectura
  public currentUser = computed(() => this._currentUser)
  public authStatus = computed(() => this._authStatus)

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth/login`

    // Con ES6 se puede hacer const body = {email, password} pero yo lo veo más claro así:
    const body = {
      email: email,
      password: password
    }

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(err => throwError(() => err.error.message))
      )

  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check-token`

    const token = localStorage.getItem('token')

    if (!token) {
      /* Si no hay token deberíamos cambiar el estado a No autenticado, podemos usar el método logOut,
         de lo contrario me daba un bug al no actualizar el estado y quedarse en checking */
      this.logOut()
      return of(false)
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)

    return this.http.get<CheckTokenResponse>(url, { headers: headers })
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),

        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated)
          return of(false)
        })
      )
  }

  logOut() {
    localStorage.removeItem('token')
    this._currentUser.set(null)
    this._authStatus.set(AuthStatus.notAuthenticated)
  }
}
