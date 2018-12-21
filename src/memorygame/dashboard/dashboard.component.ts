import { Component, Output, EventEmitter } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @select() remains$: Observable<number>
  @select() highestSpeed$: Observable<number>

  @Output() aiclick = new EventEmitter();

  aiplay() {
    this.aiclick.emit(null);
  }
}
