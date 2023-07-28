'use client'

import folders from "@/store/folders"
import { observer } from "mobx-react-lite"
import { FolderLink } from "../UI/FolderLink/FolderLink"
import style from './folderList.module.scss'
import { MainBtn } from "../UI/MainBtn/MainBtn"
import modal from "@/store/modal"
import { RenameFolderBtn } from "../UI/RenameFolderBtn/RenameFolderBtn"
import { DelFolderBtn } from "../UI/DelFolderBtn/DelFolderBrn"

export const FolderList = observer(() => {

  function handleReaname(id: number) {
    folders.changeRenamedFolderId(id)
    modal.handleContent('renameFolder')
    modal.handleIsOpen()
  }

  function handleCreate() {
    modal.handleContent('createFolder')
    modal.handleIsOpen()
  }

  return (
    <div className={style.list_wrapper}>
      <ul className={style.folder_list}>
        {folders.folders.map(folder =>
          <li className={style.folder_list_item} key={folder.id}>
            <FolderLink href={folder.link}>
              {folder.name}
            </FolderLink>
            {!folder.default &&
              <div className={style.edit_btn}>
                <RenameFolderBtn onClick={() => handleReaname(folder.id)} />
                <DelFolderBtn onClick={() => folders.removeFolder(folder.id)} />
              </div>
            }
          </li>)}
      </ul>
      <MainBtn onClick={() => handleCreate()}>Создать папку</MainBtn>
    </div>
  )
})