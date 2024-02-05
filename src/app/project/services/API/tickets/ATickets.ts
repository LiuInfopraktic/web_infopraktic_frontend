import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class ATickets {
    CONF = require('../conf.json')
    url = this.CONF.url;
    constructor(private http: HttpClient){}


    getTickets():Observable<any> {
        let token = this.getToken();
        if (!token) token = ''
        return this.http.get(`${this.url}/tickets`, this.createHeader(token));
    }

    newTickets(ticket:any):Observable<any> {
        let token = this.getToken();
        if (!token) token = ''
        return this.http.post(`${this.url}/tickets`, ticket, this.createHeader(token));
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