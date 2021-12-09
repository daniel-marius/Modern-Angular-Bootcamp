import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsHomeComponent } from './collections-home/collections-home.component';
<<<<<<< HEAD
=======
<<<<<<< HEAD

const routes: Routes = [
  { path: '', component: CollectionsHomeComponent }
=======
>>>>>>> e61eb90 (Fourth commit)
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent },
    ],
  },
<<<<<<< HEAD
=======
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
=======
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports: [RouterModule],
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)
})
export class CollectionsRoutingModule {}
