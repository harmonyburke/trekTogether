import randomImg from "../utils/randomImg";

const AddTripComponent = () => {
    return (             
    <section>
        <form action="/add-trip" style={{ backgroundImage: `url(${randomImg()})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="addTrip">

        <input id="whereInput" className='title color-change' type="text" 
        name="where" 
        placeholder="Where to?" 
        /><br />

        {/* input for IMG upload */}
        <label htmlFor="fileInput" className="title custom-file-upload color-change">
        <input type="file" id="fileInput" hidden />
        Click here to upload an image!
        </label>
        <br />

        <div className="dateBudget-container">
            <label className="title departure-date">Departure Date:</label><br />

            <input type="date" className="color-change dateInput" 
            /><br />
       
            {/* input RETURN Date */}
            <input type="date" className="color-change dateInput" 
            /><br />
        
            {/* input BUDGET */}
            <label className="title budget-title"> Budget: </label> <br />
            <span>$ </span><input type="number" className="color-change budgetInput" 
            placeholder="10,000"
            /><span> $</span> <br />
            <label>(USD)</label><br />
        </div>
        
        <label className="title description-title">Describe what you would like to do on this trip!!</label><br />

        {/* input DESCRIPTION addTrip */}
        <textarea type="date" className="color-change textAreaInput" 
        placeholder="We're Excited to hear your plan!!"
        /> <br />

        <button type="submit" className="addTrip-submit ">Add Trip</button>

        </form>
    </section>
);
}
 
export default AddTripComponent;