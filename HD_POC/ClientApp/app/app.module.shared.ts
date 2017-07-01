import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { AppHeaderComponent } from './components/appheader/appheader.component';
import { PartMovementsComponent } from './components/partmovements/partmovements.component';
import { PartHistoryComponent } from './components/parthistory/parthistory.component';
import { PartDetailsLargeComponent } from './components/partdetailslarge/partdetailslarge.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,        
        AppHeaderComponent,
        PartMovementsComponent,
        PartHistoryComponent,
        PartDetailsLargeComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'parthistory/:tagNumber', component: PartHistoryComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
