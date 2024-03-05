import formatDistance from 'date-fns/formatDistanceToNow'
import defaultPic from '../assets/defaultPic.jpeg'

// import css
import "../style-components/tripList.css"

const TripList = ( trip ) => {
    
    const loggedInUser = "Anna Turner";

    return ( 
        <section className="tripIdea-container">
            <a className='center' href="/trippage">
                <div className="cardHeader">
                    <img src={trip.img || defaultPic}/>
                </div>
                <div className="cardBody">
                    <h3 className="title title-green">{trip.where}</h3>
                    <p>Dates:</p>
                    <p className='date'>{trip.departureDate} - {trip.returnDate}</p> <br />
                    <p>Created By:</p>
                    <p className='title'>{trip.user}</p><br />
                    <p className="createdAt">{formatDistance(new Date(trip.createdAt), { addSuffix: true })}</p>
                    
                    {/* Conditionally render Edit and Delete buttons based on showDelete */}
                    {trip.showDelete && (
                        <>
                            {/* Conditionally render Edit button based on createdBy and loggedIn user */}
                            {trip.user === loggedInUser && (
                                <button id="edit" className='dashboard-view myTrips-view material-symbols-outlined'>Edit</button>
                            )}
                            <button id="delete" className='dashboard-view myTrips-view material-symbols-outlined'>Delete</button>
                        </>
                    )}
                </div>
            </a>
        </section>
    );
}
 
export default TripList;