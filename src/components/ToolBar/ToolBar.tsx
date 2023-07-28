import modal from "@/store/modal"
import { MainBtn } from "../UI/MainBtn/MainBtn"
import style from './toolBar.module.scss'

export const ToolBar = () => {

  function handleMove() {
    modal.handleIsOpen()
    modal.handleContent('moveFFolder')
  }

  return (
    <div className={style.toolbar}>
      <MainBtn onClick={() => handleMove()}>переместить</MainBtn>
    </div >
  )
}