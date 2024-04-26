import { Link } from "react-router-dom";
import { useEffect } from "react";
import PageNotFound from "../../static/assets/404NotFound.gif"

const ErrorPage = () => {
    
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const changeText = () => {
        var link = document.getElementById('go_back');
        if(link.innerText === "Go Back!") {
            link.innerText = "Back To The Main Page";
        } else {
            link.innerText = "Go Back!";
        }
    };

    return(
        <main>
            <div className="error_404_page">
                <img src={ PageNotFound } alt="Error 404" />
                <Link to="/" id="go_back" onMouseEnter={changeText} onMouseLeave={changeText} >Go Back!</Link>
            </div>
        </main>
    );
};

export default ErrorPage;