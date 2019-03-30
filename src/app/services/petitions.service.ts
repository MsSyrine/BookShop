import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ()
export class PetitionsService {
    public url: string;
  length: number;
    constructor(
        public _http: HttpClient
    ) {
        this.url = '../assets/data.json';
    }
    getBook(): Observable<any> {
        return this._http.get(this.url);
    }
}

