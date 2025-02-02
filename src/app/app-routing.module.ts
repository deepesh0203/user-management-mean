import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
const routes: Routes = [
  {path:"users",component:UserListComponent},
  {path:"add-user",component:AddUserComponent},
  {path:"edit-user/:id",component:EditUserComponent},
  {path:'',redirectTo:"/users",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
