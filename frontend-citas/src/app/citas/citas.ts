import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CitasService, Cita } from '../services/citas';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './citas.html',
  styleUrl: './citas.css'
})
export class Citas implements OnInit {
  listaCitas: Cita[] = [];
  // Ajustado a los nombres de tu backend
  citaActual: Cita = { nombre_cliente: '', servicio: '', fecha_hora: '', estado: 'Agendada' };
  editando: boolean = false;

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas(): void {
    this.citasService.getCitas().subscribe({
      next: (datos) => this.listaCitas = datos,
      error: (err) => console.error('Error al cargar citas', err)
    });
  }

  guardarCita(): void {
    if (this.editando && this.citaActual.id) {
      this.citasService.actualizarCita(this.citaActual.id, this.citaActual).subscribe(() => {
        this.cargarCitas();
        this.limpiarFormulario();
      });
    } else {
      this.citasService.crearCita(this.citaActual).subscribe(() => {
        this.cargarCitas();
        this.limpiarFormulario();
      });
    }
  }

  editarCita(cita: Cita): void {
    this.citaActual = { ...cita };
    this.editando = true;
  }

  eliminarCita(id: number | undefined): void {
    if (id && confirm('¿Estás seguro de eliminar esta cita?')) {
      this.citasService.eliminarCita(id).subscribe(() => this.cargarCitas());
    }
  }

  limpiarFormulario(): void {
    this.citaActual = { nombre_cliente: '', servicio: '', fecha_hora: '', estado: 'Agendada' };
    this.editando = false;
  }
}
