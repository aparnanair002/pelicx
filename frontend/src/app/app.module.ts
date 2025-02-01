import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestMasterComponent } from './guest-master/guest-master.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { GuestsignupComponent } from './guestsignup/guestsignup.component';
import { GuestsigninComponent } from './guestsignin/guestsignin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AddlocationComponent } from './admin/addlocation/addlocation.component';
import { AddStateComponent } from './admin/add-state/add-state.component';
import { AdddistrictComponent } from './admin/adddistrict/adddistrict.component';
import { EditstateComponent } from './admin/editstate/editstate.component';
import { EditdistrictComponent } from './admin/editdistrict/editdistrict.component';
import { EditlocationComponent } from './admin/editlocation/editlocation.component';
import { ViewcompanyComponent } from './admin/viewcompany/viewcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestMasterComponent,
    MainhomeComponent,
    GuestsignupComponent,
    GuestsigninComponent,
    AdminLoginComponent,
    AdminhomeComponent,
    AdminmasterComponent,
    AddlocationComponent,
    AddStateComponent,
    AdddistrictComponent,
    EditstateComponent,
    EditdistrictComponent,
    EditlocationComponent,
    ViewcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
