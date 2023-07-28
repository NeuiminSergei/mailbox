'use client'

import style from './form.module.scss'
import { observer } from 'mobx-react-lite'
import folders from '@/store/folders'
import renameFolderForm from '@/store/renameFolderForm'
import modal from '@/store/modal'
import { MainBtn } from '../UI/MainBtn/MainBtn'
import { MainInput } from '../UI/MainInput/MainInput'

export const RenameFolderForm = observer(() => {

  function handleReaname(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    folders.renameFolder(folders.renamedFolderId, renameFolderForm.folderNameInp)
    renameFolderForm.handleFoldernameInp('')
    modal.handleIsOpen()
  }

  return (
    <form onSubmit={handleReaname} className={style.form}>
      <MainInput
        value={renameFolderForm.folderNameInp}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => renameFolderForm.handleFoldernameInp(e.target.value)}
        placeholder='Введите название папки'
      />
      <MainBtn>Переименовать</MainBtn>
    </form>

  )
})