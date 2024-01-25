import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type ImageSliderProps = {
    imageUrls: string[]
}

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <img
                className="img-slider-img"
                src={imageUrls[imageIndex]}
                alt="cat"
            />
            <button>
                <ArrowLeft />{' '}
            </button>
            <button>
                <ArrowRight />
            </button>
        </div>
    )
}
