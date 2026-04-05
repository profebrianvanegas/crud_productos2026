import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Select } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-filtro-categorias',
  imports: [InputTextModule, FloatLabel, IconFieldModule, InputIconModule, Select, ButtonModule],
  templateUrl: './filtro-categorias.html',
  styles: ``,
})
export class FiltroCategorias {

}
