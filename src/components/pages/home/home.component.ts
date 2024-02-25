import { Component } from '@angular/core';
import { MainComponent } from '../../standalone/main/main.component';
import { AboutMeComponent } from '../../standalone/about-me/about-me.component';
import { WebDevelopmentComponent } from '../../standalone/web-development/web-development.component';
import { GameDevelopmentComponent } from '../../standalone/game-development/game-development.component';
import { SkillsComponent } from '../../standalone/skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutMeComponent, SkillsComponent, WebDevelopmentComponent, GameDevelopmentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
