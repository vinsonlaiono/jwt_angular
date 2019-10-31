import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  LineChart:Array<Object> = [];
  pieChart:Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart('lineChart', {
      type : 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Current Week',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 50, 20, 20, 30, 32]
        }, 
        {
          label: 'Previous Week',
          borderColor: 'rgb(25, 99, 132)',
          data: [10, 0, 30, 40, 20, 35, 22]
      }]
    },
    })
    var data = {
      labels: [
          'Red',
          'Yellow',
          'Blue'
      ],
      datasets: [{
          data: [10, 20, 30]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
  };
    this.pieChart = new Chart('pieChart', {
      type : 'pie',
      data:data
    //   data : {
    //     // These labels appear in the legend and in the tooltips when hovering different arcs
    //     labels: [
    //         'Facebook', 'Google', 'Apple', 'Amazon', 'Uber', 'Coding Dojo',
    //     ],
    //     datasets: [{
    //       backgroundColor: 'rgb(25, 99, 132)',
    //       data: [10]
    //     }],
    
    // }
    })
  }

}
