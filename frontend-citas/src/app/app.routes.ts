import { Routes } from '@angular/router';
// Importamos la clase con su nombre corto 'Citas'
import { Citas } from './citas/citas';

export const routes: Routes = [
  { path: '', redirectTo: 'citas', pathMatch: 'full' },
  { path: 'citas', component: Citas }, // Lo cambiamos aquí también
  { path: '**', redirectTo: 'citas' }
];
