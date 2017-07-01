import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})

export class NavMenuComponent implements OnInit {
    public tagNumber: string;

    constructor(private router: Router) { }

    ngOnInit() { this.tagNumber = "12312hjk12341234kjh1234b12"; }

    public goToPartHistory() {        
        this.router.navigate(['/parthistory', this.tagNumber]);
    }
}
