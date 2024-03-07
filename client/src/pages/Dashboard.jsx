import trips from '../JSONdata/dummyData.json'
import TripList from "../components/TripList";

const Dashboard = () => {

    return ( 
        <section>
            {trips.map((trip) => (
                <TripList 
                    key={trip.id}
                    user={trip.user}
                    img={trip.img}
                    where={trip.where}
                    departureDate={trip.departureDate}
                    returnDate={trip.returnDate}
                    createdAt={trip.createdAt}
                />
            ))}
        </section>
     );
}
 
export default Dashboard;