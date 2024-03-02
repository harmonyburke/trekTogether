import formatDistance from 'date-fns/formatDistanceToNow'


import '../style/tripPage.css'
import mexicoPic from "../assets/picOfMexico.jpg"

const TripPage = () => {

    const tripInfo =
        {
            id: 1,
            img: mexicoPic,
            where: "Mexico City",
            departureDate: "10/01/2024",
            returnDate: "10/01/2024",
            budget: "1 Million Dollars",
            createdAt: "2022-01-04",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla quia, iure delectus veritatis sint accusamus omnis? Reiciendis eum quis qui quidem tempora, assumenda accusamus temporibus delectus harum commodi, accusantium minima quam labore magnam consequatur hic maiores a, cum aspernatur earum. Reprehenderit, minima vitae sequi incidunt fugit officia accusamus ipsam a optio vel odio ipsa numquam labore magnam, consectetur aut sit laboriosam libero beatae non debitis ratione atque, quod distinctio? Dolores reiciendis iusto inventore iure quaerat eligendi delectus, officiis soluta amet doloremque natus adipisci libero facere minima esse, dolore necessitatibus ratione blanditiis nulla aliquid velit perspiciatis. Neque placeat laudantium ipsam quo ea expedita ipsum veritatis consequatur laborum, dignissimos rem magnam? Fugiat non tempora vel ipsum corrupti a doloribus ex necessitatibus commodi dolores cumque, eligendi aspernatur dolorum ullam, quaerat aliquam ipsam nostrum aliquid recusandae optio! In quas maxime vero nesciunt veritatis porro, animi ea atque expedita? Tempora temporibus, numquam ducimus nihil autem laborum. Nostrum voluptatibus rem fuga minima iusto, nulla cumque laborum deleniti reiciendis fugiat, quod corporis omnis laboriosam provident iure qui incidunt et quaerat sint accusamus accusantium eaque. Cupiditate officia velit consequuntur adipisci totam itaque quo eveniet quos cum dolor non, nam, possimus rerum, recusandae modi ipsam! Perspiciatis deserunt inventore voluptates amet enim adipisci provident mollitia officiis, nihil necessitatibus nam reiciendis! Autem quas cum nam, accusantium commodi est quasi doloremque esse earum inventore sed veritatis vel nulla. Tenetur tempore, aliquid nostrum cupiditate quaerat voluptatum id reprehenderit, qui cum rem asperiores voluptate magni. Similique ab voluptas repudiandae error, necessitatibus officiis pariatur facere exercitationem corrupti quis nemo enim. Officia sapiente voluptates porro blanditiis neque hic magni explicabo similique beatae expedita officiis laborum saepe unde, eius excepturi, autem, tempora iusto! Pariatur, commodi repellendus! Maiores nostrum porro, inventore eaque reiciendis eos quidem aut voluptas quo, ut nihil? Architecto natus perspiciatis aut, autem molestias odit, ratione consectetur harum dicta nihil, porro fuga? Laboriosam tenetur omnis officiis! Repudiandae nobis fugit a fuga culpa modi illum voluptatibus ex quo. Numquam eligendi, porro fuga blanditiis in quo labore ratione impedit asperiores provident dolorem tempore laborum repellat nam. Asperiores dolores sint dicta? Fugit ipsum ducimus, suscipit ipsam quod maxime ullam saepe eum deleniti pariatur non? Corrupti facere explicabo atque minus omnis, assumenda, ipsa ullam soluta nobis aspernatur ad inventore totam eius cumque minima excepturi libero quas eaque consequuntur at natus, fugiat veniam quis est. Porro quasi suscipit vel eligendi, rem omnis natus veritatis doloribus debitis neque? At itaque sapiente quibusdam, enim recusandae saepe? Architecto alias dolorem quidem commodi voluptas! Doloremque earum tenetur neque veniam, harum iure ipsa perferendis porro tempore quia praesentium repellat, cum consequuntur aut libero mollitia quidem optio nihil. Nobis laboriosam quia iusto debitis nulla ipsam fugiat quam? Esse aliquam quae quidem incidunt rerum corporis reiciendis earum saepe consectetur odio ab voluptatibus, necessitatibus harum numquam tempora, tempore rem deserunt iure explicabo omnis sit. Earum corrupti sunt voluptatum ea rem eos necessitatibus qui ducimus? Possimus beatae voluptate veritatis modi porro, numquam quo fugit repudiandae? Sit minus assumenda voluptate voluptatum fugit, quas accusamus corrupti nisi sunt molestiae? Dicta, cumque.",
        }
    

    return ( 
        <section>
            <div className='tripPage-container'>
            <h2 className='title tripInfo-title'>{tripInfo.where}</h2>
            <img src={tripInfo.img}/>
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