import './Hoverbomb.scss'

type HoverbombProps = {
  children: React.ReactNode
}

export const Hoverbomb = ({children}: HoverbombProps) => {
  const spans = children?.toString().split('').map((char, i) => <span key={i}>{char === ' ' ? '\u00A0' : char}</span>);

  const onMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    const spans = target.querySelectorAll('span');

    spans.forEach((span, i) => {
      const randomX = Math.random() * 20 - 10;
      const randomY = Math.random() * 20 - 5;
      const randomR = Math.random() * 50 - 25;
      const delay = i * 10;
      span.animate({
        transform: `translate(${randomX}px, ${randomY}px) rotate(${randomR}deg)`
      }, { duration: 100, delay, fill: 'forwards' });
      console.log('letter', span.children[0])
    });
  }

  const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    const spans = target.querySelectorAll('span');

    spans.forEach((span, i) => {
      span.animate({
        transform: `translate(0px, 0px) rotate(0deg)`
      }, { duration: 100, fill: 'forwards' });
    });
  }

  return (
    <div className='hoverbomb' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {spans}
    </div>
  )
}