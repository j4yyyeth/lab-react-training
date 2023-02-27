import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';
import LikeButton from './components/LikeButton';
import DriverCard from './components/DriverCard';
import ClickablePicture from './components/ClickablePicture';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';

function App() {
  return (
    <div className="App">
      {/* <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      /> */}
      {/* <Greetings lang="es">Bob</Greetings> */}
      {/* <Random max={100}/> */}
      {/* <BoxColor r={100} g={151} b={500}/> */}
      {/* <Rating>3</Rating> */}
      {/* <LikeButton /> */}
      {/* <DriverCard
        name="Travis Kalanick"
        rating=<Rating>2</Rating>
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      /> */}
      {/* <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      /> */}
      {/* <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      /> */}
      <NumbersTable limit={12} />
    </div>
  );
}

export default App;
