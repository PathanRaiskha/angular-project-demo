import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Com2Component } from './com2/com2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Com2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-First-App';
}
