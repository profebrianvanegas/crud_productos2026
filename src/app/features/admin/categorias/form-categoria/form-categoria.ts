import { Component, inject } from '@angular/core';
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterLink } from "@angular/router";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CategoriasService } from '../categorias.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-form-categoria',
  imports: [Button, InputTextModule, TextareaModule, Select, IconFieldModule, InputIconModule, RouterLink,
    ReactiveFormsModule, JsonPipe
  ],
  templateUrl: './form-categoria.html',
  styles: ``,
})
export class FormCategoria {
  private fb = inject(FormBuilder);
  private categoriaService = inject(CategoriasService);

  formCategoria = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    //descripcion: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(150)]],
    categoria_padre: [''],
  });

  ngOnInit() {
    if(this.categoriaService.categoria_editar() != null){
      this.formCategoria.patchValue({
        nombre: this.categoriaService.categoria_editar()?.nombre
      })
    }
  }

  guardarCategoria() {
    if(!this.formCategoria.invalid) {
      const categoria: any = this.formCategoria.value;

      this.categoriaService.guardarCategoria(categoria).subscribe(
        (data)=> {
          alert(data.message);
          this.formCategoria.reset();
        }
      )
    }
  }


  categoriasPadre: any = [
    { name: 'Electronics', code: '1' },
    { name: 'Smart Phones', code: '2' },
    { name: 'Accessories', code: '3' },
  ]
}
