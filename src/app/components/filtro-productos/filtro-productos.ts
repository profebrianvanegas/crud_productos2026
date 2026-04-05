import { Component, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Select } from 'primeng/select';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-filtro-productos',
  imports: [InputTextModule, FloatLabel, IconFieldModule, InputIconModule, Select, ButtonModule],
  templateUrl: './filtro-productos.html',
  styles: ``,
})
export class FiltroProductos {
  protected categorias: any[] = [
    { id: '', name: 'Todas la categorías' },
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
    { id: 'todo', name: 'Todos los estados' },
    { id: 'stock', name: 'En stock' },
    { id: 'stockBajo', name: 'Stock bajo' },
    { id: 'agotado', name: 'Agotado' },
  ];

}
