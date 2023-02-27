const Rating = ({children}) => {
    const empty = "☆";
    const full = "★";
    return (
        <div id="rating">
            <p>{full.repeat(Math.round(children))}{empty.repeat(5 - Math.round(children))}</p>
        </div>

    )
}

export default Rating;
