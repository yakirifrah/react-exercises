class Box extends React.Component {
    constructor() {
        super();
        console.log("box - constructor");
    }
    componentWillReceiveProps(nextProps) {
        console.log("Box will receive props");
    }
    componentDidUpdate(prevProps, nextProps) {
        console.log('I was updated!');
    }
    render() {
        console.log('Box - render')
        let boxStyle = {
            margin: 20,
            padding: 10,
            border: "1px solid black",
            display: this.props.isShown ? "block" : "none"
        }
        return <div style={boxStyle}>{this.props.children}</div>
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            isShown: true
        }
        console.log("App - constructor");
    }
    componentWillMount() {
        console.log('App will be mounted');
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isShown: !this.state.isShown
            })
        }, 5000);
    }


    render() {
        console.log('App - render');
        return (
            <Box isShown={this.state.isShown}>
                <Box isShown={this.state.isShown} />
                <Box isShown={this.state.isShown} />
            </Box>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));