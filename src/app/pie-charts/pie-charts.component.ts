import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {ChartsService} from '../charts.service';

@Component({
  selector: 'pieCharts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {

  constructor(private chartService:ChartsService) { }

  data:any;
  ngOnInit() {
    this.chartService.getData().subscribe(res=>this.data=res);
  }

  chartOptions={
    responsive:true,
    backgroundColor: [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",]
  }

  labels=['Story','Bug','Task'];

  pieChartData=[30,20,50];

}
