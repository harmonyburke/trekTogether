import CreateTrip from "../components/createTrip";
import trips from "../JSONdata/dummyData.json"

const Edit = () => {

    const tripId = parseInt(window.location.pathname.split("/").pop());
    const currentTrip = trips.filter((trip) => trip.id === tripId)

    return ( 
        <section>
            <CreateTrip 
                id={currentTrip[0].id}
                user={currentTrip[0].user}
                img={currentTrip[0].img}
                where={currentTrip[0].where}
                departureDate={currentTrip[0].departureDate}
                returnDate={currentTrip[0].returnDate}
                budget={currentTrip[0].budget}
                createdAt={currentTrip[0].createdAt}
                description={currentTrip[0].description}
                showData={true}
            />
        </section>
     );
}
 
export default Edit;