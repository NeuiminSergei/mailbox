import { ILetter } from "@/model/model"
import { makeAutoObservable } from "mobx"

export interface IFolder {
  id: number
  link: string
  name: string
  default: boolean
  letters: ILetter[]
}

class Folders {
  incoming: IFolder =
    {
      link: '/mail/incoming',
      name: 'Входящие',
      id: 111,
      default: true,
      letters: [
        {
          id: 1029,
          sender: 'Михаил',
          content: 'Velit irure Lorem id consectetur ex mollit anim ex id. Do laboris elit magna duis consequat. Consectetur occaecat exercitation consequat.',
          date: '26.06.2021',
          selected: false,
        },
        {
          id: 264,
          sender: 'Алексей',
          content: 'Nulla anim id anim cupidatat dolor ex fugiat. Consequat ex officia non incididunt fugiat eiusmod laborum aliqua quis eu laboris laboris.',
          date: '17.01.2023',
          selected: false,
        },
        {
          id: 125,
          sender: 'Артем',
          content: 'Cupidatat non occaecat commodo nostrud id commodo laborum laborum sit enim excepteur cillum nulla nostrud.',
          date: '12.02.2020',
          selected: false,
        },
      ]
    }

  sent: IFolder = {
    link: '/mail/sent',
    name: 'Отправленные',
    id: 45040,
    default: true,
    letters: [
      {
        id: 555,
        sender: 'Вы',
        content: 'Deserunt culpa nisi voluptate irure sint. Ut aute cillum sint ea ut dolore ad laboris Lorem laborum fugiat.',
        date: '02.11.2023',
        selected: false,
      },
    ]
  }

  drafts: IFolder = {
    link: '/mail/drafts',
    name: 'Черновики',
    id: 554009,
    default: true,
    letters: [
      {
        id: 325,
        sender: 'Вы',
        content: 'Esse eiusmod quis cillum anim commodo elit ipsum commodo labore aliquip officia exercitation.',
        date: '01.10.2022',
        selected: false,
      },
    ]
  }


  remote: IFolder = {
    link: '/mail/remote',
    name: 'Удаленные',
    id: 999581,
    default: true,
    letters: [
      {
        id: 7,
        sender: 'Александр',
        content: 'Aliquip culpa anim ullamco enim quis adipisicing. Nisi cupidatat proident laboris irure.',
        date: '30.07.2019',
        selected: false,
      },
    ]
  }

  spam: IFolder = {
    link: '/mail/spam',
    name: 'Спам',
    id: 3450000,
    default: true,
    letters:
      [
        {
          id: 1238,
          sender: 'Николай',
          content: 'Incididunt dolor qui excepteur reprehenderit eiusmod est mollit mollit aliqua esse nisi officia duis Lorem.',
          date: '30.07.2019',
          selected: false,
        },
      ]
  }

  folders: IFolder[] = [
    this.incoming,
    this.sent,
    this.drafts,
    this.remote,
    this.spam,
  ]

  renamedFolderId = 0


  constructor() {
    makeAutoObservable(this)
  }

  changeRenamedFolderId(id: number) {
    this.renamedFolderId = id
  }


  addFolders(newFolder: IFolder) {
    if (newFolder.name.trim())
      this.folders.push(newFolder)
  }

  removeFolder(id: number) {
    this.folders = this.folders.filter(folder => folder.id !== id)
  }

  renameFolder(id: number, name: string) {
    const folder = this.folders.find(folder => folder.id === id)
    if (folder) {
      folder.name = name
    }
  }

  findLetter(id: number, currentFolder: IFolder) {
    const letter = currentFolder.letters.find(letter => letter.id === id)
    if (letter) {
      return letter
    }
  }

  handleLetterSelected(id: number, currentFolder: IFolder) {
    const letter = this.findLetter(id, currentFolder)
    if (letter) {
      letter.selected = !letter.selected
    }
  }

  moveLetter(currentFolder: IFolder, id: number) {
    const selectedLetters = currentFolder.letters.filter(letter => letter.selected === true)
    const folder = this.folders.find(folder => folder.id === id)
    currentFolder.letters = currentFolder.letters.filter(letter => letter.selected === false)
    selectedLetters.map(letter => letter.selected = false)
    if (folder) {
      folder.letters = [...folder.letters, ...selectedLetters]
    }
  }

}

export default new Folders()