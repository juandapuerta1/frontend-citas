import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar], // Lo cambiamos aquí también
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'frontend-citas';
}
