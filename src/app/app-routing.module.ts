import { HttpTestComponent } from './http-test/http-test.component';
import { PipesTestingComponent } from './pipes-testing/pipes-testing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    component : HttpTestComponent
  },
  {
    path : "service/test",
    component : HttpTestComponent,
  },
  {
    path : "pipe/test",
    component : PipesTestingComponent,
  }
];

export const routingComponents = [
  HttpTestComponent,
  PipesTestingComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
