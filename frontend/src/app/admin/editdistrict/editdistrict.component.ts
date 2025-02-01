import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editdistrict',
  templateUrl: './editdistrict.component.html',
  styleUrls: ['./editdistrict.component.scss'],
})
export class EditdistrictComponent {
  district_id: any;
  public statearray: any[] = [];
  public districtarray: any[] = [];
  cons: 2;

  editdistrictform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private db: DbserviceService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.district_id = params.get('id');
    });
  }
  ngOnInit(): void {
    this.editdistrictform = this.fb.group({
      state_id: [''],
      district_name: [''],
      district_id: [''],
      state_name: [''],
    });

    this.db.stateview().then((data: any) => {
      this.statearray = data;
    });

    this.db
      .getdistrictbyid({ district_id: this.district_id })
      .subscribe((data: any) => {
        this.districtarray = data;
        console.log(data);
        this.editdistrictform.setValue({
          state_id: data[0].state_id,
          state_name: data[0].state_name,
          district_name: data[0].district_name,
          district_id: data[0].district_id,
        });
      });
  }

  onSubmit() {
    this.db.editdistrict(this.editdistrictform.value).then((confirmation: any) => {
      if (confirmation.message === 'success') {
        
        this.router.url['/adminMaster/districtadd'];
        alert('district Updated Successfully');
      }
    });
  }
}
