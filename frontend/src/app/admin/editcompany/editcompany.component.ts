import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.scss'],
})
export class EditcompanyComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  fileInfos?: Observable<any>;
  message = '';
  public statearray: any[] = [];
  public distarray: any[] = [];
  public locarray: any[] = [];
  public dataarray: any[] = [];
  public restarray:any;
  users_id: string | null;

  // Initializing the form
  editcompanyform: FormGroup = this.fb.group({
    col_address: [''],
    col_descr: [''],
    col_licdate: [''],
    col_name: [''],
    col_phone: [''],
    col_pict: [''],
    //col_regdate: [''],
    col_zip: [''],
    district_id: [''],
    district_name: [''],
    loc_id: [''],
    loc_name: [''],
   // login_id: [''],
    //password: [''],
    state_id: [''],
    status: [''],
    //user_name: [''],
    //users_id: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private db: DbserviceService
  ) {
    // Getting company_id from the route parameters
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.users_id = params.get('id');
      console.log('id', this.users_id);
    });
  }

  ngOnInit() {
    // View company details by company_id
    this.db.companyedit({ users_id: this.users_id }).then((result: any) => {
      this.dataarray = result;
      console.log('singlecompany', result);
  
      // Convert col_licdate to dd-MM-yyyy format
     
    let formattedDate = '';
    if (result[0].col_licdate) {
      const date = new Date(result[0].col_licdate);
      formattedDate = date.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD'
    }

    this.restarray={
    district_name:result[0].district_name,
    location_name:result[0].loc_name,
    }

  
      this.editcompanyform.patchValue({
        col_address: result[0].col_address,
        col_descr: result[0].col_descr,
        col_name: result[0].col_name,
        col_phone: result[0].col_phone,
       
        col_licdate: formattedDate ,

        col_zip: result[0].col_zip,
        district_id: result[0].district_id,
        district_name: result[0].district_name,
        loc_id: result[0].loc_id,
        loc_name: result[0].loc_name,
        state_id: result[0].state_id,
        status: result[0].status,
        users_id: result[0].users_id,
        col_pict: result[0].col_pict,
      });
    });
  
    // TODO: Get all states
    this.db.stateview().then((result:any)=>{
      this.statearray=result;
    })

  }
    onStateChange() {
    const state_id = this.editcompanyform.value.state_id;
    console.log(state_id);
    this.db.distictview({ state_id }).then((result: any) => {
      this.distarray = result;
      console.log(result);
    });
  }

  viewlocation() {
    const district_id = this.editcompanyform.value.district_id;
    this.db.locationview({ district_id }).then((res: any) => {
      this.locarray = res;
      console.log('hi', res);
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(event.target.files);
  }

  onSubmit() {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.db.upload(this.currentFile).subscribe((event: any) => {
          this.message = event.body.message;
        });
      }

      this.editcompanyform.value.logo = this.currentFile.name;
      this.db.addusers(this.editcompanyform.value).then((confirmation: any) => {
        if (confirmation.message === 'success') {
          alert('Department details registered');
          this.router.navigate(['/adminMaster/viewcompany']);
        } else {
          alert('Data not inserted, Please check your data');
        }
      });
    }
  }
}
