import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { ViewsRoutingModule } from './views-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
=======
>>>>>>> e61eb90 (Fourth commit)
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemListComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
})
export class ViewsModule {}
<<<<<<< HEAD
=======
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)
