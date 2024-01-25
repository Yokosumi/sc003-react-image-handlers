import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type ImageSliderProps = {
    imageUrls: string[]
}

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                className="img-slider-img"
                src={imageUrls[imageIndex]}
                alt="cat"
            />
            <button className="img-slider-btn" style={{ left: '0' }}>
                <ArrowLeft />{' '}
            </button>
            <button className="img-slider-btn" style={{ right: '0' }}>
                <ArrowRight />
            </button>
        </div>
    )
}
