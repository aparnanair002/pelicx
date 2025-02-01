import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestMasterComponent } from './guest-master/guest-master.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { GuestsignupComponent } from './guestsignup/guestsignup.component';
import { GuestsigninComponent } from './guestsignin/guestsignin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddlocationComponent } from './admin/addlocation/addlocation.component';
import { AddStateComponent } from './admin/add-state/add-state.component';
import { AdddistrictComponent } from './admin/adddistrict/adddistrict.component';
import { EditstateComponent } from './admin/editstate/editstate.component';
import { EditdistrictComponent } from './admin/editdistrict/editdistrict.component';
import { EditlocationComponent } from './admin/editlocation/editlocation.component';
import { ViewcompanyComponent } from './admin/viewcompany/viewcompany.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainhomeComponent,
  },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'adminMaster', component:AdminmasterComponent,children:[
    {path:'adminhome',component:AdminhomeComponent},
    {path:'locationadd', component:AddlocationComponent},
    {path:'stateadd', component:AddStateComponent},
    {path:'districtadd', component:AdddistrictComponent},
    {path:'viewcompany', component:ViewcompanyComponent },

    {path:'editstate/:id', component:EditstateComponent},
    {path:'editdist/:id', component:EditdistrictComponent},
    {path:'editloc/:id', component:EditlocationComponent},

    { path: '', redirectTo: '/adminhome', pathMatch: 'full' },

 ] },

  {
    path: 'guest',
    component: GuestMasterComponent,
    children: [
      { path: 'signup', component: GuestsignupComponent },
      { path: 'signin', component: GuestsigninComponent },
      { path: '', redirectTo: '/signin', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
