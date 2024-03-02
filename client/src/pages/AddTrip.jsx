import "../style/addTrip.css"

const AddTrip = () => {

    return ( 
        <section>
            <div className="addTrip-container">
                <form action="/add-trip">
                    {/* label for WHERE  */}
                    <label>Where to?</label> <br />
                    {/* input for WHERE */}
                    <input id="whereInput" className='title input' type="text" name="where" placeholder="Tokyo.. Paris.. Mexico.." /><br />
                    {/* input for IMG upload */}
                    <div className="img-upload color-change">
                         {/* label for image */}
                    <label htmlFor="fileInput" className="title custom-file-upload color-change">
                    <input type="file" id="fileInput" className="color-change" hidden />
                    Click here to upload an image of your destination!
                    </label>
                    </div>

                    <div className="small-card-container">
                        <div id="dateInput" className="color-change">
                            <ul className="color-change">
                                <li className="color-change">
                                    {/* input DEPARTURE DATE */}
                                    <label className="color-change title">Departure Date:</label><br />
                                    <input type="date" className="color-change"/>
                                </li> 
                                    {/* input RETURN DATE */}
                                <li className="color-change">
                                    <label className="color-change title">Return Date:</label><br />
                                    <input type="date" className="color-change"/>
                                </li>
                            </ul>
                        </div>

                        <div className="budgetInput">
                            <ul className="color-change">
                                <li className="color-change">
                                    <label className="color-change title budget-title"> Budget: </label><br />
                                    💲<input type="number" placeholder="10,000" />
                                </li>
                                <li className="color-change">
                                    <label className="color-change">(USD)</label>
                                </li>
                            </ul>
                        </div>

                        
                    </div>
                    <div id="descriptionInput" className="color-change">
                            <ul className="color-change">
                                <li className="color-change">
                                    {/* input DESCRIPTION input */}
                                    <label className="color-change title">Describe what you would like to do on this trip!!</label><br />
                                    <textarea type="date" cols="200" rows="11" placeholder="We're Excited to hear your plan!!" className="color-change"/>
                                </li> 
                            </ul>
                        </div>

                </form>
            </div>
        </section>
     );
}
 
export default AddTrip;