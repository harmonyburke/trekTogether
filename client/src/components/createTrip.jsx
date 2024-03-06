/* eslint-disable react-hooks/rules-of-hooks */
import randomImg from "../utils/randomImg";
import { useState } from 'react';

const CreateTrip = ( trip  ) => {

    if (trip.showData) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ where, setWhere ] = useState(trip.where)

        // date must be passed yyyy-mm-dd but data is set mm/dd/yyyy
        const splitDepartureDate = trip.departureDate.split("/").reverse()
        const formatDepartureDate = [splitDepartureDate[0], splitDepartureDate[2], splitDepartureDate[1]].join("-")
        const [ Ddate, setDdate] = useState(formatDepartureDate)

        // date must be passed yyyy-mm-dd but data is set mm/dd/yyyy 
        const splitReturnDate = trip.returnDate.split("/").reverse()
        const formateReturnDate = [splitReturnDate[0], splitReturnDate[2], splitReturnDate[1]].join("-")
        const [ Rdate, setRdate] = useState(formateReturnDate)

        const [ budget, setBudget ] = useState(trip.budget)

        const [ description, setDescription ] = useState(trip.description)

    return (
        <section>
            <form action="/add-trip" style={{ backgroundImage: `url(${randomImg()})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="addTrip">

            {/* input for WHERE */}
            <input id="whereInput" className='title color-change' type="text" 
            name="where" 
            placeholder="Where to?" 
            value={where} 
            onChange={(e) => setWhere( e.target.value )}
            />
            <br />

            {/* input for IMG upload */}
            <label htmlFor="fileInput" className="title custom-file-upload color-change">
                <input type="file" id="fileInput" hidden />
                Click here to upload an image!
            </label>
            <br />

            <div className="dateBudget-container">
                <label className="title departure-date">Departure Date:</label><br />

                {/* input DEPARTURE DATE */}
                <input type="date" className="color-change dateInput" 
                value={Ddate}
                onChange={(e) => setDdate( e.target.value )}
                /><br />

                <label className="title">Return Date:</label><br />
                {/* input RETURN Date */}
                <input type="date" className="color-change dateInput" 
                value={Rdate}
                onChange={(e) => setRdate( e.target.value )}
                /><br />
                
                <label className="title budget-title"> Budget: </label> <br />
                {/* input BUDGET */}
                {trip.showData && (<>
                    <span>$ </span><input type="number" className="color-change budgetInput" 
                    placeholder="10,000"
                    value={budget}
                    onChange={(e) => setBudget( e.target.value )}
                    /><span> $</span> <br />
                <label>(USD)</label><br /></>)}
            </div>
                
            <label className="title description-title">Describe what you would like to do on this trip!!</label><br />
                <textarea type="date" className="color-change textAreaInput" 
                placeholder="We're Excited to hear your plan!!"
                value={description}
                onChange={(e) => setDescription( e.target.value )}
                /> <br />
                <button type="submit" className="addTrip-submit ">Edit Trip</button>
            </form>
        </section>
    )
    } else if (!trip.showData) {

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
        )
    }
}

export default CreateTrip;