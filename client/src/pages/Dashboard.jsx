import TripIdea from "../components/TripIdea";
import "../style/dashboard.css"
import mexicoPic from "../assets/picOfMexico.jpg"


const Dashboard = () => {

    const tripIdeas = [
        {
            img: mexicoPic,
            where: "Mexico City",
            departureDate: "10/01/2024",
            returnDate: "10/21/2024",
            createdAt: "2022-01-04",
        },
        {
            img: mexicoPic,
            where: "Mexico City",
            departureDate: "10/01/2024",
            returnDate: "10/21/2024",
            createdAt: "2022-01-04",
        },
        {
            img: mexicoPic,
            where: "Mexico City",
            departureDate: "10/01/2024",
            returnDate: "10/21/2024",
            createdAt: "2022-01-04",
        },
        {
            img: mexicoPic,
            where: "Mexico City",
            departureDate: "10/01/2024",
            returnDate: "10/21/2024",
            createdAt: "2022-01-04",
        },
        {
            img: mexicoPic,
            where: "Mexico City",
            departureDate: "10/01/2024",
            returnDate: "10/21/2024",
            createdAt: "2022-01-04",
        },
        {
            img: mexicoPic,
            where: "Mexico City",
            departureDate: "10/01/2024",
            returnDate: "10/21/2024",
            createdAt: "2022-01-04",
        },
    ]

    return ( 
        <section>
            {tripIdeas.map((tripIdea, index) => (
                <TripIdea 
                    key={index}
                    img={tripIdea.img}
                    where={tripIdea.where}
                    departureDate={tripIdea.departureDate}
                    returnDate={tripIdea.returnDate}
                />
            ))}
            
        </section>
     );
}
 
export default Dashboard;