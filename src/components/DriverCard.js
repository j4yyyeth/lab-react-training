const DriverCard = ({name, rating, image, car}) => {
    return (
        <div>
            <img src={image} alt="pic" />
            <h2>{name}</h2>
            <h3>{rating}</h3>
            <h5>{car.model} - {car.licensePlate}</h5>
        </div>
    )
}

export default DriverCard;