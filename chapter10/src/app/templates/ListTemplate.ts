import FullList from "../model/FullList";

interface DOMList{
    ul: HTMLUListElement,
    clear(): void,
    render(fulllist: FullList): void
}

export default class ListTemplate implements DOMList{

    ul: HTMLUListElement

    private constructor(private _ul: HTMLUListElement){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this._ul.innerHTML = " "
    }

    render(fulllist: FullList): void {
        this.clear()

        fulllist.list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement
            li.className = "item"

            const check = document.createElement("input") as HTMLInputElement
            check.type = "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)

            check.addEventListener("change",()=>{
                item.checked = !item.checked
                fulllist.save()
            })

            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.id
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.className = 'button'
            button.textContent = 'X'
            li.append(button)
        })
    }
}