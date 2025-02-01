import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbserviceService {
  constructor(private http: HttpClient) {}

  //Admin Login
  adminLogin(data: any) {
    return this.http.post('http://localhost:3000/adminlogin', data).toPromise();
  }

  addstate(data: any) {
    return this.http.post('http://localhost:3000/addstate', data).toPromise();
  }

  stateview() {
    return this.http.get('http://localhost:3000/stateview').toPromise();
  }

  distictview(data: any) {
    return this.http
      .post<any>('http://localhost:3000/districtview', data)
      .toPromise();
  }
  locationview(data: any) {
    return this.http
      .post<any>('http://localhost:3000/locaview', data)
      .toPromise();
  }

  adddistrict(data: any) {
    return this.http
      .post('http://localhost:3000/adddistrict', data)
      .toPromise();
  }

  addlocation(data: any) {
    return this.http
      .post('http://localhost:3000/addlocation', data)
      .toPromise();
  }

  deletestateyid(data: any) {
    return this.http
      .post('http://localhost:3000/deletestateyid', data)
      .toPromise();
  }
  deletedistrictbyid(data: any) {
    return this.http
      .post('http://localhost:3000/deletedistrictbyid', data)
      .toPromise();
  }
  deletelocationbyid(data: any) {
    return this.http
      .post('http://localhost:3000/deletelocationbyid', data)
      .toPromise();
  }
  getstatebyid(id: any) {
    return this.http.post<any>('http://localhost:3000/getstatebyid', id);
  }

  getdistrictbyid(id: any) {
    return this.http.post<any>('http://localhost:3000/getdistrictbyid', id);
  }
  getlocbyid(id: any) {
    console.log()
    return this.http.post<any>('http://localhost:3000/getlocbyid', id);
  }

  editlocation(data: any) {
    return this.http.post('http://localhost:3000/locedit', data).toPromise();
  }
  editstate(data: any) {
    return this.http.post('http://localhost:3000/stateedit', data).toPromise();
  }
  editdistrict(data: any) {
    return this.http
      .post('http://localhost:3000/districtedit', data)
      .toPromise();
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `http://localhost:3000/upload`, formData, {
    reportProgress: true, responseType: 'json' });
    return this.http.request(req);
    }
    // End of fileupload
    
    //department register
    addusers(data:any){
    return this.http.post("http://localhost:3000/users",data).toPromise()
    }
    //End of department register
}
