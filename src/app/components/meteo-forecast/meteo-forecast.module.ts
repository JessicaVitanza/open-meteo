import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoForecastComponent } from './meteo-forecast.component';
import { UnitPipe } from 'src/app/pipes/unit/unit.pipe';
import { CodeIconPipe } from 'src/app/pipes/code-icon/code-icon.pipe';



@NgModule({
  declarations: [
    MeteoForecastComponent,
    UnitPipe,
    CodeIconPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MeteoForecastComponent
  ]
})
export class MeteoForecastModule { }
