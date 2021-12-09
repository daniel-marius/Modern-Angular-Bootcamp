import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsHomeComponent } from './collections-home/collections-home.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: '', component: CollectionsHomeComponent }
=======
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
>>>>>>> bbdceda (Third commit)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports: [RouterModule],
>>>>>>> bbdceda (Third commit)
})
export class CollectionsRoutingModule {}
