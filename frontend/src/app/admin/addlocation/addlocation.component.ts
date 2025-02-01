import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.scss']
})
export class AddlocationComponent implements OnInit {
public locarray:any[]=[];
public statearray:any[]=[];
public  arrayfull: any[]=[];

constructor(private fb: FormBuilder, private router:Router,private db: DbserviceService){

}

ngOnInit():void
{
//state view on dropdown

this.db.stateview().then((data:any)=>{
  this.statearray=data;
})
}
//district view on dropdown
onStateChange() {
  let state_id=this.locform.value.state_id;
  console.log(state_id);
  this.db.distictview({state_id}).then((result)=>{
    this.locarray=result;
  })
}
//location view

viewlocation(){
  let district_id=this.locform.value.district_id;
  this.db.locationview({district_id}).then((res:any)=>{
    this.arrayfull=res;
    console.log("hi",res);
   })
}


locform=this.fb.group({
  state_id:[''],
  loc_name:[''],
  district_id:[''],
  
})


onDelete(loc_id: string){
  console.log(loc_id)
  this.db.deletelocationbyid({loc_id}).then((result:any)=>
  {
    if (result.message === 'success'){
    alert("data deleted successfully");
    }
    this.viewlocation();
  })
 }       

onSubmit(){

  this.db.addlocation(this.locform.value).then((result:any)=>{
   if (result.message === 'success') {
     alert('Location Inserted Successfully');
     this.viewlocation();
   }
  })
 }
}
