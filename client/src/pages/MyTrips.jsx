import { useState, useEffect } from 'react'

import dummyData from '../dummyData.json'
import TripList from '../components/TripList'
import '../style/myTrips.css'
import defaultPic from '../assets/defaultPic.jpeg'

const MyTrips = () => {
    const [img, setImg] = useState(defaultPic);
    const [trips, setTrip] = useState(dummyData);

    // Update image state based on database or default image
    useEffect(() => {
        const tripWithImg = trips.find((trip) => trip.img);
        if (tripWithImg) {
            setImg(tripWithImg.img);
        }
    }, [trips]);

    return (
        <section>
            {trips.filter((trip) => trip.joined === true).map((trip) => (
                <TripList
                    key={trip.id}
                    img={img}
                    where={trip.where}
                    departureDate={trip.departureDate}
                    returnDate={trip.returnDate}
                />
                
            ))}

           
        </section>
    );
};
 
export default MyTrips;