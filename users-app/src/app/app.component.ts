import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'My Awesome App';
  showUsers : boolean = true;

  constructor(public dataService : DataService){}
  onIncrease(){
    this.dataService.counter++;
  }
}
