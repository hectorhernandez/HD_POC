export class PartDetailsDto {

    constructor (
    public partNumber: string,    
    public tagNumber: string,
    public shapeDescr: string,
    public color: string,
    public model: string,
    public workStation: string,
    public process: string,
    public imagePath: string) { }
}