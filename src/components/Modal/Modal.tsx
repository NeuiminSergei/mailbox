'use client'

import { observer } from 'mobx-react-lite'
import style from './modal.module.scss'
import modal from '@/store/modal'
import { CloseBtn } from '../UI/CloseBtn/CloseBtn'

interface IModalProps {
  children: React.ReactNode
}

export const Modal = observer(({ children }: IModalProps) => {

  const rootClasses = [style.modal]
  if (modal.isOpen) {
    rootClasses.push(style.active)
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={style.modal_content}>
        <CloseBtn onClick={() => modal.handleIsOpen()} />
        {children}
      </div>
    </div>
  )
})