import {Link} from "react-router-dom";

const Navibar = ()=> {
    return (
        <nav className="navibar">
            <div>
                <Link to ="/">
                    <h1>Find Movie Location</h1>
                </Link>
            </div>
        </nav>
    )
}

export default Navibar;