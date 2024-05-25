import grad from './pics/2023-08-06/grad.jpg'
import skele from './pics/2023-10-31/skele.jpg'
import orchestra from './pics/2024-05-25/orchestra.jpg'

export const Nows = [
  {
    date: new Date(2024, 5 - 1, 25),
    content: <>
      <h4>/life</h4>
      <ul>
        <li><i>Nothing groundbreaking to say here</i></li>
        <li><i>I've been working at CERN for more than 6 months now</i></li>
        <li><i>The apartment I moved into flooded over Christmas<br/>(and the floor still hasn't been replaced 😐)</i></li>
      </ul>

      <h4>/misc</h4>
      <ul>
        <li><i>Slowly perfecting the art of pizza making</i></li>
        <li><i>I joined an orchestra in Geneva</i></li>
        <li><i>(but I'm still flying back to play with UYCB)</i></li>
      </ul>

      <h4>/books</h4>
      <ul>
        <li><i>The Secret Life of Bones</i></li>
        <li><i>The Time Traveller's Guide to Medieval England</i></li>
        <li><i>- (this one's on the backburner...)</i></li>
      </ul>
    </>,
    image: orchestra,
    imageAlt: 'Vic playing the baritone saxophone in the orchestra he joined'
  },

  {
    date: new Date(2023, 10 - 1, 31),
    content: <>
      <h4>/life</h4>
      <ul>
        <li><i>I officially start my new job at CERN tomorrow!</i></li>
        <li><i>I haven't found somewhere to live yet so I'm staying in a hostel</i> 😭</li>
      </ul>

      <h4>/misc</h4>
      <ul>
        <li><i>I went, saw, and enjoyed the Lord of the Rings musical</i></li>
        <li><i>I buried white chocolate skeletons in chocolate mousses (mice?)</i></li>
      </ul>

      <h4>/books</h4>
      <ul>
        <li><i>Eight Detectives (and struggling through it...)</i></li>
        <li><i>The Time Traveller's Guide to Medieval England (still)</i></li>
      </ul>
    </>,
    image: skele,
    imageAlt: 'White chocolate skeleton being unearthed from a chocolate mousse'
  },

  {
    date: new Date(2023, 8 - 1, 6),
    content: <>
      <h4>/life</h4>
      <ul>
        <li><i>I graduated from the University of York</i></li>
        <li><i>I am applying for many jobs</i></li>
        <li><i>Though I have also applied for a master's...</i></li>
      </ul>

      <h4>/misc</h4>
      <ul>
        <li><i>I've been getting back into Overwatch</i></li>
        <li><i>I'm going to the BBC Proms soon!</i></li>
      </ul>

      <h4>/books</h4>
      <ul>
        <li><i>The Time Traveller's Guide to Medieval England</i></li>
        <li><i>The Old Man and The Sea</i></li>
        <li><i>Dracula</i></li>
      </ul>
    </>,
    image: grad,
    imageAlt: 'Vic on the day of his graduation'
  }
]

export const getDateString = (date: Date) => {
  const day = date.getDate()
  const month = date.toLocaleString('en-GB', {month: 'long'})
  const year = date.getFullYear()

  // get ordinal
  let ordinal = (
    (day > 3 && day < 21) ? 'th' :
      (day % 10 === 1) ? 'st' :
        (day % 10 === 2) ? 'nd' :
          (day % 10 === 3) ? 'rd' : 'th'
  )

  return `${day}${ordinal} ${month} ${year}`
}