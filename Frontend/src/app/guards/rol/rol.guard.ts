import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const currentRole = localStorage.getItem('rol');

    // Obtener el rol esperado desde los datos de la ruta
    const expectedRole = route.data['expectedRole'];

    // Verificar si el rol actual coincide con el rol esperado
    if (currentRole === expectedRole) {
      return true;
    } else {
      // Si el rol no coincide, redirigir al usuario a la página de inicio o a una página de acceso denegado
      return this.router.createUrlTree(['/auth/sign-in']);
    }
  }
  
}
