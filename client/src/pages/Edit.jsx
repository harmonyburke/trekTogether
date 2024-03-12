import EditTripComponent from "../components/EditTripComponent";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_TRIP } from "../utils/queries";

const Edit = () => {
  const tripId = window.location.pathname.split("/").pop();

  const {data} = useQuery(QUERY_SINGLE_TRIP, {
    variables: {
      tripId,
    },
  });

  const currentTrip = data?.trip;
  console.log(currentTrip);

  return (
    <section>
      {currentTrip && (
        <EditTripComponent
          id={currentTrip._id}
          user={currentTrip.userId}
          username={currentTrip.username}
          // img={currentTrip.img}
          where={currentTrip.where}
          departureDate={currentTrip.departureDate}
          returnDate={currentTrip.returnDate}
          budget={currentTrip.budget}
          createdAt={currentTrip.createdAt}
          description={currentTrip.description}
          showData={true}
        />
      )}
    </section>
  );
};

export default Edit;
