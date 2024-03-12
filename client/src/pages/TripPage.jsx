import defaultPic from "../assets/defaultPic.jpeg";
import "../style/tripPage.css";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_TRIP } from "../utils/queries";

const TripPage = () => {
  const tripId = window.location.pathname.split("/").pop();

  const data = useQuery(QUERY_SINGLE_TRIP, {
    variables: {
      tripId,
    },
  });
  console.log(data);
  const trip = data.trip;
  return (
    <section>
      <div className="tripPage-container">
        <h2 className="title tripInfo-title">{data.where}</h2>
        <img src={defaultPic} />
        <h3 className="title tripInfo-description-title">Description</h3>
        <div className="info-container">
          <p className="content">{data.description}</p>
          <div className="infoCard color-change">
            <h3 className="title tripInfo-card color-change">Trip Info</h3>
            <div className="tripInfo-card-context">
              <h4 className="title color-change">Dates:</h4>
              <p className="color-change">
                {data.departureDate} - {data.returnDate}
              </p>
              <h4 className="title color-change">Budget:</h4>
              <p className="color-change">${data.budget}</p>
              <h4 className="title color-change">Attending:</h4>
              {/* map through travelers so traveler can be formatted */}
              {/* {travelers.map((traveler, index) => (<>
                <p key={index} className="color-change travelers">{traveler}</p>
                </>  
                ))} */}
              <h4 className="title color-change">Posted:</h4>
              <p className="createdAt color-change">
                {" "}
                {new Date(Number(data.createdAt)).toDateString()}
              </p>
            </div>
            <button id="join-btn" className="color-change" type="submit">
              ✔ Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPage;
