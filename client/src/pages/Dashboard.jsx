import trips from "../JSONdata/dummyData.json";
import TripList from "../components/TripList";
import { useQuery } from "@apollo/client";
import { QUERY_TRIPS } from "../utils/queries";

const Dashboard = () => {
  const { data, loading, error } = useQuery(QUERY_TRIPS);
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
        />
      ))}
    </section>
  );
};

export default Dashboard;
