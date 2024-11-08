import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {path:'',    redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./modules').then(m=>m.HomeModule) }

];
