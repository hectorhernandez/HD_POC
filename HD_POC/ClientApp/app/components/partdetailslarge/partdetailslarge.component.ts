import { Component,Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PartDetailsDto } from '../../models/partDetailsDto';
import { PartService } from '../../services/part.service'

@Component({
    selector: 'partdetailslarge',
    templateUrl: './partdetailslarge.component.html',
    styleUrls: ['./partdetailslarge.component.css'],
    providers: [ PartService ]
})

export class PartDetailsLargeComponent implements OnInit {
    public _tagNumber: string;    
    public partDetails: PartDetailsDto;
    public errorMessage: string;

    @Input("tagNumber")
    set partNumber(tagNumber: string) {
        this._tagNumber = tagNumber;
        this.getPartDetails();
    }

    constructor(private partService: PartService) { }

    ngOnInit() { /*this.getPartDetails()*/ }

    public getPartDetails() {
        this.partService.getPartDetails(this._tagNumber)
            .subscribe(
            partDetails => this.partDetails = partDetails,
                error => this.errorMessage = <any>error
            );
    }
}