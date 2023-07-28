import Link from "next/link"
import { usePathname } from 'next/navigation'
import style from './folderLink.module.scss'

interface IFolderLink {
  href: string
  children: React.ReactNode
}

export const FolderLink = ({ href, children }: IFolderLink) => {

  const pathname = usePathname()
  const rootClasses = [style.link]
  if (pathname === href) {
    rootClasses.push(style.active)
  }

  return (
    <Link className={rootClasses.join(' ')} href={href}>{children}</Link>
  )
}