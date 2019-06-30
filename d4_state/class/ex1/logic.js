class App extends React.Component {
    constructor() {
        super();
        this.ranNum = this.ranNum.bind(this);
        this.state = {
            randomNumber: 1
        }
    }
    ranNum() {
        let randomNum = Math.floor(Math.random() * 10) + 1
        this.setState({
            randomNumber: randomNum
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.ranNum}>random number</button>
                <span>{this.state.randomNumber}</span>
            </div>
        );
    }
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();