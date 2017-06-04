import React from 'react';
import Modal from 'react-modal';

class InfoModal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
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
}

export default InfoModal;
