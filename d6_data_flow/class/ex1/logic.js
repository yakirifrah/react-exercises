class App extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            userName: ''
        }
    }
    handleChange(event) {
        console.log('change');
        let value = event.target.value;
        this.setState({
            userName: value
        })
    }
    render() {
        return (
            <div>
                <label>
                    Select a username:
                <Input
                        handleChange={this.handleChange}
                    />
                </label>
                <h1>{this.state.userName}</h1>
            </div>
        );
    }
}
class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <input type="text" onChange={this.props.handleChange} />
        )
    }
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );

}
render();