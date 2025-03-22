import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {
arrayfull: any[]=[];
  user_id:any;
  loginid: any;
  constructor(private router: Router, private db:DbserviceService) { }
  ngOnInit():void
  {

    this.loginid=localStorage.getItem('loginid');
    this.db.userview({loginid:this.loginid}).then((result:any)=>
    {
      this.arrayfull=result;
      console.log(result);
      this.user_id=localStorage.setItem('userid',this.arrayfull[0].user_id);

  
    })
  
    
  }
  
}
