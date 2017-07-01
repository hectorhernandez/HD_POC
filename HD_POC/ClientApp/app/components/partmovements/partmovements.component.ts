import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { PartMovementDto } from '../../models/partMovementDto';
import { PartService } from '../../services/part.service';
import { Router} from '@angular/router';

@Component({
    selector: 'partmovements',
    templateUrl: './partmovements.component.html',
    providers: [ PartService ]
})

export class PartMovementsComponent {
    public movements: PartMovementDto[];     
    private _tagNumber: string;
    private errorMessage: string;

    @Input("tagNumber")
    set tagNumber(tagNumber: string) {
        this._tagNumber = tagNumber;
        this.getMovements();
    }

    constructor(private partService: PartService, private router: Router) { }

    public getMovements() {        
        this.partService.getPartMovements(this._tagNumber)
            .subscribe(
            partmovements => this.movements = partmovements,
            error => this.errorMessage = <any>error
            );
    }

    public accept() {
        this.router.navigate(['/home']);
    }

    public cancel() {
        this.router.navigate(['/home']);
    }
}