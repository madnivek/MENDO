import React from 'react';
import Banner from '../banner/banner';
import Modal from 'react-modal';

const modalLinks = {
  support: ["Account", "Contact", "FAQ", "My Order", "Payment Options"],
  about: [
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
    this.state = { modalIsOpen: false };
  }

  renderModal(type){
    const contactText = "+31 (020) 612 1216 \n service@mendo.nl \n Chat with us";
    const visitUsText = "Berenstraat 11, \n 1016 GG Amsterdam \n The Netherlands";
    const linkTexts = modalLinks[type];

    return(
      <Modal
          className="info-modal"
          overlayClassName="info-modal-overlay"
          isOpen={ this.props.modalIsOpen }
          shouldCloseOnOverlayClick = {true}
          contentLabel="Example Modal"
          onRequestClose={ this.props.props}
        >
        <section className="info-section">
          <h2>TITLE</h2>
          <ul>
            <li>
              LINKS
            </li>
          </ul>
          <div>
            <p>
              LEFT TEXT
            </p>
            <p>
              RIGHT TEXT
            </p>
          </div>
        </section>
      </Modal>
    )

  }

  render(){
    return (
      <div>
        <div className="header">
          <nav className="nav-bar">
            <ul>
              <li>HOME</li>
              <li>BOOKS</li>
            </ul>
            <ul>
              <li>ABOUT</li>
              <li>SUPPORT</li>
            </ul>
          </nav>
          <h2 className="logo">KENDO</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default Header;
