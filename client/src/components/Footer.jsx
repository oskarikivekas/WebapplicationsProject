import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './css/footer.css'
const Footer = () => {
    return (
     
       <div className="main-footer">
            <div className="container" >
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4>Yeet</h4>
                    </div>
                    <div className="col">
                        <h4>Yeet 2</h4>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">&copy; Codehub by Oskari Kivekäs 2021 </p>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>                </div>
            </div>
       </div>

    )
}

export default Footer
