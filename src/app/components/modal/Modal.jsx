import { RxCross2 } from "react-icons/rx";
import "../modal/modal.scss";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h3>Add Risk Scenario</h3>
        <button onClick={() => setIsOpen(false)}>
          <RxCross2 size={32} />
        </button>
      </div>
      <div className="modal-body">
        <div className="input-container">
          <label htmlFor="riskscenario">Add Risk Scenario</label>
          <input
            type="text"
            id="riskscenario"
            placeholder="Enter Risk Scenario"
          />
        </div>
        <div className="input-container">
          <label htmlFor="riskdescription">Add Risk Description</label>
          <input
            type="text"
            id="riskdescription"
            placeholder="Enter Risk Description"
          />
        </div>

        <div className="risk-field">
          <div className="input-container">
            <label htmlFor="riskfield1">Risk Field 1</label>
            <input
              type="text"
              id="riskdescription"
              placeholder="Enter Risk Field 1"
            />
          </div>
          <div className="input-container">
            <label htmlFor="riskfield2">Risk Field 2</label>
            <input
              type="text"
              id="riskdescription"
              placeholder="Enter Risk Field 2"
            />
          </div>
        </div>
        <div className="key-value">
          <div className="input-container">
            <label htmlFor="key">Key</label>
            <input type="text" id="value" placeholder="Select Key" />
          </div>
          <div className="input-container">
            <label htmlFor="key">Value</label>
            <input type="text" id="value" placeholder="Enter Value" />
          </div>
        </div>
        <p>+Add New Key</p>
        <div className="btn-container">
          <button className="cancel-btn">Cancel</button>
          <div className="inner-btn-group">
            <button className="draft-btn">Save as Draft</button>
            <button className="publish-btn">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
