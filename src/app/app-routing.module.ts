import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from "./pages/list/list.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { CounterComponent } from "./components/counter/counter.component";

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'detail/:id', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule) },
  { path: 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule) },
  { path: '', redirectTo: '/counter', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
