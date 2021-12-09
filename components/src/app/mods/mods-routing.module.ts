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
export class ModsRoutingModule { }
=======
>>>>>>> e61eb90 (Fourth commit)
import { ModsHomeComponent } from './mods-home/mods-home.component';

const routes: Routes = [
  {
    path: '',
    component: ModsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModsRoutingModule {}
<<<<<<< HEAD
=======
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)
