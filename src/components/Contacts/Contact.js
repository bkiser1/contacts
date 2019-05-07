import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContacts: false
  };

  onDeleted = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContacts } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className=" card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({ showContacts: !this.state.showContacts })
                  }
                  className=" fas fa-arrow-circle-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleted.bind(this, id, dispatch)}
                />
              </h4>
              {showContacts ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
