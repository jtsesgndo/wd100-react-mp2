import {Link} from "react-router-dom";
import FetchData from "./fetchData";

const GridCard = () => {
    return(
        <>
            {/* <div className="col-md-4">
                <div className="card">
                    <img src={props.image} className="card-img-top"alt=""></img>
                   
                    <div className="card-body">
                         <h5 className="card-title">spotify</h5>
                         <p>{props.album}</p>
                        <a href="#" className="btn btn-warning">Learn More</a>
                        <Link to="/anime" className="btn btn-warning" state={props.identity}>
                            Learn More
                        </Link>
                    </div>

                </div>
            </div> */}
        </>
    );
}


export default GridCard;