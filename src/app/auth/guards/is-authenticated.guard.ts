import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.authStatus()() === AuthStatus.authenticated) return true

  // Si está en checking quiero que devuelva false y salga del guard sin redirigirme. Solo redirige si es notAuthenticated
  if( authService.authStatus()() === AuthStatus.checking) return false

  // Introducir la ruta a la que queremos ir en el LocalStorage
  // const url = state.url
  // localStorage.setItem('path', url)

  router.navigateByUrl('/auth/login')
  return false;
};
