// Code from 'start-code.js'
'use strict';
const e = React.createElement;
class Button extends React.component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.stated.liked) {
            return 'You liked this!';
        }
        
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

// Code from react-dom.js
const domContainer = document.querySelector('#aa')
ReactDOM.render(e(LikeButton)) //Will be working only in aa.js ('start-code.js' + 'react-dom.js') 
