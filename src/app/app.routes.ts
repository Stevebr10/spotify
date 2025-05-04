import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '', //Cuando ponemos en vacio hacemos referencia a localhost:4200
        loadChildren: ()=>import(`./modules/home/home.module`).then(m=>m.HomeModule)
    }
];

