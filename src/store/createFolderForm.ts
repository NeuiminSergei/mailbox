import { makeAutoObservable } from "mobx"

class CreateFolderForm {
  folderNameInp: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  handleFoldernameInp(name: string) {
    this.folderNameInp = name
  }

}

export default new CreateFolderForm()