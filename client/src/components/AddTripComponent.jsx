import randomImg from "../utils/randomImg";
import { useState } from 'react';
import { CREATE_TRIP } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const AddTripComponent = () => {
    const [createTrip, { data: createdTrip}] = useMutation(CREATE_TRIP);

    const [where, setWhere] = useState('');
    const [Ddate, setDdate] = useState('');
    const [Rdate, setRdate] = useState('');
    const [budget, setBudget] = useState(0);
    const [description, setDescription] = useState('');

    // if (trip.showData) {
    //     // date must be passed yyyy-mm-dd but data is set mm/dd/yyyy
    //     const splitDepartureDate = trip.departureDate.split("/").reverse()
    //     const formatDepartureDate = [splitDepartureDate[0], splitDepartureDate[2], splitDepartureDate[1]].join("-")
        
    //     // date must be passed yyyy-mm-dd but data is set mm/dd/yyyy 
    //     const splitReturnDate = trip.returnDate.split("/").reverse()
    //     const formateReturnDate = [splitReturnDate[0], splitReturnDate[2], splitReturnDate[1]].join("-");
    
    //     const [ where, setWhere ] = useState(trip.where)
    //     const [ Ddate, setDdate] = useState(formatDepartureDate)
    //     const [ Rdate, setRdate] = useState(formateReturnDate)
    //     const [ budget, setBudget ] = useState(trip.budget)
    //     const [ description, setDescription ] = useState(trip.description)

        // const tripId = trip.id
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await createTrip({
                    variables: {
                        tripInput: {
                        // tripId,
                        where,
                        departureDate: Ddate,
                        returnDate: Rdate,
                        budget,
                        description  
                    }
                }
                });
                console.log('Trip added!', createdTrip);
            } catch (err) {
                console.error('Error adding trip!', err);
            }
        };

    return (             
    <section>
        <form onSubmit={handleSubmit} style={{ backgroundImage: `url(${randomImg()})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="addTrip">

            <input 
            id="whereInput" 
            className='title color-change' 
            type="text" 
            name="where" 
            placeholder="Where to?" 
            // tutor question
            value={where}
            // value=""
            onChange={(e) => setWhere(e.target.value)}
            /><br />

        {/* input for IMG upload */}
        <label htmlFor="fileInput" className="title custom-file-upload color-change">
        <input type="file" id="fileInput" hidden />
        Click here to upload an image!
        </label>
        <br />

            <div className="dateBudget-container">
                <label className="title departure-date">Departure Date:</label><br />
                {/* input DEPARTURE date */}
                <input 
                id="depDateInput" 
                className="color-change dateInput" 
                type="date"
                name="depart"
                value={Ddate}
                onChange={(e) => setDdate(e.target.value)}
                /><br />
        
                {/* input RETURN Date */}
                <input 
                id="retDateInput" 
                className="color-change dateInput" 
                type="date"
                name="return"
                value={Rdate}
                onChange={(e) => setRdate(e.target.value)}
                /><br />
            
                {/* input BUDGET */}
                <label className="title budget-title"> Budget: </label> <br />
                    <span>$ </span><input 
                        id="budgetInput" 
                        className="color-change budgetInput" 
                        type="number" 
                        name="budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    /><span> $</span> <br />
                    <label>(USD)</label><br />
            </div>
                
            
            <label className="title description-title">Describe what you would like to do on this trip!!</label><br />
                <textarea type="text" className="color-change textAreaInput" 
                placeholder="We're Excited to hear your plan!!"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                /> <br />
                <button type="submit" className="addTrip-submit ">Add Trip</button>
        </form>
    </section>
);
};
 
export default AddTripComponent;