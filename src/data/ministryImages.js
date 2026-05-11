import churchImg from '../assets/church.jpg'
import davidImg from '../assets/david.jpg'
import sarahImg from '../assets/sarah.jpg'
import youthImg from '../assets/youth.jpg'
import reactImg from '../assets/react.svg'
import beulahlogoimg from '../assets/beulah logo.png'

const ministryImages = {
  'church.jpg': churchImg,
  'david.jpg': davidImg,
  'sarah.jpg': sarahImg,
  'youth.jpg': youthImg,
  'react.svg': reactImg,
  'beulahlogo.png': beulahlogoimg,
}

export const getMinistryImage = (imageName) => ministryImages[imageName] || churchImg
