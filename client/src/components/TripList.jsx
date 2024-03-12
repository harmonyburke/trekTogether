import defaultPic from "../assets/defaultPic.jpeg";
import { useMutation } from "@apollo/client";
import { DELETE_TRIP } from "../utils/mutations";

// Import CSS
import "../style-components/tripList.css";

const TripList = (trip) => {
  const tripId = trip.id;
  const loggedInUser = "65ea8432f19b23ab5073e357";
  const editHref = `/edit/${tripId}`;
  const tripPageHref = `/trippage/${tripId}`;

  const [deleteTrip] = useMutation(DELETE_TRIP);

  const handleDelete = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "This action cannot be reversed. Are you sure you wish to DELETE?"
    );
    if (confirmed) {
      try {
        console.log(tripId);
        await deleteTrip({ variables: { tripId } });
        alert("Your trip has successfully deleted");
      } catch (error) {
        console.error(error);
        alert("Your trip failed to delete");
      }
    }
  };

  return (
    <section className="tripIdea-container">
      <a className="center" href={tripPageHref}>
        <div className="cardHeader">
          <img src={defaultPic} />
        </div>
        <div className="cardBody">
          <h3 className="title title-green">{trip.where}</h3>
          <p>Dates:</p>
          <p className="date">
            {new Date(Number(trip.departureDate)).toDateString()}
          </p>
          <p className="date">-</p>
          <p className="date">
          {new Date(Number(trip.returnDate)).toDateString()}
          </p>
          <br />
          <div className="conditional-container">
            {trip.showDelete ? (
              <>
               
                {trip.userId !== loggedInUser && (
                  <>
                    <p>Created By:</p>
                    <p className="title">{trip.username}</p>
                    <br />

                    <p className="createdAt">
                      {new Date(Number(trip.createdAt)).toDateString()}
                    </p>
                    <br />
                  </>
                )}
                {/* Conditionally render Edit and Delete buttons based on showDelete */}
                {trip.userId === loggedInUser && (
                  <>
                    <a href={editHref}>
                      <button
                        id="edit"
                        className="dashboard-view myTrips-view material-symbols-outlined"
                      >
                        Edit
                      </button>
                    </a>
                    <a href="/delete">
                      <form onSubmit={handleDelete}>
                        <button
                          id="delete"
                          type="submit"
                          className="dashboard-view myTrips-view material-symbols-outlined"
                        >
                          Delete
                        </button>
                      </form>
                    </a>
                  </>
                )}
                {/* <button type="submit" id="rft-btn" onClick={handleRemove}>
                  Remove
                </button> */}
                <br />
              </>
            ) : (
              <>
                <p>Created By:</p>
                <p className="title">{trip.username}</p>
                <br />
                <p>Created At:</p>
                <p className="createdAt">
                  {new Date(Number(trip.createdAt)).toDateString()}
                </p>
                <br />
              </>
            )}
          </div>
        </div>
      </a>
    </section>
  );
};

export default TripList;

// const d = new Date();
// const formattedDate = `${(d.getMonth() + 1).toString().padStart(2, "0")}/${d
//   .getDate()
//   .toString()
//   .padStart(2, "0")}/${d.getFullYear()}`;
// console.log(formattedDate);
// console.log(trip.departureDate);

// const currentDate = new Date(); // Use a new Date object for current date
// const tripDepartureDateParts = trip.departureDate.split("/");
// const formattedTripDepartureDate = new Date(
//   tripDepartureDateParts[2],
//   tripDepartureDateParts[0] - 1,
//   tripDepartureDateParts[1]
// );

// if (currentDate > formattedTripDepartureDate) {
//   console.log("Expired");
//   return;
// }

// const handleRemove = (e) => {
//   e.preventDefault();

//   window.confirm(
//     "Are you sure you wish to remove this trip from your trips?"
//   );
//   location.reload();
// };
