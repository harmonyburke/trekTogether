import formatDistance from 'date-fns/formatDistanceToNow'
import dummyData from '../JSONdata/dummyData.json'
import defaultPic from '../assets/defaultPic.jpeg'
import '../style/tripPage.css'

const TripPage = () => {

    const tripInfo = dummyData[0]

    return ( 
        <section>
            <div className='tripPage-container'>
                <h2 className='title tripInfo-title'>{tripInfo.where}</h2>
                <img src={tripInfo.img || defaultPic}/>
                <h3 className="title tripInfo-description-title">Description</h3>
            <div className="info-container">
                <p className="content">{tripInfo.description}</p>
            <div className="infoCard color-change">
                <h3 className='title tripInfo-card color-change'>Trip Info</h3>
            <div className="tripInfo-card-context">
               <h4 className='title color-change'>Dates:</h4>
                <p className='color-change'>{tripInfo.departureDate} - {tripInfo.returnDate}</p>
                <h4 className="title color-change">Budget:</h4>
                <p className="color-change">{tripInfo.budget}</p>
                <h4 className="title color-change">Posted:</h4>
                <p className="createdAt color-change">{formatDistance(new Date(tripInfo.createdAt), { addSuffix: true })}
                </p>
            </div>
               <button id="join-btn" className="color-change" type='submit'>✔ Join</button>
            </div>
            </div>
            </div>
        </section>
     );
}


 
export default TripPage;