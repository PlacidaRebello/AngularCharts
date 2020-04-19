import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import { ChartsComponentComponent } from './charts-component/charts-component.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';
import {ChartsService} from './charts.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponentComponent,
    PieChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [ChartsService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
