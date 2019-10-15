import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  phoneCts = [ 
    {contact_name:"vivian Kikubo", contact_phone: "0784674523"},
    {contact_name:"Salim G", contact_phone: "0779 902345"},
    {contact_name:"Chris BOU", contact_phone: "0798 787970"},
    {contact_name:"Jessie J", contact_phone: "0756 543432"}
  ];
 
  constructor(public http: HttpClient) {}

  saveToCloud(): Observable<any>{
    const headers = new HttpHeaders({
      'content-type' : 'application/json'
    })
    return this.http.post('http://testapps.citi-mall.com/codetest/index.php/restPostController/add_contact', this.phoneCts[0], {
      headers
    }) 
  }

  ngOnInit() {
    this.saveToCloud().subscribe(res=>{
      console.log(res);//lets execute this and see
    })
    // fetch(this.urlService.url + 'add_contact',{method: 'POST', body: JSON.stringify({contact_name:"Naruto", contact_phone: "0784674523"})})
    //  .then(res=>console.log(res))
  }
}