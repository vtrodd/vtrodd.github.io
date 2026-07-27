import type {TransitionBeforePreparationEvent} from 'astro:transitions/client'

const PAGE_ORDER = ['/', '/projects', '/hobbies']

const normalisePath = (path: string) => path.replace(/\/$/, '') || '/'

const updateEventDirection = (event: TransitionBeforePreparationEvent) => {
  const currentPath = normalisePath(window.location.pathname)
  const previousPath = normalisePath(new URL(event.to).pathname)

  const currentIndex = PAGE_ORDER.indexOf(currentPath)
  const previousIndex = PAGE_ORDER.indexOf(previousPath)

  if (currentIndex === -1 || previousIndex === -1 || currentIndex === previousIndex) {
    event.preventDefault()
    return
  }

  event.direction = currentIndex > previousIndex ? 'forward' : 'back'
}

const preventActiveLinkClick = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()
}

const updateActiveLink = () => {
  const currentPath = normalisePath(window.location.pathname)
  const links = document.querySelectorAll<HTMLAnchorElement>('nav > ul > li > a')

  links.forEach(link => {
    // normalisePath(new URL(link.href).pathname) === currentPath ? link.setAttribute('data-active', 'true') : link.removeAttribute('data-active')
    if (normalisePath(new URL(link.href).pathname) === currentPath) {
      link.setAttribute('data-active', 'true')
      link.addEventListener('click', preventActiveLinkClick)
    } else {
      link.removeAttribute('data-active')
      link.removeEventListener('click', preventActiveLinkClick)
    }
  })
}

document.addEventListener('astro:before-preparation', updateEventDirection)

document.addEventListener('astro:page-load', updateActiveLink)