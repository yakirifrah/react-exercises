class App extends React.Component {
    constructor() {
        super();
        this.onPickColor = this.onPickColor.bind(this);
        this.state = {
            color: ''
        }
    }
    onPickColor(colorBox) {
        this.setState({
            color: colorBox
        })
    }
    render() {
        return (
            <div>
                <Button
                    onPickColor={this.onPickColor}
                />
                <div style={{ backgroundColor: this.state.color, width: '300px', height: '300px' }}></div>
            </div>
        )
    }
}


class Button extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(event) {
        let type = event.target.getAttribute('type');
        this.props.onPickColor(type);
    }
    render() {
        return (
            <div className="buttonList">
                <button type="blue" onClick={this.handleClick}>Blue</button>
                <button type="green" onClick={this.handleClick}>Green</button>
                <button type="orange" onClick={this.handleClick}>Orange</button>
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