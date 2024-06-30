import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { WidgetComponent } from '../widget/widget.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgFor,
    WidgetComponent,
    SidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
