export class New {
    id: number;
    name: string;
    imagesRoute: string;
    imagesCount: number;

    constructor(id: number,
                name: string,
                imagesRoute: string,
                imagesCount: number){
        this.id = id;
        this.name = name;
        this.imagesRoute = imagesRoute;
        this.imagesCount = imagesCount;
    }

}
