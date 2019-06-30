class Box extends React.Component {
    constructor() {
        super();
        this.tuggleBox = this.tuggleBox.bind(this);
        this.state = {
            tuggle: false
        }
    }
    tuggleBox() {
        this.setState({
            tuggle: this.state.tuggle ? false : true
        })
    }
    render() {
        return (
            <div className="container">
                <button onClick={this.tuggleBox}>show/hide</button>
                <div className={this.state.tuggle ? "box" : ""}>
                </div>
            </div>
        );
    }
}

















function render() {
    ReactDOM.render(
        <Box />,
        document.getElementById("root")
    );
}
render();