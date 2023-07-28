'use client'

import { observer } from 'mobx-react-lite'
import style from './list.module.scss'
import folders from "@/store/folders"
import { usePathname } from 'next/navigation'
import modal from '@/store/modal'

export const MoveFolderList = observer(() => {

  const pathname = usePathname()
  const currentFolder = folders.folders.find(folder => folder.link === pathname)

  function handleMoveLetter(id: number) {
    if (currentFolder) {
      folders.moveLetter(currentFolder, id)
    }
    modal.handleIsOpen()
  }

  return (
    <>
      {folders.folders.map(folder =>
        <div className={style.item}
          key={folder.id}
          onClick={() => handleMoveLetter(folder.id)}
        >
          {folder.name}
        </div>)}
    </>
  )
})