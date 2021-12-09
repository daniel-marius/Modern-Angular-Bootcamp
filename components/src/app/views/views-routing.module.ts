import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
=======
<<<<<<< HEAD

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
=======
>>>>>>> e61eb90 (Fourth commit)
import { ViewsHomeComponent } from './views-home/views-home.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
<<<<<<< HEAD
=======
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)
