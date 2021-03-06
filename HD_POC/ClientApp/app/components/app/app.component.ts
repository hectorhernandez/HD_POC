import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public location = '';

    constructor(private _router: Router) {
        this.location = _router.url;
    }
}
