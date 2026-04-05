import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PanelMenuModule, BreadcrumbModule, Sidebar],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
