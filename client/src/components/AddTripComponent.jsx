import randomImg from "../utils/randomImg";
import { useState } from 'react';
import { CREATE_TRIP } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const AddTripComponent = () => {
    const [tripData, setTripData] = useState({
        where: '',
        departureDate: '',
        returnDate: '',
        budget: 0,
        description: '',
    });

    const [createTrip, { error }] = useMutation(CREATE_TRIP);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTripData({...tripData,[name]: value,});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await createTrip({ variable: { tripInput: tripData },
            });
            // successful
            console.log('Trip created!', data.createTrip);
    } catch (err) {
        console.error('Error creating trip!, err');
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
            value={tripData.where}
            onChange={handleChange}
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
                value={tripData.depart}
                onChange={handleChange}
                /><br />
        
                {/* input RETURN Date */}
                <input 
                id="retDateInput" 
                className="color-change dateInput" 
                type="date"
                name="return"
                value={tripData.return}
                onChange={handleChange}
                /><br />
            
                {/* input BUDGET */}
                <label className="title budget-title"> Budget: </label> <br />
                <span>$ </span><input 
                id="budgetInput" 
                className="color-change budgetInput" 
                type="number" 
                name="budget"
                value={tripData.budget}
                onChange={handleChange}
                /><span> $</span> <br />
                <label>(USD)</label><br />
            </div>
            
            <label className="title description-title">Describe what you would like to do on this trip!!</label><br />

            {/* input DESCRIPTION addTrip */}
            <textarea 
            id="descriptionInput"
            className="color-change textAreaInput" 
            type="text"
            name="description"
            placeholder="We're Excited to hear your plan!!"
            value={tripData.budget}
            onChange={handleChange}
            /> <br />

        <button type="submit" className="addTrip-submit ">Add Trip</button>

        </form>
    </section>
);
};
};
 
export default AddTripComponent;