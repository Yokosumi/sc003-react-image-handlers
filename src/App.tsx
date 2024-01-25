import { ImageSlider } from './components/ImageSlider'
import cat1 from '../public/images/cat_1.jpg'
import cat2 from '../public/images/cat_2.jpg'
import cat3 from '../public/images/cat_3.jpg'
import cat4 from '../public/images/cat_4.jpg'
import cat5 from '../public/images/cat_5.jpg'
import './index.scss'

const Images = [cat1, cat2, cat3, cat4, cat5]

export const App = () => {
    return (
        <>
            <ImageSlider imageUrls={Images} />
        </>
    )
}
