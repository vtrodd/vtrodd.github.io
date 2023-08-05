import {ICardable} from "../../../types"
import "./ItemCard.scss"

type ItemCardProps = {
  item: ICardable
  onClick?: (item: ICardable) => void
  showLabel?: boolean
}

export const ItemCard = ({item, onClick, showLabel}: ItemCardProps) => {
  return (
    <div className='item-card' onClick={e => onClick ? onClick(item) : null}>
      <img className='blurred' src={item.local_image_url} alt={item.name} />
      <img src={item.local_image_url} alt={item.name} />
      <div className={showLabel ? 'label' : 'label hidden'}>
        <div className='name'>{item.name}</div>
        <div className='date'>{item.date}</div>
      </div>
    </div>
  );
}