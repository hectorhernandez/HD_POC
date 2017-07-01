import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PartDetailsDto } from '../models/partDetailsDto';
import { PartMovementDto } from '../models/partMovementDto';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PartService {    
    private baseUrl: string;
    private partApiUrl: string; //TODO: review why is not working with '/api/part/'

    constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        this.baseUrl = originUrl;
        this.partApiUrl = this.baseUrl + "/api/part";
    }    

    getPartDetails(tagNumber: string): Observable<PartDetailsDto> {
        let fullUrl = this.partApiUrl + "/details/" + tagNumber;
        return this.http.get(fullUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPartMovements(tagNumber: string): Observable<PartMovementDto[]> {
        let fullUrl = this.partApiUrl + "/movements/" + tagNumber;
        return this.http.get(fullUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }    

    private extractPartDetailsData(res: Response) {
        var data = this.extractData(res);

        if (data.imagePath) {
            data.imagePath = this.baseUrl + data.imagePath;
        }

        return data;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);

        return Observable.throw(errMsg);
    }
}