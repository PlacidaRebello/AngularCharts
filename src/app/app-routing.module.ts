import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponentComponent } from './charts-component/charts-component.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';


const routes: Routes = [
  {path:'chartsComponent',component:ChartsComponentComponent},
  {path:'pieCharts', component:PieChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
