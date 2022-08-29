import m1 from '../images/Bitcoin-amico 1.png'
import m2 from '../images/rafiki.png'
import m3 from '../images/midvector.png'
import m4 from '../images/VecAmico.png'
import m5 from '../images/Bitcoin-amico 1.png'

export const media = [m1,m2,m3,m4,m5]
export const mediaByIndex = index => media[index % media.length];
