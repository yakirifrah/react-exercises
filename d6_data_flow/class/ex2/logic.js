class Box extends React.Component {
    constructor() {
        super();
        this.handleColor = this.handleColor.bind(this);
    }
    handleColor(event) {
        event.stopPropagation();
        this.props.onPickColor(this.props.color);
    }
    render() {
        return (
            <div
                className={"box " + this.props.color}
                onClick={this.handleColor}
            >
                {this.props.children}
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onPickColor = this.onPickColor.bind(this);
        this.state = {
            colorBox1: ''
        }
    }
    onPickColor(color) {
        this.setState({
            colorBox1: color
        })
    }

    render() {
        return (
            <Box onPickColor={this.onPickColor} color={this.state.colorBox1}>
                <Box onPickColor={this.onPickColor} color="blue" >
                    <Box onPickColor={this.onPickColor} color="pink">
                        <Box onPickColor={this.onPickColor} color="purple"></Box>
                        <Box onPickColor={this.onPickColor} color="purple"></Box>
                    </Box>
                </Box>
            </Box>
        )
    };
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

render();
