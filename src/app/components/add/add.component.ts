import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Output() newAddEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.newAddEvent.emit();
  }
}
