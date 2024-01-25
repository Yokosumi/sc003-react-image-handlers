import { useState } from 'react'

type ImageSliderProps = {
    imageUrls: string[]
}

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
    const [imageIndex, setImage] = useState(0)

    return (
        <div>
            <img src={imageUrls[imageIndex]} alt="cat" />
            <button>Next</button>
            <button>Previous</button>
        </div>
    )
}
