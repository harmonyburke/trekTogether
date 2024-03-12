import TripList from "../components/TripList";
import "../style/myTrips.css";
import { useQuery } from "@apollo/client";
import { QUERY_TRIPS } from "../utils/queries";

const MyTrips = () => {
  const { data, loading } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      {trips.map((trip) => (
        <TripList
          key={trip._id}
          id={trip._id}
          user={trip.userId}
          img={trip.img}
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
