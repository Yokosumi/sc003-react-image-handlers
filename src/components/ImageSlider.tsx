import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type ImageSliderProps = {
    imageUrls: string[]
}

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
    const [imageIndex, setImage] = useState(0)

    return (
        <div>
            <img src={imageUrls[imageIndex]} alt="cat" />
            <button>
                <ArrowLeft />{' '}
            </button>
            <button>
                <ArrowRight />
            </button>
        </div>
    )
}
