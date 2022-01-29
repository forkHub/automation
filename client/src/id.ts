export class Id {
    private _id: number = 0;



    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}