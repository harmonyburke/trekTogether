import "../style/addTrip.css"
import randomImg from "../utils/randomImg"

const AddTrip = () => {

    return ( 
        <section>
                <form action="/add-trip" style={{ backgroundImage: `url(${randomImg()})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="addTrip">
                    {/* label for WHERE  */}
                    {/* input for WHERE */}
                    <input id="whereInput" className='title color-change' type="text" name="where" placeholder="Where to?" /><br />

                    {/* input for IMG upload */}
                         {/* label for image */}
                    <label htmlFor="fileInput" className="title custom-file-upload color-change">
                    <input type="file" id="fileInput" hidden />
                    Click here to upload an image!
                    </label> <br />

                    <div className="dateBudget-container">
                        {/* input DEPARTURE DATE */}
                    <label className="title departure-date">Departure Date:</label><br />
                    <input type="date" className="color-change dateInput" placeholder="Departure Date"/> <br />
                        {/* input RETURN DATE */}
                    <label className="title">Return Date:</label><br />
                    <input type="date" className="color-change dateInput"/> <br />
                        {/* input BUDGET */}
                        <label className="title budget-title"> Budget: </label> <br />
                        $ <input type="number" className="color-change budgetInput" placeholder="10,000" /> $ <br />
                        <label>(USD)</label> <br />
                    </div>


                    {/* input DESCRIPTION input */}
                    <label className="title description-title">Describe what you would like to do on this trip!!</label><br />
                    <textarea type="date" className="color-change textAreaInput" placeholder="We're Excited to hear your plan!!" /> <br />
                    <button type="submit" className="addTrip-submit ">Add Trip</button>
                </form>
        </section>
     );
}
 
export default AddTrip;