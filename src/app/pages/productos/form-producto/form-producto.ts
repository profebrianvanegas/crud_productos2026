import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-form-producto',
  imports: [Button, InputTextModule, TextareaModule, Select, IconFieldModule, InputIconModule, RouterLink],
  templateUrl: './form-producto.html',
  styles: ``,
})
export class FormProducto {
  protected categorias: any[] = [
    { id: 'cpu', name: 'Procesador (CPU)' },
    { id: 'gpu', name: 'Tarjeta gráfica (GPU)' },
    { id: 'mb', name: 'Placa base (Motherboard)' },
    { id: 'ram', name: 'Memoria RAM' },
    { id: 'storage', name: 'Almacenamiento' },
    { id: 'psu', name: 'Fuente de alimentación (PSU)' },
    { id: 'cooling', name: 'Refrigeración' },
    { id: 'case', name: 'Caja (Chasis)' },
    { id: 'monitor', name: 'Monitor' },
    { id: 'peripherals', name: 'Periféricos' },
    { id: 'network', name: 'Red y conectividad' }
  ];

  protected estado: any[] = [
    { id: 'stock', name: 'En stock' },
    { id: 'stockBajo', name: 'Stock bajo' },
    { id: 'agotado', name: 'Agotado' },
  ];
}
