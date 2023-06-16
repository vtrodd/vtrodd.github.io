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