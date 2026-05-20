import churchImg from '../assets/church.jpg'
import davidImg from '../assets/david.jpg'
import sarahImg from '../assets/sarah.jpg'
import youthImg from '../assets/youth.jpg'
import reactImg from '../assets/react.svg'
import beulahlogoimg from '../assets/beulah logo.png'
import mediaimg from '../assets/media.jfif'
import envangelism from '../assets/envagelism.jfif'
import worship from '../assets/worship.jfif'
import womenimg from '../assets/women.jfif'
import mensimg from '../assets/mens ministry.jfif'
import childrenimg from '../assets/children.jfif'

const ministryImages = {
  'church.jpg': churchImg,
  'david.jpg': davidImg,
  'sarah.jpg': sarahImg,
  'youth.jpg': youthImg,
  'react.svg': reactImg,
  'beulahlogo.png': beulahlogoimg,
  'media.jfif': mediaimg,
  'envangelism.jfif': envangelism,
  'worship.jfif': worship,
  'women.jfif': womenimg,
  'mens ministry.jfif': mensimg,
  'children.jfif': childrenimg,
}

export const getMinistryImage = (imageName) => ministryImages[imageName] || churchImg
