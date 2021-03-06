import React, { Component } from 'react';
import './NewsFlex.css';
import {FaRegNewspaper} from 'react-icons/fa';


export class NewsFlex extends Component {
    render() {
        return (
            <div>
                <div className="container mt-3 mb-3" >
                    <div className="box">
                        <div className="row">
                        <div className=" col-md-4 Head_left">LETEST NEWS</div> 
                        <div className=" col-md-8 Head_right"><a href="/news" className="a_color border-bottom "><strong>View All News Articles <FaRegNewspaper /></strong></a></div>
                        </div>
                        <div className="header"></div>
                        <div className="row">
                        <div className="col-xl-4 col-md-6 ">
                            <div className="News_heading">
                            <a href="./news" className="a_color"><b>New Video Showcases Building’s Role In Pandemic Response</b><br/>
                            <small>April 18, 2021</small><br/>
                            <b>Read More »</b>
                            </a>
                            </div>

                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="News_heading">
                            <a href="/news" className="a_color"><b>New Video Showcases Building’s Role In Pandemic Response</b><br/>
                            <small>April 18, 2021</small><br/>
                            <b>Read More »</b>
                            </a>
                            </div>

                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div  className="News_heading">
                            <a href="/news" className="a_color"><b>New Video Showcases Building’s Role In Pandemic Response</b><br/>
                            <small>April 18, 2021</small><br/>
                            <b>Read More »</b>
                            </a>
                            </div>

                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewsFlex
