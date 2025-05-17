import { Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/page/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


export const routes: Routes = [
    {
        path: 'auth', //Cuando ponemos una ruta hacemos referencia a localhost:4200/auth
        loadChildren: ()=>import(`./modules/auth/auth.module`).then(m=>m.AuthModule)
    },
    {
        path: '', //Cuando ponemos en vacio hacemos referencia a localhost:4200
        component: HomePageComponent,
        loadChildren: ()=>import(`./modules/home/home.module`).then(m=>m.HomeModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }