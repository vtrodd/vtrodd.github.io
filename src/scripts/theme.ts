const getRoot = () => document.documentElement

const setTheme = (theme: 'light' | 'dark') => {
  getRoot().setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const getTheme = (): 'light' | 'dark' =>
  (getRoot().getAttribute('data-theme') ||
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) as
    'light' | 'dark'

export const bindThemeToggle = () => {
  const toggleButton = document.getElementById('theme-toggle')
  if (toggleButton) toggleButton.onclick = () => setTheme(getTheme() === 'light' ? 'dark' : 'light')
}

document.addEventListener('astro:after-swap', () => {
  setTheme(getTheme())
})