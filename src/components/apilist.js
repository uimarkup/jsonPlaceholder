import React, {Component} from 'react';
import APIItem from './apiitems';

class APIList extends Component {
  renderUsers() {
    const onChange = this.props.onChange;
    return (
      this.props.users.map((user, index) => {
        return (
          <APIItem index={index} key={user.email} name={user.name} email={user.email} checked={user.checked} onChange={onChange} />
          )
        })
    );
  }

  render() {
    return(
      <div className="">
        {this.renderUsers()}
      </div>
      );
  }
}

export default APIList;