import { Component, inject, signal } from '@angular/core';
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CategoriasService } from '../categorias.service';
import { Categoria } from '../../../../core/models/categoria.model';
import { MessageService } from 'primeng/api';

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
  private router = inject(Router);
  private toastService = inject(MessageService);

  protected categoriasPadre = signal<Categoria[]>([]);

  formCategoria = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    parent_id: [null as number | null],
  });

  ngOnInit() {
    this.obtenerCategoriasPadre();

    if (this.categoriaService.categoria_editar() != null) {
      this.formCategoria.patchValue({
        nombre: this.categoriaService.categoria_editar()?.nombre,
        parent_id: this.categoriaService.categoria_editar()?.parent_id!
      })
    }else {
      this.formCategoria.reset();
    }
  }

  obtenerCategoriasPadre() {
    this.categoriaService.obtenerCategoriasParaParents().subscribe(
      (data) => {
        this.categoriasPadre.set(data);
      }
    )
  }

  guardarCategoria() {
    if (!this.formCategoria.invalid) {
      let categoria: Categoria = {
        nombre: this.formCategoria.value.nombre!,
        parent_id: this.formCategoria.value.parent_id ? Number(this.formCategoria.value.parent_id) : null
      }
       


      if (this.categoriaService.categoria_editar() == null) {
        this.categoriaService.guardarCategoria(categoria).subscribe(
          (data) => {
            this.toastService.add({ severity: 'success', summary: data.message });
            this.finalizarGuardado();
          }
        )
      } else {

        this.categoriaService.actualizarCategoria(categoria, this.categoriaService.categoria_editar()?.id!).subscribe(
          (data) => {
            this.toastService.add({ severity: 'success', summary: data.message });
            this.finalizarGuardado();
          }
        )
      }
    }
  }

  finalizarGuardado() {
    this.formCategoria.reset();
    this.router.navigate(['/admin/lista-categorias']);
  }


}
