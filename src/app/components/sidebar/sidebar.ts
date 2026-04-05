import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [MenuModule, BadgeModule, RippleModule, AvatarModule, RouterModule],
  standalone: true,
  templateUrl: './sidebar.html',
  styles: ``,
})
export class Sidebar {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      { label: 'Productos', icon: 'pi pi-box', routerLink: '/lista-productos' },
      { label: 'Categorías', icon: 'pi pi-eject', routerLink: '/lista-categorias' }
    ];
  }
}
