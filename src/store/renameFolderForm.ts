import { makeAutoObservable } from "mobx"

class RenameFolderForm {
  folderNameInp: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  handleFoldernameInp(name: string) {
    this.folderNameInp = name
  }

}

export default new RenameFolderForm()