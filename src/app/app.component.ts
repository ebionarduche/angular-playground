import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, DragAndDropComponent],
})
export class AppComponent {
  title = 'angular-playground';
}
