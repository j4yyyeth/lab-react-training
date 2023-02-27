import { useState } from "react";

const Carousel = ({images}) => {
    const [num, setNum] = useState(0);
    const [image, setImage] = useState(<img src={images[num]} alt="img" />);

    const right = () => {
        setNum(num + 1);
        setImage(<img src={images[num]} alt="img" />);
    }

    const left = () => {
        setNum(num - 1);
        setImage(<img src={images[num]} alt="img" />);
    }

    return (
        <div>
            {image}
            <button onClick={left}>Left</button>
            <button onClick={right}>Right</button>
        </div>
    )
}

export default Carousel;