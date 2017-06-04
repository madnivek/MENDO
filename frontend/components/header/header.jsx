import React from 'react';
import Banner from '../banner/banner';
import Modal from 'react-modal';

const modalLinks = {
  Support: [
    "Account",
    "Contact",
    "FAQ",
    "My Order",
    "Payment Options",
    "See All"],
  About: [
    "Flagship Store",
    "Our Philosophy",
    "Made by KENDO",
    "B2B",
    "Gift service",
    "The Team"]
};

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = { modalType: undefined };
  }

  setModalType(type) {
    this.setState({ type });
  }

  renderModal(type){
    if(!type) return;

    const contactText =
      <p>
        <strong>Contact Us</strong>
        <br/> +31 (020) 612 1216
        <br/> service@mendo.nl
        <br/> Chat with us
      </p>;

    const visitUsText =
      <p>
        <strong>Visit Us</strong>
        <br/>  Berenstraat 11,
        <br/> 1016 GG Amsterdam
        <br/> The Netherlands
      </p>;

    const linkTexts = modalLinks[type].map( link => {
      return(
        <li key={link}>{ link }</li>
      );
    });

    return(
      <section className={`info-section ${type}`}>
        <h2> { type }</h2>
        <ul className="info-section-links">
          { linkTexts }
        </ul>
        <div className="contact-visit-section">
          {contactText}
          {visitUsText}
        </div>
      </section>
    );
  }

  render(){
    return (
      <div>
        <div onMouseLeave={ () => this.setModalType() } className="header">
          <nav className="nav-bar">
            <ul>
              <li>HOME</li>
              <li>BOOKS</li>
            </ul>
            <ul>
              <li onMouseEnter={ () => this.setModalType("About")}>ABOUT</li>
              <li onMouseEnter={ () => this.setModalType("Support")}>SUPPORT</li>
            </ul>
            { this.renderModal(this.state.type) }
          </nav>
          <h2 className="logo">KENDO</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default Header;
