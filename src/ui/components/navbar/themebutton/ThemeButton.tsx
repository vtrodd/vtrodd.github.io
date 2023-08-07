import {DarkMode, LightMode} from "@mui/icons-material"
import './ThemeButton.scss'

type ThemeButtonProps = {
  onClick: () => void;
}

export const ThemeButton = ({onClick}: ThemeButtonProps) => {
  return (
    <div id='theme-button' onClick={onClick}>
      <DarkMode data-hidden-in='dark' />
      <LightMode data-hidden-in='light' />
    </div>
  )
}