class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Box />
        )
    }
}
class Box extends React.Component {
    constructor() {
        super();
        this.intervalId = '';
        this.color = ['#2ecc71', '#f1c40f', '#8e44ad', '#7ed6df'],
            this.state = {
                defaultColor: '#fa8231',
                shape: 'box'
            }
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                shape: "circle"
            })
        }, 2000);
        this.intervalId = setInterval(() => {
            this.setState({
                defaultColor: this.color[Math.floor(Math.random() * this.color.length)]
            })
        }, 500);
    }
    render() {
        return (
            <div className={this.state.shape}
                style={{ backgroundColor: this.state.defaultColor }}
            >
            </div>
        )
    }
}

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }, 5000);
}
render();
