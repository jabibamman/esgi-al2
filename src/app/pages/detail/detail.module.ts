import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', component: DetailComponent }
];

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
