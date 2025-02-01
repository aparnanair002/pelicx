import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export  class AddCompanyComponent implements OnInit{
  selectedFiles?: FileList;
currentFile?: any;
fileInfos?: Observable<any>;
message = '';
  public statearray: any[]=[];
  public distarray:any[]=[];
  public locarray: any[]=[];

  constructor(private fb:FormBuilder, private router:Router, private db:DbserviceService ) { 

  }
  ngOnInit(){
    this.db.stateview().then((data:any)=>{
      this.statearray=data;
    })

  
  }
 compinsertform=this.fb.group({
    name:[''],
    logo:[''],
    state_id:[''],
    location_id:[''],
    district_id:[''],
    description:[''],
    email:[''],
    phone:[''],
    regdate:[''],
    address:[''],
    loc_id:[''],
    zipcode:[''],
    user_code:"Company",
    status:"active"    
  })


  onStateChange() {
    let state_id=this.compinsertform.value.state_id;
    console.log(state_id);
    this.db.distictview({state_id}).then((result)=>{
      this.distarray=result;
    })
  }
  //district view on dropdown

//locationview on drop down
  viewlocation(){
    let district_id=this.compinsertform.value.district_id;
    this.db.locationview({district_id}).then((res:any)=>{
      this.locarray=res;
      console.log("hi",res);
     })
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(event.target.files);
    }
    // End of upload
    onSubmit() {
    // fileupload
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
    this.compinsertform.value.logo = this.currentFile.name;
    this.db.addusers(this.compinsertform.value).then((confirmation: any) => {
    //console.log(confirmation);
    if (confirmation.message == "success") {
    alert('department details registered')
    this.router.navigate(['/adminMaster/viewuser'])
    }
    else {
    alert('Data not inserted, Please check your data')
    }
    })
    }
  }

}

