import formatDistance from 'date-fns/formatDistanceToNow'


// import css
import "../style/tripIdea.css"

const TripIdea = ( trip ) => {
    return ( 
       <section className="tripIdea-container">
            <a className='center' href="/trip-page">
            <div className="cardHeader">
                <img src={trip.img}/>
            </div>
            <div className="cardBody">
                <h3 className="title title-green">{trip.where}</h3>
                <p>Dates:</p>
                <p className='date'>{trip.departureDate} - {trip.returnDate}</p>
                <p className="createdAt">{formatDistance(new Date("2022-01-04"), { addSuffix: true })}</p>
        </div>
            </a>
       </section>
     );
}
 
export default TripIdea;