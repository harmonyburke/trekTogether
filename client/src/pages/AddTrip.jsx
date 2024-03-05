import "../style/addTrip.css"

const AddTrip = () => {

    return ( 
        <section>
                <form action="/add-trip">
                    {/* label for WHERE  */}
                    {/* input for WHERE */}
                    <label>Where To?</label> <br />
                    <input id="whereInput" className='title color-change' type="text" name="where" placeholder="Tokyo.. Paris.. Mexico.." /><br />

                    {/* input for IMG upload */}
                         {/* label for image */}
                    <label htmlFor="fileInput" className="title custom-file-upload color-change">
                    <input type="file" id="fileInput" hidden />
                    Click here to upload an image!
                    </label> <br />

                       <div className="dateBudget-container">
                         {/* input DEPARTURE DATE */}
                    <label className="title">Departure Date:</label><br />
                    <input type="date" className="color-change dateInput"/> <br />
                        {/* input RETURN DATE */}
                    <label className="title">Return Date:</label><br />
                    <input type="date" className="color-change dateInput"/>
                        {/* input BUDGET */}
                    <h4>
                        <label className="title budget-title"> Budget: </label><br />
                        <span>$ </span><input type="number" className="color-change budgetInput" placeholder="10,000" /><span> $ </span>
                    </h4>
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