import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
declare let alertify:any;
// Set alertify defaults to bootstrap theme
alertify.defaults.transition = "slide";
alertify.defaults.theme.ok = "btn btn-primary";
alertify.defaults.theme.cancel = "btn btn-danger";
alertify.defaults.theme.input = "form-control";
alertify.defaults.notifier.position = "top-center";

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
  loggedUser:any = localStorage.user;
  constructor(
    private _httpService : UserService
    ) { }

  ngOnInit() {
    this.getAllJobs();
    this.focus = this.jobs[0];
    console.log(localStorage)
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
      this.setFocus(this.jobs[0]);
    })
  }

  addToListAlert(){
    console.log("Click alertify")
    alertify.confirm('Are you sure you want to add this job to your list?', function(){ 
      alertify.success(`Successfully saved this job to your list.`)
    }, function(){ 
      alertify.error('Cancel')
    })
    .set('notifier','position', 'top-center')
    .setHeader("<h4>Adding to your List</h4>")
    .setting({'onok': this.addJobToList()})
  }

  alertApplyLink(){
    alertify.confirm("Leaving MyApps")
    .setHeader("Leaving MyApps")
    .moveTo(1000,310);   
  }

  addJobToList(){
    // console.log(this.focus)
    this._httpService.addJobToList(this.focus, this.loggedUser).subscribe( data => {
      console.log(data);
    })
  }
  
}
