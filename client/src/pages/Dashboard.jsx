import { useState, useEffect } from 'react'

import defaultPic from '../assets/defaultPic.jpeg'
import dummyData from '../dummyData.json'
import TripList from "../components/TripList";
import '../style/dashboard.css'



const Dashboard = () => {

    const [ img, setImg ] = useState(defaultPic);
    const [ trips, setTrip ] = useState(dummyData)

        // Update image state based on database or default image
        useEffect(() => {
            const tripWithImg = trips.find((trip) => trip.img);
            if (tripWithImg) {
                setImg(tripWithImg.img);
            }
        }, [trips]);

    return ( 
        <section>
            {trips.map((trip) => (
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
}
 
export default Dashboard;