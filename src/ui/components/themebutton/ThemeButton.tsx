import {DarkMode, LightMode} from '@mui/icons-material'
import {useLocalStorage} from 'usehooks-ts'
import './ThemeButton.scss'

export const ThemeButton = () => {
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>('theme', 'light')
  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button id='theme-button' onClick={onClick} aria-label={`Toggle the site between light and dark modes. Currently on ${theme} mode.`}>
      <DarkMode data-hidden-in='dark' />
      <LightMode data-hidden-in='light' />
    </button>
  )
}