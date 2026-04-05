import { Routes } from '@angular/router';
import { ListaProductos } from './pages/productos/lista-productos/lista-productos';
import { FormProducto } from './pages/productos/form-producto/form-producto';
import { ListaCategorias } from './pages/categorias/lista-categorias/lista-categorias';
import { FormCategoria } from './pages/categorias/form-categoria/form-categoria';

export const routes: Routes = [
    { path: 'lista-productos', component: ListaProductos, title: 'ListaProductos' },
    { path: 'form-producto', component: FormProducto, title: 'FormProductos' },
    { path: 'lista-categorias', component: ListaCategorias, title: 'ListaCategorias' },
    { path: 'form-categoria', component: FormCategoria, title: 'FormCategoria' },
    { path: '', pathMatch: 'full', redirectTo: 'lista-productos' },
    { path: '**', redirectTo: 'lista-productos' }
];
