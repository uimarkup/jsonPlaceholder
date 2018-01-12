import React, { Component } from 'react';
import './App.css';
import APIList from './components/apilist';
class App extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if(response.status !== 200) {
                    console.log('Problem status is' + response.status);
                }

                response.json().then((data) => {
                    let users = data.map((user) => {
                        return {
                            name: user.name,
                            email: user.email,
                            checked: false
                        };
                    });

                    users = this.userDataFilter(users);

                    this.setState({users});
                })
            })
            .catch((e) => {
                console.log('Error in API Fetch Data');
            });
    }



userDataFilter(data) {
        return data.sort((a,b) => {
            const user_a = this.alphaFix(a.name);
            const user_b = this.alphaFix(b.name);
            return user_a > user_b ? 1 : -1;
        });
    }

    alphaFix(name) {
        return name.toLowerCase().replace(/^(mrs?\. )/ig, '').trim();
    }

    onHandleChange=(index)=> {
        const users = this.state.users;
        users[index].checked = !users[index].checked;
        this.setState({users});
    }

    usersSelected() {
        return this.state.users.filter(props => props.checked).length;
    }

    onClickHandle=()=> {
        const selectedUser = this.state.users.filter(props => props.checked).map(user => user.name);

        const apiuser = selectedUser.map(user => {
            return(`<li>${user}</li>`);
        }).join('');
        this.results.innerHTML = apiuser;
    }

    render() {
        let Initial = "status";
        Initial += this.usersSelected() === 0 ? " hide" :"";
        return (
            <div className="container-fluid">
                <div className={Initial}> {this.usersSelected()} of {this.state.users.length} selected</div>
                <APIList users={this.state.users} onChange={this.onHandleChange}/>
                <button className='btn btn-primary' onClick={this.onClickHandle}>Confirm</button>
                <ul className="" ref={(list) => {this.results = list;}}/>
            </div>
        );
    }
}

export default App;
