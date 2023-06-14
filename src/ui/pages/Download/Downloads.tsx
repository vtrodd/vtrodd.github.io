import {Download} from './Download'

export const DOWNLOADS: {from: string, component: JSX.Element}[] = [
  {
    from: 'download/uyco',
    component: <Download
      title='UYCO Summer Concert 2023'
      text='82 Photos, 261.32MB'
      to='https://www.dropbox.com/scl/fi/ybj9hd0pqfbpnuwlksubw/2023.06-UYCO-Summer-Concert.zip?dl=1&rlkey=wik02vl4i95zt2as3cnhesu7f'
    />
  },
  {
    from: 'download/uycb/2023/summer',
    component: <Download
      title='UYCB Summer Concert 2023'
      text='221 Photos, 706.92MB'
      to='https://www.dropbox.com/scl/fi/fz7f0t27116mbc0y3ysd7/2023.06-UYCB-Summer-Concert.zip?dl=1&rlkey=8fnq68pha9a13ayu7m11z0wxo'
    />
  },
  {
    from: 'download/uycb/2023/spring',
    component: <Download
      title='UYCB Spring Concert 2023'
      text='104 Photos, 318.68MB'
      to='https://www.dropbox.com/scl/fi/kb07wj98q9xjmgqqfv0ug/2023.03-UYCB-Spring-Concert.zip?dl=1&rlkey=iv5g98tfcats3xfie8b6lcxs9'
    />
  },
  {
    from: 'download/uycb/2021/winter',
    component: <Download
      title='UYCB Winter Concert 2021'
      text='46 Photos, 196.29MB'
      to='https://www.dropbox.com/scl/fi/o40mu81tp75rqc03ulvuz/2021.11-UYCB-Winter-Concert.zip?dl=0&rlkey=25t9yg4ouigu6uaeusozumzxp'
    />
  }
  
]