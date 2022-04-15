import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationTestComponent } from './interpolation-test/interpolation-test.component';
import { PropertyBindingTestComponent } from './property-binding-test/property-binding-test.component';
import { ClassBindingTestComponent } from './class-binding-test/class-binding-test.component';
import { StyleBindingTestComponent } from './style-binding-test/style-binding-test.component';
import { DataBindingEventsTestComponent } from './data-binding-events-test/data-binding-events-test.component';
import { ComponentInteractionTestComponent } from './component-interaction-test/component-interaction-test.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { PipesTestingComponent } from './pipes-testing/pipes-testing.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { DataCenterService } from './data-center.service';
import { HttpTestComponent } from './http-test/http-test.component';
import { HttpServiceService } from './http-service.service';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationTestComponent,
    PropertyBindingTestComponent,
    ClassBindingTestComponent,
    StyleBindingTestComponent,
    DataBindingEventsTestComponent,
    ComponentInteractionTestComponent,
    ChildComponentComponent,
    PipesTestingComponent,
    ServiceTestComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataCenterService,
    HttpServiceService
  ],
  bootstrap: [HttpTestComponent]
})
export class AppModule { }
