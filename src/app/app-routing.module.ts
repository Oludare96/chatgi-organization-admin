import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PolicyListComponent } from './policy-list/policy-list.component';


const routes: Routes = [
  { path: 'policy-list', component: PolicyListComponent },
  { path: 'admin-page', component: AdminPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
