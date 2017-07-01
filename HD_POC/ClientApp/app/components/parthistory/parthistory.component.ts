import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'parthistory',
    templateUrl: './parthistory.component.html',
    styleUrls: ['./parthistory.component.css'] 
})

export class PartHistoryComponent implements OnInit, OnDestroy {
    public tagNumber: string;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(queryParams => {
            this.tagNumber = queryParams.tagNumber;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}