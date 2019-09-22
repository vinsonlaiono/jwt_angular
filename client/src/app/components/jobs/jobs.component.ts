import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
declare let alertify:any;

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  jobs:any = [
    { 'title' : 'Azure Software Engineer', 'company' : 'microsoft', 'location' : 'Mountain View' },
    { 'title' : 'Software Engineer', 'company' : 'facebook', 'location' : 'Menlo Park' },
    { 'title' : 'Jr Web Devleoper', 'company' : 'apple', 'location' : 'Sunnyvale' },
    { 'title' : 'Jr Web Devleoper', 'company' : 'linkedin', 'location' : 'Sunnyvale' },
    { 'title' : 'Azure Software Engineer', 'company' : 'microsoft', 'location' : 'Mountain View' },
    { 'title' : 'Jr Web Devleoper', 'company' : 'github', 'location' : 'Sunnyvale' },
    { 'title' : 'Jr Web Devleoper', 'company' : 'linkedin', 'location' : 'Sunnyvale' },
    { 'title' : 'Azure Software Engineer', 'company' : 'microsoft', 'location' : 'Mountain View' },
    { 'title' : 'Jr Web Devleoper', 'company' : 'github', 'location' : 'Sunnyvale' },
  ]

  searchOptions:any = {"description":"", "location":"" };

  focus:Object = {
    'title' : '',
    'company' : '',
    'location' : '',
    'company_logo' : ''
  }
  user:any;
  constructor(
    private _httpService : UserService
    ) { }

  ngOnInit() {
    this.getAllJobs();
    this.focus = this.jobs[0];
  }

  setFocus(job){
    console.log("Selected Job: ", job)
    this.focus = job;
  }

  getAllJobs(){
    console.log("Search Options in component", this.searchOptions)
    this._httpService.getJobs(this.searchOptions).subscribe( data => {
      console.log("List of jobs from Github API: ", data)
      this.jobs = data;
      this.focus = this.jobs[0];
    })
  }

  addToListAlert(){
    console.log("Click alertify")
    alertify.success("Great")
  }
  addJobToList(){
    
    console.log(this.focus)
    this._httpService.addJobToList(this.focus).subscribe( data => {
      console.log(data);
    })
  }

}
