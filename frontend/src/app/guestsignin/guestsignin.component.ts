import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-guestsignin',
  templateUrl: './guestsignin.component.html',
  styleUrls: ['./guestsignin.component.scss']
})
export class GuestsigninComponent {
users_role: string;
  LoginArray: any;
constructor(private route:ActivatedRoute, private fb:FormBuilder, private router:Router, private db:DbserviceService
){
 }

userform=this.fb.group({
name:[''],
password:['']
})

  onsubmit(){
     console.log(this.userform.value)
    this.db.login(this.userform.value).then((data:any)=>{
    this.LoginArray=data;
    // console.log(data)
    if(data==""){
    alert ('invalid username and password')

    this.router.navigate(['/guest/signin'])
    return

}
else {
  // console.log(this.LoginArray)
  var role = this.LoginArray[0].Role;
  // console.log(role)
  localStorage.setItem("loginid",this.LoginArray[0].login_id);
  localStorage.setItem("username",this.LoginArray[0].user_name)
  var status = this.LoginArray[0].status;
  // console.log(status)
  if(role == "admin")
  {
  this.router.navigate(['/adminMaster/adminhome'])
}
// else if((role == "company") && (status == "Active"))
// {
//   localStorage.setItem("loginid",this.LoginArray[0].login_id);
 
//   this.router.navigate(['/ownermaster/ownerhome'])
// }
else if((role == "User") && (status == "active"))
  {
    localStorage.setItem("loginid",this.LoginArray[0].login_id);
   
    this.router.navigate(['/UserMaster/Userhome'])
  }
else
{
alert('you are not an authorised person..')
}
}
})
}
// alert('success')
ngOnInit(): void {
}
}

