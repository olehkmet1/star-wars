import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {

  @Input() itemsList: any[] = [];
  @Input() isLoading = false;
  @Input() count: number = 0;
  @Input() linkModule: string = '';
  @Input() throttle = 500;
  @Input() scrollDistance = 2;  
  @Output() newPageLoad = new EventEmitter<any>();

  onScroll(): void {
    if (this.itemsList.length < this.count) {
      this.newPageLoad.emit(true);
    }
  }

}
