export class MTareas{
	public _id?: string
	public name: string
	public idtask: string
	public desctask: string
	public score: number
	public state: string
	constructor(name: string, idtask: string, desctask: string, score: number, state: string){
        this.name = name;
        this.idtask = idtask;
        this.desctask = desctask;
        this.score = score;
        this.state = state;
    }
}