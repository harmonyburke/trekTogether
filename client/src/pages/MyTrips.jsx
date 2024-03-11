import trips from '../JSONdata/dummyData.json'
import TripList from '../components/TripList'
import '../style/myTrips.css'
import { useQuery } from '@apollo/client'
import { QUERY_TRIPS } from '../utils/queries'

const MyTrips = () => {
const { data, loading, error } = useQuery(QUERY_TRIPS)
const trips = data?.trips || []
if (loading) return <div>Loading...</div>
    return (
        <section>
            {trips.map((trip) => (
                <TripList
                    key={trip.id}
                    id={trip.id}
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