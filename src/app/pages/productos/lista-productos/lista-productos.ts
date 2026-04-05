import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { FiltroProductos } from '../../../components/filtro-productos/filtro-productos'; 

export interface Producto {
  Nombre: string;
  Imagen: string;
  Categoria: string;
  Stock: number;
  Precio: number;
  Status: string;
}

@Component({
  selector: 'app-lista-productos',
  imports: [ButtonModule, FiltroProductos, TableModule, SkeletonModule, TagModule, RouterLink],
  templateUrl: './lista-productos.html',
  styles: ``,
})
export class ListaProductos {

  products: Producto[] =
    [
      {
        "Nombre": "GeForce RTX 4090 OC",
        "Imagen": "https://lh3.googleusercontent.com/aida-public/AB6AXuAtQVKmpYD5NyCaqJjyhMCy8PTkrzG06eaGITNursMTYivA3w7SPhfF94h56RI3jCMmXBfm06Q63--L92Bgk4dkfWxUu3SwLgbVE_iVPmSGekGxTOL224fLdmOqTlVzk0g6cyvU3hnbjpCY58eaPtzZBAa2HRxt_jWBJXFHTLYXMGup9qQpsb820zJDQc8xk956N3V0IsFFauzJQBBGDoXQRVr7fWSgc83Mqij-sMb3O6UyM-jwFBsHqKgWsRTAxufwPX1X1d30DEHL",
        "Categoria": "GPU",
        "Stock": 12,
        "Precio": 1599.00,
        "Status": "En Stock"
      },
      {
        "Nombre": "AMD Ryzen 9 7950X",
        "Imagen": "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXXHQ6yqI1H-no8IBHfs_WeYJJ2uLw9HS3Jxu8kJhNo0LrpdNDdwrerhJj0TcQWoONy8G473t4DpT6gRhbIrZpYV039p8rWa4R5_MMI0pSewWITzzmQnFiJiPCOdKlAFbwFcdBMUnTyotjyz3koruE35RGdfZEvI9JxPdtzYXsYgJsuFRVIfb6hnhk6cuiEnNeppbc2hk-o6k1Yj9RJkPFnIrpFy8lyLrpDH2pbggiesQRAYXyOpC4b9hBxgtnXpJC0vfY2dGd3Az",
        "Categoria": "CPU",
        "Stock": 3,
        "Precio": 699.00,
        "Status": "Stock Bajo"
      },
      {
        "Nombre": "Vengeance RGB Pro 32GB",
        "Imagen": "https://lh3.googleusercontent.com/aida-public/AB6AXuBmOPAGwyD0QHeqwfYtoRuWj4F1rT7I6caXKu3WaCcOt_4iQBXDT3fwpQIJ13_ygnNu2UxB8E-PTL8EIOwUQVWdYBpeXqnJ1M-rWnRB79YmXju8VpvFiFOvlF_vorxaoEBcae6mWWlAe374sxR7UumkP4wii8AURoeXdYu9K3lXorwDmpbqPfJIPE1i_M4_tAbyhYHFLJ5xW1kRQIpSvekCnEgtRIX9g0WRW7lCPiejAP6foB9nOavF11yKGT72-IHC8CQXI9WNSx00",
        "Categoria": "RAM",
        "Stock": 45,
        "Precio": 149.99,
        "Status": "En Stock"
      },
      {
        "Nombre": "Samsung 990 PRO 2TB",
        "Imagen": "https://lh3.googleusercontent.com/aida-public/AB6AXuA5PT4omudaRS3_c71vFVlNNEDL9TYXv-HFk9m3HVbGQ-5wHctPBbTPFu2CHoR7ZH4CqdOEB0p4V9ZAALBp1kBuWVK_S0KazltQjx_dCrK3uEQ6UHV7uAZo1PWY5Xr9BRDanrNZLwbeqc_1_4Aa0W1RyFqXVDheZEw5p-NlJDrVf23SqyR2JFYG7RA3GT30KMQses2eeqq1y5PeK8x3eV-9LgJuKqTRdt0dOoyynKdjgAH2nMkzFilQKwc9PxiQd9AMRgUHQFOhcW6x",
        "Categoria": "Storage",
        "Stock": 0,
        "Precio": 179.99,
        "Status": "Agotado"
      },
      {
        "Nombre": "ROG Strix X670E-E",
        "Imagen": "https://lh3.googleusercontent.com/aida-public/AB6AXuB0jIxzXeBPL-m9ElPxsf7kXv3dJMoU3qC3py_q_AgJkVrr7wCQj7vM2Y2bq0u7UxojD0-_zAvH8eE2mIbprP5fYoJd9ENr-5tjdDN4pZjNd5I8xZ791U1hGyrb5tPwspApjDkk1G12VNcmiQJ6lLFSX63W3E8pM5Gw7ekh6QLfoBENHh5jFPmcDPXbJQcVh8gSLeVqJsnGmvuSaOiDhc8f8gS2bHFfUOCkMJgFVep7yF8xslEXOAVWeOpkr-42b5dc7cLFGeyKfk7y",
        "Categoria": "Motherboard",
        "Stock": 8,
        "Precio": 499.00,
        "Status": "En Stock"
      }
    ];

  getSeverity(status: string) {
    switch (status) {
      case 'En Stock':
        return 'success';
      case 'Stock Bajo':
        return 'warn';
      case 'Agotado':
        return 'danger';
      default:
        return 'success';
    }
  }
}
