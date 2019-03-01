import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test/new',
    loadChildren: './test/test.module#TestModule'
  },
  {
    path: 'test/:id/edit',
    loadChildren: './test/test.module#TestModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
