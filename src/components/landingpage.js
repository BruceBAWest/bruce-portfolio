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
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;