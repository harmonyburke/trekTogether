import trips from '../JSONdata/dummyData.json'
import TripList from "../components/TripList";

const Dashboard = () => {

    return ( 
        <section>
            
            {trips.map((trip, index) => (
                <TripList 
                    key={index}
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