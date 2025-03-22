import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-myprofileedit',
  templateUrl: './myprofileedit.component.html',
  styleUrls: ['./myprofileedit.component.scss']
})
export class MyprofileeditComponent {
    selectedFiles?: FileList;
  currentFile?: any;
  fileInfos?: Observable<any>;
  message = '';
  users_role: any;
  Role: any;
  userupdateform!: FormGroup;
  statearr: any[] = [];
  distarr: any[] = [];
  locarr: any[]=[];
  userreg: any;
  img='';
  desc='';
  mydate: string;
  user_id: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: DbserviceService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {

    this.userupdateform = this.fb.group({
      name:[''],
    logo:[''],
    state_id:[''],
    location_id:[''],
    district_id:[''],
    description:[''],
    phone:[''],
    licdate:[''],
    address:[''],
    loc_id:[''],
    zipcode:['']
    });

    //state view
    this.db.stateview().then((result: any) => {
      this.statearr = result;
    });
    this.user_id=localStorage.getItem('userid');
    this.db.takeuserdata({user_id:this.user_id}).then((result:any)=>{
      this.userreg=result;
      this.userupdateform.setValue({
        name:this.userreg[0].name,
        state_id:this.userreg[0].state_id,
        location_id:this.userreg[0].location_id,
        district_id:this.userreg[0].district_id,
        description:this.userreg[0].description,
        phone:this.userreg[0].phone,
        licdate:this.userreg[0].licdate,
        address:this.userreg[0].address,
        loc_id:this.userreg[0].loc_id,
        zipcode:this.userreg[0].zipcode,
        logo:this.userreg[0].logo,
      })
    })
  }
  
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(event.target.files);
    }

  changedistrict() {
    let stateid = this.userupdateform.value.state_id;
    this.db.distictview({ state_id:stateid }).then((result: any) => {
      this.distarr = result;
    });
  }

  changelocation(){
    let districtid = this.userupdateform.value.district_id;
    this.db.locationview({ district_id:districtid }).then((result: any) => {
      this.locarr = result;
      });
  }
  onsubmit()
  {
    if (this.selectedFiles) {
      //console.log(this.selectedFiles);
      console.log(this.selectedFiles.item(0));
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
      this.currentFile = file;
      //console.log(this.currentFile);
      this.db.upload(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message;
      });
      }
      // End of upload
      //console.log(this.DepartmentFormGroup.value)
      this.userupdateform.value.logo = this.currentFile.name;
      this.db.addusers(this.userupdateform.value).then((confirmation: any) => {
      //console.log(confirmation);
      if (confirmation.message == "success") {
      alert('department details registered')
      this.router.navigate(['/guest/signin'])
      }
      else {
      alert('Data not inserted, Please check your data')
      }
      })
      }
    }
}
