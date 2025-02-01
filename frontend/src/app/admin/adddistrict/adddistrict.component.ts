import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adddistrict',
  templateUrl: './adddistrict.component.html',
  styleUrls: ['./adddistrict.component.scss']
})
export class AdddistrictComponent implements OnInit
 {
public statearray:any[]=[];
public arrayfull:any[]=[];
  districtform!:FormGroup;

constructor(private fb: FormBuilder, private router:Router,private db: DbserviceService){

}

ngOnInit():void
{
  this.districtform=this.fb.group({
    district_name:[''],
    state_id:[''],
    
  })

this.db.stateview().then((data:any)=>{
  this.statearray=data;
  console.log(data);
  
})

}


viewdistrict(){
  let state_id=this.districtform.value.state_id;
  let cons=1;
  this.db.distictview({state_id,cons}).then((res:any)=>{
    this.arrayfull=res;
    console.log("hi",res);
   })
}

onDelete(district_id: string){
  console.log(district_id)
  this.db.deletedistrictbyid({district_id}).then((result:any)=>
  {
    if (result.message === 'success'){
    alert("data deleted successfully");
    }
    this.viewdistrict();
  })
 }            




onSubmit(){
  let data = this.districtform.value.state_id;
  console.log(data)

  this.db.adddistrict(this.districtform.value).then((result:any)=>{
   if (result.message === 'success') {
     alert('District Inserted Successfully');
     this.viewdistrict();
   }
   console.log(result);
  })
 }

}

          
