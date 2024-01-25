import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type ImageSliderProps = {
    imageUrls: string[]
}

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(0)

    const showNextImage = () => {
        setImageIndex((index) => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    const showPrevImage = () => {
        setImageIndex((index) => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                className="img-slider-img"
                src={imageUrls[imageIndex]}
                alt="cat"
            />
            <button
                className="img-slider-btn"
                style={{ left: '0' }}
                onClick={showPrevImage}
            >
                <ArrowLeft />{' '}
            </button>
            <button
                className="img-slider-btn"
                style={{ right: '0' }}
                onClick={showNextImage}
            >
                <ArrowRight />
            </button>
        </div>
    )
}
