'use client'

import modal from "@/store/modal"
import { CreateFolderForm } from "../CreateFolderForm/CreateFolderForm"
import { Modal } from "../Modal/Modal"
import { MoveFolderList } from "../MoveFolderList/MoveFolderList"
import { RenameFolderForm } from "../RenameFolderForm/RenameFolderForm"
import { observer } from "mobx-react-lite"

export const Modals = observer(() => {

  return (
    <>
      {modal.content === 'createFolder' &&
        <Modal>
          <CreateFolderForm />
        </Modal>
      }
      {modal.content === 'renameFolder' &&
        <Modal>
          <RenameFolderForm />
        </Modal>
      }
      {modal.content === 'moveFFolder' &&
        <Modal>
          <MoveFolderList />
        </Modal>
      }
    </>
  )
})