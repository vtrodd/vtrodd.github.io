import {Download} from './Download'

export const DOWNLOADS: {from: string, component: JSX.Element}[] = [
  {
    from: '/download/uyco',
    component: <Download
      title='UYCO Summer Concert 2023'
      text='82 Photos, 261.32MB'
      to='https://www.dropbox.com/scl/fi/ybj9hd0pqfbpnuwlksubw/2023.06-UYCO-Summer-Concert.zip?dl=1&rlkey=wik02vl4i95zt2as3cnhesu7f'
    />
  }
]