import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://bruces-public-bucket.s3.amazonaws.com/brucebawest-avatar.jpg" 
                        alt="avatar" 
                        className="avatar-img" />
                        <div className="banner-text">
                            <h1>Bruce B. A. West</h1>
                            <hr/>
                            <h2>Software Development Engineer</h2>
                            <hr/>
                            <p>Java | JavaScript | Python | SQL | AWS | Linux | Mobile App Development | ReactJS | NodeJS</p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="www.linkedin.com/in/brucebawest" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            {/* GitHub */}
                            <a href="https://github.com/BruceBAWest" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true"/>
                            </a>
                            {/* The J-O-B */}
                            <a href="https://docs.aws.amazon.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-briefcase" aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;