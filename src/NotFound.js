import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found">
            <p>Page not found 404</p>
            <Link to="/">Back to homepage</Link>
        </div>
    )
    
}

export default NotFound;