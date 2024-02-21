import { Component } from '@angular/core';
import { MainComponent } from '../../standalone/main/main.component';
import { ProjectsComponent } from '../../standalone/projects/projects.component';
import { AboutMeComponent } from '../../standalone/about-me/about-me.component';
import { ContactComponent } from '../../standalone/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, ProjectsComponent, AboutMeComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
