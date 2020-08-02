import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {
  @Input() classes;

  constructor() { }

  ngOnInit(): void {
    console.log(this.classes);
  }

}
