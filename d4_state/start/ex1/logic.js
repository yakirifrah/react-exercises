class App extends React.Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
        this.state = {
            color: ''
        }
    }
    click(e) {
        let type = e.target.getAttribute('type');
        if (type === 'blue') {
            this.setState({
                color: 'blue'
            })
        }
        else if (type === 'green') {
            this.setState({
                color: 'green'
            })
        }
        else if (type === 'orange') {
            this.setState({
                color: 'orange'
            })
        }
    }
    render() {
        return (
            <div>
                <div className="buttonList">
                    <button type="blue" onClick={this.click}>Blue</button>
                    <button type="green" onClick={this.click}>Green</button>
                    <button type="orange" onClick={this.click}>Orange</button>
                </div>
                <div style={{ backgroundColor: this.state.color, width: '300px', height: '300px' }}></div>
            </div>
        )
    }
}



function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root"));
}

render();