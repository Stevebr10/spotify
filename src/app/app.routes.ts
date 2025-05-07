import { Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/page/home-page/home-page.component';


export const routes: Routes = [
    {
        path: 'auth', //Cuando ponemos en vacio hacemos referencia a localhost:4200
        loadChildren: ()=>import(`./modules/auth/auth.module`).then(m=>m.AuthModule)
    },
    {
        path: '', //Cuando ponemos en vacio hacemos referencia a localhost:4200
        component: HomePageComponent,
        loadChildren: ()=>import(`./modules/home/home.module`).then(m=>m.HomeModule)
    }
];

