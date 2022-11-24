import { Component, OnInit } from '@angular/core';
import {$e} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.scss']
})
export class OutputParentComponent implements OnInit {
listStudent = [];
  constructor() { }

  ngOnInit(): void {
  }


  showListStudents($event: any) {
    console.log("event---->",$event)
    this.listStudent = $event;
  }
}
