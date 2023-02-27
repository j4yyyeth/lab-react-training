import { useState } from "react";

const LikeButton = () => {

    const [likes, setLikes] = useState(0);

    const [backgroundColor, setBackgroundColor] = useState('gray')

    const colors = ['purple','blue','green','yellow','orange','red'];

    const handleClick = () => {
        setLikes(likes + 1)
        setBackgroundColor(colors[Math.floor(Math.random() * colors.length)])
    }

    return (
        <div>
            <button style={{backgroundColor: backgroundColor}} onClick={handleClick}>{likes} Likes</button>
        </div>
    )
}

export default LikeButton;
