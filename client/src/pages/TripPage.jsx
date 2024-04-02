import defaultPic from "../assets/defaultPic.jpeg";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_TRIP } from "../utils/queries";
import "../style/tripPage.css";

const TripPage = () => {
  const tripId = window.location.pathname.split("/").pop();

  const { loading, error, data } = useQuery(QUERY_SINGLE_TRIP, {
    variables: {
      tripId,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const currentTrip = data.trip;

  const joinTripButtonHandler = (e) => {
    e.preventDefault();
    window.location.href = "/mytrips";
  };

  return (
    <section>
      <div className="tripPage-container">
        <h2 className="title tripInfo-title">{currentTrip.where}</h2>
        <img src={defaultPic} />
        <h3 className="title tripInfo-description-title">Description</h3>
        <div className="info-container">
          <p className="content">{currentTrip.description}</p>
          <div className="infoCard color-change">
            <h3 className="title tripInfo-card color-change">Trip Info</h3>
            <div className="tripInfo-card-context">
              <h4 className="title color-change">Dates:</h4>
              <p className="color-change">
                {new Date(Number(currentTrip.departureDate)).toDateString()}{" "}-{" "}
                {new Date(Number(currentTrip.returnDate)).toDateString()}
              </p>
              <h4 className="title color-change">Budget:</h4>
              <p className="color-change">${currentTrip.budget}</p>
              {/* TODO */}
              {/* <h4 className="title color-change">Attending:</h4> */}
              {/* map through travelers so traveler can be formatted */}
              {/* {travelers.map((traveler, index) => (<>
                <p key={index} className="color-change travelers">{traveler}</p>
                </>  
                ))} */}
              <h4 className="title color-change">Posted:</h4>
              <p className="createdAt color-change">
                {" "}
                {new Date(Number(currentTrip.createdAt)).toDateString()}
              </p>
            </div>
            <button id="join-btn" className="color-change" onClick={joinTripButtonHandler} type="submit">
              ✔ Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPage;
