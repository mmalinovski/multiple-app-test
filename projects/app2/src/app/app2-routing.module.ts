import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { App2SharedModule } from 'projects/app2/src/app/app.module';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
    { path: 'app2/one', component: View1Component },
    { path: 'app2/two', component: View2Component },
    { path: 'app2', redirectTo: 'app2/one' },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // App1SharedModule.forRoot(),
    // App2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class App2RoutingModule { }