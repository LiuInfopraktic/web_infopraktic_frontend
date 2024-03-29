import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class AGraphic {
    CONF = require('../conf.json')
    url = this.CONF.url;
    constructor(private http: HttpClient){}


    userGraphics():Observable<any> {
        let token = this.getToken();
        if (!token) token = ''
        return this.http.get(`${this.url}/users/graphics`, this.createHeader(token));
    }

    getConfig(graphic:any){
        console.log(graphic)
    }

    getToken() { return localStorage.getItem('infopraktic-token'); }


    private createHeader(token:string) {

        const header = {
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Acces-Control-Allow-Headers':'Origin, Content-Type, Accept,Authorization',
            'authorization':token
        }
        return {headers: new HttpHeaders(header)};
    }


}