import { Routes } from '@angular/router';
import { ListaCategorias } from './features/admin/categorias/lista-categorias/lista-categorias';
import { FormCategoria } from './features/admin/categorias/form-categoria/form-categoria';
import { AdminLayout } from './core/layouts/admin-layout/admin-layout';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
    {path: 'login', component: Login},
    {
        path: 'admin', component: AdminLayout,
        children: [
            { path: 'lista-categorias', component: ListaCategorias, title: 'ListaCategorias' },
            { path: 'form-categoria', component: FormCategoria, title: 'FormCategoria' },
            { path: '', pathMatch: 'full', redirectTo: 'lista-categorias' },
            { path: '**', redirectTo: 'lista-categorias'}
        ]
    },

    { path: '', pathMatch: 'full', redirectTo: 'admin' },
    { path: '**', redirectTo: 'admin' }
];
