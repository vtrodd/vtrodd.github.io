import {navigate} from 'astro:transitions/client'

const getToggleButton = () => document.getElementById('menu-toggle')

export const bindMenuToggle = () => {
  const toggleButton = getToggleButton()
  if (toggleButton)
    toggleButton.onclick = () =>
      toggleButton.setAttribute(
        'data-menu-active',
        toggleButton.getAttribute('data-menu-active') === 'true' ? 'false' : 'true',
      )
  
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav > ul > li > a')
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault()
      toggleButton?.setAttribute('data-menu-active', 'false')
      setTimeout(() => navigate(link.href), 200)
    })
  })
}
