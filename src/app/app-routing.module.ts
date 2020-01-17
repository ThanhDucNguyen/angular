import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMemberComponent } from './pages/list-member/list-member.component';
import { AddMemberComponent } from './pages/add-member/add-member.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: ListMemberComponent },
  { path: 'add-member', component: AddMemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
