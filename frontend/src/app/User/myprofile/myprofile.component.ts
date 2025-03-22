import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent {
  arrayfull: any[]=[];
  user_id:any;
  constructor(private router: Router, private db:DbserviceService) { }
  ngOnInit():void
  {

    this.user_id=localStorage.getItem('userid');

    this.db.userview({user_id:this.user_id}).then((result:any)=>
    {
      this.arrayfull=result;
      console.log(result);

  
    })
  
    
  }
  

  
  
 
}
