export class Note {
    public title: string;
    public content: string|null;

    constructor(title: string, content: string){
        this.title = title;
        this.content = content;
    }
}
