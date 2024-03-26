import ListItem from "./Listitem";

interface List{
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj:ListItem): void,
    removeItem(id: string): void,

}

export default class FullList implements List {
    // singelton 
    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []){}

    set list(list: ListItem[]){
        this._list = list;
    }

    get list(): ListItem[]{
        return this._list;
    }

    public load():void{
        const storedList: string | null = localStorage.getItem('myList')
        if(typeof storedList !== 'string') return

        const parsedList = {_id: string , _item : string, _checked: boolean}[] = JSON.parse(storedList)

    }

    public save(): void{
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    public clearList(): void{
        this._list = []
        this.save()

    }

    public addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save();
    }

    public removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
}