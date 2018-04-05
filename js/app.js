import React from 'react';

localStorage.session = Math.random() * 100000000000000000;

let App = React.createClass({
    getInitialState() {
        return {
            messages: [],
            newMessage: ''
        }
    },
    componentDidMount() {
        fetch('messages')
            .then((res) => res.json())
            .then(messages => this.setState({messages}));
    },
    submitMessage() {
        const {messages, newMessage} = this.state;

        this.setState({messages: [newMessage, ...messages], newMessage: ''});

        fetch('messages', {
            method: 'POST',
            body: JSON.stringify({message: newMessage}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
    },
    render() {
        const {messages, newMessage} = this.state;

        return (
            <div>
                <h2>React Message Board</h2>
                <div>
                    <textarea value={newMessage}
                              onChange={(e) => this.setState({newMessage: e.target.value})}
                              rows="3"/>
                </div>
                <div>
                    <button onClick={() => this.submitMessage()}>Submit</button>
                </div>
                {messages.map(message => <div>{message}</div>)}
            </div>
        );
    }
});


React.render(<App/>, document.body);