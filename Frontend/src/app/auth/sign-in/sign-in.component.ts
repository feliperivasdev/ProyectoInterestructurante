import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  showPassword = false;
  loginError: string = '';
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void { }

  // Login method triggered on form submission
  login(): void {
    const email = this.emailInput?.nativeElement?.value?.trim();
    const password = this.passwordInput?.nativeElement?.value?.trim();

    if (!email || !password) {
      this.loginError = 'Por favor ingrese su correo y contraseña';
      return;
    }

    // Call auth service for authentication
    this.authService.auth(email, password).subscribe({
      next: (response) => {
        if (response && response.token) {
          this.router.navigate(['/dashboard/default']);
        } else {
          this.loginError = 'Respuesta inválida del servidor';
        }
      },
      error: (error) => {
        console.error('Error de login:', error);
        this.loginError = 'Error al iniciar sesión. Por favor verifique su correo y contraseña';
        this.passwordInput.nativeElement.value = '';
      }
    });
  }

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Navigation methods
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }

  onSignup() {
    this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
  }
}

