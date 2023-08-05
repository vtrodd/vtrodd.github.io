import {ICardable} from "../../../../types"
import {ItemCard} from "../../itemcard/ItemCard"
import "./CardBrowser.scss"

type CardBrowserProps = {
  items: ICardable[]
  onClick?: (item: ICardable) => void
  showLabel?: boolean
}

export const CardBrowser = ({items, ...props}: CardBrowserProps) => {
  return (
    <div className='card-browser'>
      {items.map((item, index) => (
        <ItemCard  key={index} item={item} {...props} />
      ))}
    </div>
  );
}