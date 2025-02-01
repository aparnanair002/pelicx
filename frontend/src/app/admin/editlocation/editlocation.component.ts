import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.scss'],
})
export class EditlocationComponent {
  public locarray: any[] = [];
  public statearray: any[] = [];
  public arrayfull: any[] = [];
  loc_id: any;
  editlocform!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: DbserviceService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.loc_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.editlocform = this.fb.group({
      state_id: [''],
      loc_id: [''],
      loc_name: [''],
      district_name: [''],
      district_id: [''],
      state_name: [''],
    });

    this.db.stateview().then((data: any) => {
      this.statearray = data;      
    });

    this.db.getlocbyid({loc_id:this.loc_id}).subscribe((result:any)=>{
      this.arrayfull=result;
      console.log("array",this.arrayfull);
      this.editlocform.setValue({
        state_id:result[0].state_id,
        district_id:result[0].district_id,
        district_name:result[0].district_name,
        state_name:result[0].state_name,
        loc_id:result[0].loc_id,
        loc_name:result[0].loc_name
      });
    });
  }

  //district view on dropdown
  onStateChange() {
    let state_id = this.editlocform.value.state_id;
    console.log("Selected State ID:", state_id);
    this.db.distictview({ state_id }).then((result) => {
      console.log("Districts fetched:", result);
      this.locarray = result;
    }).catch(error => {
      console.error("Error fetching districts:", error);
    });
  }

  onSubmit() {
    this.db.editlocation(this.editlocform.value).then((confirmation: any) => {
      if (confirmation.message === 'success') {
        
        this.router.url['/adminMaster/districtadd'];
        alert('district Updated Successfully');
      }
    });
  }
}
