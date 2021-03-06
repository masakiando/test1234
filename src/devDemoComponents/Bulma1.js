import React, {PropTypes} from 'react';
import 'bulma/css/bulma.css';
const setStyle = {
      width: '6.25rem',
      height: '1rem'
};
const Bulma = () => {
  return (
    <section className="hero hero_devDemo_Bulma1  is-fullheight">{ /* .hero */ }
      { /* .hero-head */ }
      <nav className="hero-head">
        <div className="columns is-mobile is-marginless heading has-text-weight-bold">
          <div className="column left">
            <figure className="navbar-item image">
              <img src=""style={{width: '6.25rem', height: '1rem'}}/>
            </figure>
          </div>
          <div className="column center desktop">
            <p className="navbar-item has-text-black">MODEL S</p>
            <p className="navbar-item has-text-black">MODEL X</p>
            <p className="navbar-item has-text-black">MODEL 3</p>
            <p className="navbar-item has-text-white">LOADSTER</p>
            <p className="navbar-item has-text-black">ENERGY</p>
          </div>
          <div className="column right">
            <p className="navbar-item has-text-black desktop">SHOP</p>
            <p className="navbar-item has-text-black desktop">SIGIN</p>
              <figure className="navbar-item image has-text-black center">
                <i className="fas fa-2x fa-bars" style={{width: '1rem', height: '1rem'}}></i>
              </figure>
          </div>
        </div>
      </nav>
      { /* /.hero-head */ }

      { /* .hero-body */ }
      <div className="hero-body">
        <div className="is-overlay has-text-centered single-spaced" style={{top: "252px"}}>
          <h1 className="subtitle is-4 has-text-bold">Tesla</h1>
          <h2 className="title is-1">Roadster</h2>
        </div>
      </div>
      { /* /.hero-body */ }

      { /* .hero-footer */ }
      <main className="hero-foot center" style={{padding: "2rem"}}>
        <div id="grid" style={{width: "768px"}}>
          <div id="a" className="center-column">
          <p className="has-text-centered has-text-white">
            The quickest car in the world, with record-setting<br/>
            acceleration, range and performance.
          </p>
          </div>
          <div id="b" className="center-column">
            <p className="title has-text-white">
              <i className="fas fa-tachometer-alt has-text-grey-light"
                 style={{ width: "1em", height: "1em" }}></i>
               1.9<span className="is-size-7">s</span>
            </p>
            <p className="subtitle has-text-white is-7">0-60 mph</p>
          </div>
          <div id="c" className="center-column" style={{borderLeft: "1px solid gray"}}>
            <p className="title has-text-white">
              <span className="is-size-5">+</span>250<span className="is-size-5">mph</span>
            </p>
            <p className="subtitle has-text-white is-7">Top Speed</p>
          </div>
          <div id="d" className="center-column" style={{borderLeft: "1px solid gray"}}>
            <p className="title has-text-white">620<span className="is-size-5">mi</span></p>
            <p className="subtitle has-text-white is-7">Mile Range</p>
          </div>
          <div id="e" className="center-column">
          <a className="button is-danger is-inverted is-rounded is-outlined has-text-weight-bold"
            style={{ width: "100%", border: "0.15em solid white"}}>
            Reserve Now
          </a>
          </div>
        </div>
      </main>
      { /* /.hero-footer */ }

    { /* /.hero */ }</section>  );
};

export default Bulma;
