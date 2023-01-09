import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogsModifyComponent } from './dogs-modify/dogs-modify.component';

const routes: Routes = [
  { path: '', component: DogsListComponent },
  { path: 'edit', component: DogsModifyComponent },
  { path: 'edit/:id', component: DogsModifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
