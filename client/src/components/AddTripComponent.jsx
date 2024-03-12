import { useState } from "react";
import { CREATE_TRIP } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const AddTripComponent = (trip) => {
  const [createTrip, { data: createdTrip }] = useMutation(CREATE_TRIP);

  const [where, setWhere] = useState("");
  const [Ddate, setDdate] = useState("");
  const [Rdate, setRdate] = useState("");
  const [budget, setBudget] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Ddate, Rdate);
    try {
      await createTrip({
        variables: {
          where,
          departureDate: Ddate,
          returnDate: Rdate,
          budget: parseInt(budget),
          description,
        },
      });
      console.log("Trip added!", createdTrip);
      window.location.href = "/mytrips";
    } catch (err) {
      console.error("Error adding trip!", err);
    }
  };

  const imgStyle = {
    backgroundImage: "url(/images/img1.jpeg",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section>
      <form onSubmit={handleSubmit} style={imgStyle} className="addTrip">
        <input hidden value={trip.loggedInUsername} />
        {/* TODO: somehow set username from loggedin user */}
        {/* <input value={.username} /> */}
        <input
          id="whereInput"
          className="title color-change"
          type="text"
          name="where"
          placeholder="Where to?"
          // tutor question
          value={where}
          // value=""
          onChange={(e) => setWhere(e.target.value)}
        />
        
        {/* input for IMG upload */}
        {/* <label
          htmlFor="fileInput"
          className="title custom-file-upload color-change"
        >
          <input type="file" id="fileInput" hidden />
          Click here to upload an image!
        </label> */}
        
        <div className="dateBudget-container">
          <label className="title departure-date">Departure Date:</label>
          <br />
          {/* input DEPARTURE date */}
          <input
            id="depDateInput"
            className="color-change dateInput"
            type="date"
            name="depart"
            // value={Ddate}
            onChange={(e) => setDdate(e.target.value)}
          />
          <br />
          {/* input RETURN Date */}
          <input
            id="retDateInput"
            className="color-change dateInput"
            type="date"
            name="return"
            // value={Rdate}
            onChange={(e) => setRdate(e.target.value)}
          />
          <br />
          {/* input BUDGET */}
          <label className="title budget-title"> Budget: </label> <br />
          <span>$ </span>
          <input
            id="budgetInput"
            className="color-change budgetInput"
            type="number"
            name="budget"
            placeholder="10000"
            onChange={(e) => setBudget(e.target.value)}
          />
          <span> $</span> <br />
          <label>(USD)</label>
          <br />
        </div>
        <label className="title description-title">
          Describe what you would like to do on this trip!!
        </label>
        <br />
        <textarea
          type="text"
          className="color-change textAreaInput"
          placeholder="We're Excited to hear your plan!!"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <br />
        <button type="submit" className="addTrip-submit ">
          Add Trip
        </button>
      </form>
    </section>
  );
};
export default AddTripComponent;
