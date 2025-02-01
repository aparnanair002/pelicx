import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from '../dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  $nm='';
 constructor(private Fb:FormBuilder,private db:DbserviceService,private router:Router) { }

 adminForm=this.Fb.group({
  username:[''],
  pass:['']
 })

 onSubmit(){
  this.db.adminLogin(this.adminForm.value).then((data)=>{
    console.log(data);
    if(data == "")
    {
      this.$nm="No such user !!! invalid credentials !!";
    }
    else
    {
      this.router.navigate(['/adminMaster/adminhome']);
    }
  })
 }


  ngOninit():void {
  }
}
