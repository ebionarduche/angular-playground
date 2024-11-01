import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  standalone: true,
  imports: [DragDropModule],
})
export class DragAndDropComponent {
  todo: IList[] = [
    {
      title: 'Get up',
      description: 'Get up at 6:00 AM',
      user: 'Drake',
      score: 10,
    },
    { title: 'Brush teeth', description: 'Brush teeth at 6:10 AM', score: 5 },
    { title: 'Take a shower', description: 'Take a shower at 6:30 AM' },
    { title: 'Check e-mail', description: 'Check e-mail at 7:00 AM' },
    { title: 'Walk dog', description: 'Walk dog at 7:30 AM', user: 'Josh' },
  ];
  doing: IList[] = [];
  done: IList[] = [];

  counter = 0;

  drop(event: CdkDragDrop<IList[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log('event', event);

    if (event.container.data[event.currentIndex].score) {
      {
        const item = event.container.data[event.currentIndex];
        if (item && item.score) {
          this.counter += item.score;
        }
      }
    }
  }
}

export interface IList {
  title: string;
  description: string;
  user?: string;
  score?: number;
}
