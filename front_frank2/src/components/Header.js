import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import imgLogo from '../images/myvdo2.png'
import './Styles/Header.css'


class Header extends React.Component {
    render() {
	    return(
        <div>            
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="logo">
                                <img src={imgLogo} />
                            </div>
                        </div>
                        <div className="col-3">
                            <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="/about/">About myvdo</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <div className="logo">
                                <a href="/" className="d-flex flex-row align-items-end justify-content-start">
                                    <span className="logo_bars d-flex flex-row align-items-end justify-content-between"><span></span><span></span><span></span><span></span><span></span></span>
                                    <span className="logo_text">myvdo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
		)
	}
}

export default Header
