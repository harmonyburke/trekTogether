import TripList from "../components/TripList";
import { useQuery } from "@apollo/client";
import { QUERY_TRIPS } from "../utils/queries";

const Dashboard = () => {
  const { data, loading } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];
  console.log(data);
  if (loading) return <div>Loading...</div>;
  return (
    <section>
      {trips.map((trip) => (
        <TripList
          key={trip._id}
          id={trip._id}
          user={trip.userId}
          username={trip.username}
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
