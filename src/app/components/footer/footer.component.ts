import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() numberOfArticles: number = 3;
  @Input() startDisplayIndex: number = 0;
  @Input() articlesLength: number = 0;

  @Output() newGotoEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  gotoPrevArticles() {
    this.newGotoEvent.emit(this.startDisplayIndex - this.numberOfArticles);
  }

  gotoNextArticles() {
    this.newGotoEvent.emit(this.startDisplayIndex + this.numberOfArticles);
  }
}
