import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder)
  private authService = inject(AuthService)
  private router = inject(Router)

  public myForm: FormGroup = this.fb.group({
    email: ['fernando@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  login() {
    const { email, password } = this.myForm.value
    this.authService.login(email, password)
      .subscribe({
        //Si sale bien
        next: () => this.router.navigateByUrl('/dashboard'),
        // Si hay error
        error: (error) => {
          //console.log({ loginError: error })
          //Sweet Alert
          Swal.fire('Error', error, 'error')
        }
      })
  }
}
