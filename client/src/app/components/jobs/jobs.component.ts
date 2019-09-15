import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs:any = [
    {'title' : 'Azure Software Engineer', 'company' : 'microsoft', 'location' : 'Mountain View'},
    {'title' : 'Software Engineer', 'company' : 'facebook', 'location' : 'Menlo Park'},
    {'title' : 'Jr Web Devleoper', 'company' : 'apple', 'location' : 'Sunnyvale'},
    {'title' : 'Jr Web Devleoper', 'company' : 'linkedin', 'location' : 'Sunnyvale'},
    {'title' : 'Azure Software Engineer', 'company' : 'microsoft', 'location' : 'Mountain View'},
    {'title' : 'Jr Web Devleoper', 'company' : 'github', 'location' : 'Sunnyvale'},
  ]

  focus:Object = {
    'title' : '',
    'company' : '',
    'location' : ''
  }

  constructor() { }

  ngOnInit() {
    this.focus = this.jobs[0];
  }

  setFocus(job){
    this.focus = job;
  }

}
