import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {
listStudents = [
      {id:1,name:'hung'},
  {id:2,name:'vodich'}
      ]
  @Output()
  dataFormChild = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  this.dataFormChild.emit(this.listStudents);
  }

}
