import defaultPic from '../assets/defaultPic.jpeg'
import trips from '../dummyData.json'
import TripList from "../components/TripList";
import '../style/dashboard.css'



const Dashboard = () => {

    return ( 
        <section>
            {trips.map((trip) => (
                <TripList 
                    key={trip.id}
                    user={trip.user}
                    img={trip.img || defaultPic}
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