import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class ALogin {
    url = 'http://localhost:3000/api/v0.1';
    constructor(private http: HttpClient){}

    requestOptions = this.createHeader();

    getLogin(user:any):Observable<any> {
        return this.http.post(`${this.url}/login`, user, this.requestOptions);
    }


    private createHeader() {

        const header = {
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Acces-Control-Allow-Headers':'Origin, Content-Type, Accept,Authorization',
        }
        return {headers: new HttpHeaders(header)};
    }


}