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
