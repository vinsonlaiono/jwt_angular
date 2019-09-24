import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

declare let alertify : any;

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  showdelete:Boolean = false;
  user:any;
  LineChart:Array<Object> = [];
  jobs:any = [
    {'id' : '1', 'status':'Applied', 'title' : 'Azure Software Engineer', 'company' : 'microsoft', 'location' : 'Mountain View'},
    {'id' : '2', 'status':'Phone screen', 'title' : 'Software Engineer', 'company' : 'facebook', 'location' : 'Menlo Park'},
    {'id' : '3', 'status':'Round 1', 'title' : 'Jr Web Devleoper', 'company' : 'apple', 'location' : 'Sunnyvale'},
    {'id' : '4', 'status':'Applied', 'title' : 'Jr Web Devleoper', 'company' : 'linkedin', 'location' : 'Sunnyvale'},
    {'id' : '5', 'status':'Phone screen', 'title' : 'Azure Software Engineer', 'company' : 'microsoft', 'location' : 'Mountain View'},
    {'id' : '6', 'status':'Phone screen', 'title' : 'Jr Web Devleoper', 'company' : 'github', 'location' : 'Sunnyvale'},
    {'id' : '7', 'status':'applied', 'title' : 'Jr Web Devleoper', 'company' : 'linkedin', 'location' : 'Sunnyvale'},
    {'id' : '8', 'status':'Round 1', 'title' : 'Azure Software Engineer', 'company' : 'microsoft', 'location' : 'Mountain View'},
    {'id' : '9', 'status':'applied', 'title' : 'Jr Web Devleoper', 'company' : 'github', 'location' : 'Sunnyvale'},
  ]
  constructor( 
    private authService : AuthService, 
    private _router:Router,
    private _userService : UserService) { }

  ngOnInit() {
    this.getLoggedUser();
    this.user = {
      'first_name':'',
      'last_name': ''
    }

    this.LineChart = new Chart('lineChart', {
      type : 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Current Week',
            //backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 50, 20, 20, 30, 32]
        }, 
        {
          label: 'Previous Week',
          //backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(25, 99, 132)',
          data: [10, 0, 30, 40, 20, 35, 22]
      }]
    },
    })
  }

  logoutUser(){
    console.log("Logging out...")
    this.authService.logOutUser().subscribe( success => {
      if(success) {
        console.log("Successfully logged out user...")
        this._router.navigate(['/']);
      }
    })
  }

  getLoggedUser(){
    this._userService.getUser(localStorage.user).subscribe( data => {
      console.log(data)
      this.user = data['user'];
    })
  }
  removeFromList(job){
    console.log(job, localStorage.user)
    this._userService.removeJobFromList(job, localStorage.user).subscribe( data => {
      console.log(data);
      this.getLoggedUser();
    })
  }
  showJobDetails(job){
    console.log(job)
    alertify.alert()
    .setting({
      'label':'Close',
      'message': `
      <h4>${job.company}</h4>
      <p>${job.description} </p>
      `
    }).show()
    .setHeader(`<img src="${ job.company_logo }" alt="" style="width: 40px; margin-right:10px;"> ${job.company}`)
  }
}
