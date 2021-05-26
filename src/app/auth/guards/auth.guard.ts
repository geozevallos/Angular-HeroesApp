import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router : Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutenticacion().pipe(
        tap(estaAutenticado => {
          if(!estaAutenticado){
            this.router.navigate(['./auth/login'])
          }
        })
      )
    // if (this.authService.auth.id) {
    //   return true;
    // }

    // console.log("bloqueado por CanActivate, papi!");

    // return false;


  }

  //Esto restringe la carga, pero una vez cargado puede seguir ingrsando
  //al poner true digo q todos puedan pasar
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    // console.log('canLoad', true);
    // console.log(route);
    // console.log(segments);

    return this.authService.verificaAutenticacion().pipe(
      tap(estaAutenticado => {
        if(!estaAutenticado){
          this.router.navigate(['./auth/login'])
        }
      })
    );

    // if (this.authService.auth.id) {
    //   return true;
    // }

    // console.log("bloqueado por CanLoad, papi!");

    // return false;


  }
}
