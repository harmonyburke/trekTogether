import EditTripComponent from "../components/EditTripComponent";
// import trips from "../JSONdata/dummyData.json";
import { useQuery } from '@apollo/client';
import { QUERY_TRIPS } from '../../utils/queries';


const Edit = () => {

  const data  = useQuery(QUERY_TRIPS, {
    fetchPolicy: "no-cache"
  });

  const tripId = parseInt(window.location.pathname.split("/").pop());
  const currentTrip = data && data.data ? data.data.filter((trip) => trip.id === tripId) : [];

  console.log(tripId)

  return (
    <section>
      {currentTrip.length > 0 && (
        <EditTripComponent
          id={currentTrip[0].id}
          user={currentTrip[0].user}
          img={currentTrip[0].img}
          where={currentTrip[0].where}
          departureDate={currentTrip[0].departureDate}
          returnDate={currentTrip[0].returnDate}
          budget={currentTrip[0].budget}
          createdAt={currentTrip[0].createdAt}
          description={currentTrip[0].description}
          showData={true}
        />
      )}
    </section>
  );
};

export default Edit;
