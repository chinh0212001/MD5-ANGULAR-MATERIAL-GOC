import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.scss']
})
export class ParentInputComponent implements OnInit {
listStudents = [
  {id:1, name:'chinh'},{id:2,name:'linh'},{id:3,name:'2001'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
