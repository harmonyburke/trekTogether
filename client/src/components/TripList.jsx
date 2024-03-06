import formatDistance from "date-fns/formatDistanceToNow";
import defaultPic from "../assets/defaultPic.jpeg";

// import css
import "../style-components/tripList.css";

const TripList = (trip) => {
  const loggedInUser = "Anna Turner";
  const editHref = `/edit/${trip.id}`;

  const handleDelete = (e) => {
    e.preventDefault();

    window.confirm(
      "This action can not be reversed, Are you sure you wish to DELETE?"
    );
  };

  const handleRemove = (e) => {
    e.preventDefault();

    window.confirm(
      "Are you sure you wish to remove this trip from your trips?"
    );
    location.reload();
  };

  return (
    <section className="tripIdea-container">
      <a className="center" href="/trippage">
        <div className="cardHeader">
          <img src={trip.img || defaultPic} />
        </div>
        <div className="cardBody">
          <h3 className="title title-green">{trip.where}</h3>
          <p>Dates:</p>
          <p className="date">
            {trip.departureDate} - {trip.returnDate}
          </p>
          <br />
          <div className="conditional-container">
          {trip.user === loggedInUser && (
            <>
              <p>Your Trip</p> <br />
            </>
          )}
          {trip.user !== loggedInUser && (
            <>
              <p>Created By:</p>
              <p className="title">{trip.user}</p>
              <br />
              <p className="createdAt">
                {formatDistance(new Date(trip.createdAt), { addSuffix: true })}
              </p> <br />
            </>
          )}
          {/* Conditionally render Edit and Delete buttons based on showDelete */}
          {trip.showDelete && (
            <>
              {/* Conditionally render Edit button based on createdBy and loggedIn user */}
              {trip.user === loggedInUser && (
                <a href={editHref}>
                  <button
                    id="edit"
                    className="dashboard-view myTrips-view material-symbols-outlined"
                  >
                    Edit
                  </button>
                </a>
              )}
              {trip.user === loggedInUser && (
                <>
                  <a href="/delete">
                    <button
                      id="delete"
                      className="dashboard-view myTrips-view material-symbols-outlined"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </a>
                </>
              )}
              <button type="submit" id="rft-btn" onClick={handleRemove}>
                Remove
              </button>
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
