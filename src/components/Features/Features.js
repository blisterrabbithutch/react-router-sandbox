import React from 'react';
import './Features.css';
import image1 from './assets/features-image-01.jpg';
import image2 from './assets/features-image-02.jpg';
import image3 from './assets/features-image-03.jpg';
import image4 from './assets/features-image-04.jpg';
import image5 from './assets/features-image-05.jpg';
import { NavLink, useRouteMatch, Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';

const Features = () => {
    let { path, url } = useRouteMatch();

    return (
        <section className="Features">
            <div className="Features__navigationBlock">
                <NavLink 
                    exact 
                    activeClassName="Features__navLink--active" 
                    className="Features__navLink" 
                    to={`${url}/info`}
                    isActive={(match, location) => {
                        
                        if (match) {
                          console.log('matched!');
                        }
                    
                    }}
                >Features/info</NavLink>
                <Switch>
                  <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                  </Route>
                  <Route path={`${path}/info`}>
                    <Home />
                  </Route>
                </Switch>
            </div>
            <h2 className="Features__title">
                A Fitting Design
            </h2>
            <p className="Features__text">
                If you want to spend hours with your Mimini VR, you can: the Mimini VR is engineered 
                with your comfort in mind and is designed to feel comfortable when you’re wearing it.
            </p>
            <div className="Features__imageGrid">
                <div className="Features__imageMain">
                    < img src={image1} alt="" className="Features__image Features__image--first"/>
                </div>
                <div className="Features__imageGridRow">
                    <div className="Features__imageGridColumn">
                        <img src={image2} alt="" className="Features__image Features__image--second"/>
                        <img src={image3} alt="" className="Features__image Features__image--third"/>
                    </div>
                    <div className="Features__imageGridColumn">
                        <img src={image4} alt="" className="Features__image Features__image--fourth"/>
                        <img src={image5} alt="" className="Features__image Features__image--fifth"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Features;