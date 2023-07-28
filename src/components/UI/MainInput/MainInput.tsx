import style from './mainInput.module.scss'

interface IMainInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const MainInput = ({ value, onChange, placeholder }: IMainInputProps) => {

  return (
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}