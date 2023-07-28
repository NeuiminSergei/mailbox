import { makeAutoObservable } from "mobx"

class Modal {
  isOpen: boolean = false
  content = ''

  constructor() {
    makeAutoObservable(this)
  }

  handleIsOpen() {
    this.isOpen = !this.isOpen
  }

  handleContent(content:string) {
    this.content = content
  }

}

export default new Modal()