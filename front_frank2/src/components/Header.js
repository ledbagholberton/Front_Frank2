import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import imgLogo from '../images/my_full_2.png'
import imgName from '../images/2.png'
import './Styles/Header.css'


class Header extends React.Component {
    render() {
	    return(
        <div className="container-fluid">    
            <div className="row">    
                <div className="col-3 mx-auto">
                    <img src={imgLogo} className="logo img-responsive"/>
                </div>
                <div className="col-9">
                    <ul class="nav nav-justified">
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                        <span class="glyphicon glyphicon-music"></span>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="separator"/>
            
        </div>
    )
	}
}

export default Header
