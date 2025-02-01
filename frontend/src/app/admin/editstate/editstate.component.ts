import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editstate',
  templateUrl: './editstate.component.html',
  styleUrls: ['./editstate.component.scss']
})
export class EditstateComponent {
  state_id:any;
  private statearray:any[]=[];
  editstateform!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private db:DbserviceService) { 
      this.route.paramMap.subscribe((params:ParamMap)=>{
        this.state_id=params.get('id');
      })
  }
  ngOnInit(): void {
    this.editstateform=this.fb.group({
      state_id:[''],
      state_name:[''],
    })

    this.db.getstatebyid({state_id:this.state_id}).subscribe((data:any)=>{
      this.statearray=data;
      this.editstateform.setValue({
        state_id:data[0].state_id,
        state_name:data[0].state_name,
      })
    })
  }
     onSubmit(){
      this.db.editstate(this.editstateform.value).then((confirmation:any)=>{
        if (confirmation.message === 'success') {
          alert('state Updated Successfully');

         
        }})
      }
     }
  






