'use client'

import style from './letterTable.module.scss'
import folders from "@/store/folders";
import { observer } from "mobx-react-lite";
import { ToolBar } from "../ToolBar/ToolBar";

interface ILetterTableProps {
  link: string
}

export const LetterTable = observer(({ link }: ILetterTableProps) => {

  const currentFolder = folders.folders.find(folder => folder.link === `/mail/${link}`)
  const rootClasses = [style.tr, style.active]

  return (
    <>
      <ToolBar />
      <table className={style.table}>
        <tbody>
          {currentFolder?.letters.map(letter =>
            <tr className={letter.selected ? rootClasses.join(' ') : style.tr} key={letter.id}>
              <td>
                <input
                  style={{ cursor: "pointer" }}
                  type="checkbox"
                  checked={folders.findLetter(letter.id, currentFolder)?.selected}
                  onChange={() => { folders.handleLetterSelected(letter.id, currentFolder) }}
                />
              </td>
              <td className={style.sender}>{letter.sender}</td>
              <td className={style.preview}>{letter.content}</td>
              <td className={style.date}>{letter.date}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
})