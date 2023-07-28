import { FolderList } from "@/components/FolderList/FolderList"
import style from './layout.module.scss'
import { Modals } from "@/components/Modals/Modals"

export default function MailLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className={style.container}>
      <div className={style.folder_list}>
        <FolderList />
      </div>
      <div className={style.table}>
        {children}
      </div>
      <Modals />
    </div>
  )
}