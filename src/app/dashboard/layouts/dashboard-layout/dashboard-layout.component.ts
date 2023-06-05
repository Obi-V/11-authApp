import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService = inject(AuthService);

  //Modo clásico
  //  get user(){
  //   return this.authService.currentUser()
  //  }

  // Con señales, por algún motivo hay que poner doble paréntesis porque devuelve una función
  // y el segundo paréntesis es para acceder a la función que devuelve, gracias chat-gtp
  public user = computed(() => this.authService.currentUser()());


  onLogOut(){
    this.authService.logOut();
  }

}
