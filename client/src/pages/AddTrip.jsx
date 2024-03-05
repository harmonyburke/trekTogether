import "../style/addTrip.css"

const AddTrip = () => {

    return ( 
        <section>
                <form action="/add-trip">
                    {/* label for WHERE  */}
                    {/* input for WHERE */}
                    <input id="whereInput" className='title' type="text" name="where" placeholder="Tokyo.. Paris.. Mexico.." /><br />
                    {/* input for IMG upload */}
                         {/* label for image */}
                    <label htmlFor="fileInput" className="title custom-file-upload ">
                    <input type="file" id="fileInput" hidden />
                    Click here to upload an image!
                    </label>

                        {/* input DEPARTURE DATE */}
                    <label className=" title">Departure Date:</label><br />
                    <input type="date"/>
                        {/* input RETURN DATE */}
                    <label className=" title">Return Date:</label><br />
                    <input type="date"/>
                        {/* input BUDGET */}
                    <h4>
                        <label className="title budget-title"> Budget: </label><br />
                        <span>💲</span><input type="number" placeholder="10,000" />
                    </h4>
                    <label>(USD)</label>
                    {/* input DESCRIPTION input */}
                    <label className="title description-title">Describe what you would like to do on this trip!!</label><br />
                    <textarea type="date" cols="200" rows="11" placeholder="We're Excited to hear your plan!!" />
                    <button type="submit" className="addTrip-submit ">Add Trip</button>
                </form>
        </section>
     );
}
 
export default AddTrip;