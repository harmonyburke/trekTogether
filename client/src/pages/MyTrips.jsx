import TripList from "../components/TripList";
import "../style/myTrips.css";
import { useQuery } from "@apollo/client";
import { QUERY_TRIPS } from "../utils/queries";
import Auth from "../utils/auth";

const MyTrips = () => {
  const { data, loading } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];
  const loggedInUserId = Auth.getProfile();

  if (loading) return <div>Loading...</div>;
  return (
    <section>
      {trips.map((trip) => (
        <TripList
          key={trip._id}
          id={trip._id}
          userId={trip.userId}
          username={trip.username}
          img={trip.img}
          where={trip.where}
          departureDate={trip.departureDate}
          returnDate={trip.returnDate}
          createdAt={trip.createdAt}
          loggedInUserId={loggedInUserId.data._id}
          showDelete={true}
        />
      ))}
    </section>
  );
};

export default MyTrips;
