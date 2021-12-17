import React from 'react'
import './css/footer.css'
const Footer = () => {
    return (
     
       <div className="main-footer" style={{marginTop: "1rem"}}>
            <div className="container" style={{paddingTop: "7px"}} >
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4>Hyvää infoa jos sellaista olisi</h4>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Vaikka linkkejä tms</h4>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">&copy; CodeDiary by Oskari Kivekäs 2021 </p>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>                </div>
                <br></br>
            </div>
       </div>

    )
}

export default Footer
