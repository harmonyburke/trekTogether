import trips from '../dummyData.json'
import TripList from '../components/TripList'
import defaultPic from '../assets/defaultPic.jpeg'
import '../style/myTrips.css'

const MyTrips = () => {

    return (
        <section>
            {trips.filter((trip) => trip.joined === true).map((trip) => (
                <TripList
                    key={trip.id}
                    img={trip.img || defaultPic}
                    where={trip.where}
                    departureDate={trip.departureDate}
                    returnDate={trip.returnDate}
                    showDelete={true}
                />    
            ))}
        </section>
    );
};
 
export default MyTrips;