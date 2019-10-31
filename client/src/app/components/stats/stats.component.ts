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
    
    this.pieChart = new Chart('pieChart', {
      type : 'doughnut',
      data : {
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Facebook', 'Google', 'Apple', 'Amazon', 'Uber', 'Coding Dojo',
        ],
        options: {
          responsive: true,
          title: {
            display: true,
            position: "top",
            text: "Pie Chart",
            fontSize: 18,
            fontColor: "#111"
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "#333",
              fontSize: 16
            }
          }
        },
        datasets: [{
          label: 'yes',
          backgroundColor: [
            "#DEB887",
            "#A9A9A9",
            "#DC143C",
            "#F4A460",
            "#2E8B57"
          ],
          data: [10, 13, 15, 32, 45, 31]
        }],
    }
    })
  }

}
