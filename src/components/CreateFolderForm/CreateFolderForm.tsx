import { MainInput } from "../UI/MainInput/MainInput"
import style from './form.module.scss'
import { MainBtn } from "../UI/MainBtn/MainBtn"
import { observer } from "mobx-react-lite"
import folders from "@/store/folders"
import createFolderForm from "@/store/createFolderForm"
import modal from "@/store/modal"

export const CreateFolderForm = observer(() => {

  function createFolder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const folder = {
      name: createFolderForm.folderNameInp,
      id: Date.now(),
      link: `/mail/${createFolderForm.folderNameInp.replaceAll(' ', '') + Date.now()}`,
      letters: [],
      default: false
    }
    
    folders.addFolders(folder)
    createFolderForm.handleFoldernameInp('')
    modal.handleIsOpen()
  }

  return (
    <form className={style.form} onSubmit={createFolder}>
      <MainInput
        value={createFolderForm.folderNameInp}
        onChange={(e) => createFolderForm.handleFoldernameInp(e.target.value)}
        placeholder='Введите название папки'
      />
      <MainBtn>Создать</MainBtn>
    </form>
  )
})