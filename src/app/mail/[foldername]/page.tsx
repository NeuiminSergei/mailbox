import { LetterTable } from "@/components/LetterTable/LetterTable"

interface IFolderProps {
  params: {
    foldername: string
  }
}

export default function Folder({ params: { foldername } }: IFolderProps) {

  return (
    <LetterTable link={foldername}/>
  )
}