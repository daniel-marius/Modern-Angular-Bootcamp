import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { ModsRoutingModule } from './mods-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
=======
>>>>>>> e61eb90 (Fourth commit)
import { SharedModule } from '../shared/shared.module';
import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [ModsHomeComponent, ModalComponent, AccordionComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
<<<<<<< HEAD
=======
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)
