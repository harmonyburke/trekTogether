import trips from '../dummyData.json'
import TripList from '../components/TripList'
import '../style/myTrips.css'

const MyTrips = () => {

    return (
        <section>
            {trips.filter((trip) => trip.joined === true).map((trip) => (
                <TripList
                    key={trip.id}
                    user={trip.user}
                    img={trip.img }
                    where={trip.where}
                    departureDate={trip.departureDate}
                    returnDate={trip.returnDate}
                    createdAt={trip.createdAt}
                    showDelete={true}
                />    
            ))}
        </section>
    );
};
 
export default MyTrips;