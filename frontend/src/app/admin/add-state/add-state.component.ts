import { Component ,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss']
})
export class AddStateComponent implements OnInit {
  public statearray:any[]=[];
  
constructor(private fb:FormBuilder,private db:DbserviceService){
}

ngOnInit(){
  this.db.stateview().then((data:any)=>{
    this.statearray=data;
  })
}

stateform=this.fb.group({
  state_name:[''],
})

onSubmit(){

 this.db.addstate(this.stateform.value).then((result:any)=>{
  if (result.message === 'success') {
    alert('State Inserted Successfully');
    this.ngOnInit();
  }
 })
}

onDelete(state_id: string){
  console.log(state_id)
  this.db.deletestateyid({state_id}).then((result:any)=>
  {
    if (result.message === 'success'){
    alert("data deleted successfully");
    }
    this.ngOnInit();
  })
 }            

}
