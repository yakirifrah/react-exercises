class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <CheckList
                textCheckOne='I read the term of the app'
                textCheckTow='I accept the term app'
                textCheckThird='I want to get the weekly news letter'
                textCheckFour='I want to get adjuted'
            />
        )
    }
}
class CheckList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: false
        }
    }
    componentWillMount() {
        this.setState({
            isGoing: true
        })
    }
    render() {
        return (
            <div>
                <input
                    checked={this.state.isGoing}
                    type="checkbox"
                    disabled="disabled"
                />{this.props.textCheckOne}<br />
                <input type="checkbox"
                    disabled="disabled"
                    checked={this.state.isGoing} />{this.props.textCheckTow}<br />
                <input type="checkbox"
                    disabled="disabled" />{this.props.textCheckThird}<br />
                <input type="checkbox"
                    disabled="disabled" />{this.props.textCheckFour}<br />
            </div>
        )
    };



}

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}
render();
