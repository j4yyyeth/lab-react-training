import { useState } from "react";

const ClickablePicture = ({img, imgClicked}) => {

    const [image, setImage] = useState(<img src={img} alt="unclicked"/>)
    
    return (
        <div>
            <button onClick={ () => setImage(<img src={imgClicked} alt="clicked" />)}>
                {image};
            </button>
        </div> 
    )
}

export default ClickablePicture;