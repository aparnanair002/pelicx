import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.scss']
})
export class ViewcompanyComponent {
  public districtarray:any[]=[];
  public statearray:any[]=[];
  public  arrayfull: any[]=[];
  
  constructor(private fb: FormBuilder, private router:Router,private db: DbserviceService){
  
  }
  
  ngOnInit():void
  {


    this.db.companyview().subscribe((result:any)=>
    {
      this.arrayfull=result;
      console.log(result);
    })

  }
  
  
  
 
  }
  