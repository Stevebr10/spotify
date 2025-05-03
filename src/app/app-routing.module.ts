// Clase creada 
//Clase en la que se realizan los cambios es en app.routes.ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// contiene valores de ruta
const routes: Routes = [
    {
        path: '', //Cuando ponemos en vacio hacemos referencia a localhost:4200
       
    }
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}