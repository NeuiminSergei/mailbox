import style from './closeBtn.module.scss'

interface ICloseBtnProps {
  onClick: () => void
}

export const CloseBtn = ({ onClick }: ICloseBtnProps) => {

  return (
    <button className={style.btn} onClick={onClick}>
    </button>
  )
}