export interface IItem {
  name: string
  keyed_name: string
}

export interface IFolder extends IItem {
  items?: IItem[]
}

export interface IDownload extends IItem {
  date: string
  description: string
  download_url: string
}

export interface ICardable extends IItem {
  date: string
  local_image_url: string
}

export class BlogPost {
  title: string
  date: Date
  content: string

  constructor(raw?: string) {
    if (!raw) {
      this.title = ''
      this.date = new Date()
      this.content = ''
      return
    }
    
    const lines = raw.split('\n')
    const title = lines.shift()?.replaceAll('[//]: # (', '').slice(0, -1)
    const [day, month, year] = lines.shift()?.replaceAll('[//]: # (', '').slice(0, -1).split('/') || []
    const content = lines.join('\n')

    this.title = title || ''
    this.date = new Date(`${year}-${month}-${day}`)
    this.content = content || ''
  }
}