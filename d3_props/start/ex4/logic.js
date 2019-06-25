
class ColorSelector extends React.Component {
    render() {
        return (
            <div>
                <select data={this.props.data} onChange={this.props.change}>
                    <option value={this.props.colorsVal.aqua}>aqua</option>
                    <option value={this.props.colorsVal.teal}>teal</option>
                    <option value={this.props.colorsVal.darkviolet}>darkviolet</option>
                </select>
            </div>
        );
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.change = this.change.bind(this);
        this.state = {
            colorShirt: 'aqua',
            colorDress: 'aqua'
        }
    }
    change(event) {
        var typeClothes = event.target.attributes.getNamedItem('data').value;
        if (typeClothes === 'shirt') {
            this.setState({
                colorShirt: event.target.value
            })
        }
        if (typeClothes === 'dress') {
            this.setState({
                colorDress: event.target.value
            })
        }
    }

    render() {
        let colorsVal = {
            aqua: 'aqua',
            teal: 'teal',
            darkviolet: 'darkviolet'
        }
        return (
            <div>
                <ColorSelector
                    data='shirt'
                    change={this.change}
                    colorsVal={colorsVal}
                />
                <Title
                    text="your shirt will be "
                    nameColor={this.state.colorShirt}
                />
                <ColorSelector
                    data='dress'
                    change={this.change}
                    colorsVal={colorsVal}
                />
                <Title
                    text="your dress will be "
                    nameColor={this.state.colorDress}
                />
            </div>

        );
    }

}
class Title extends React.Component {
    render() {
        console.log(this.props.nameColor)
        return (
            <div>
                <h1>{this.props.text}<span style={{ color: this.props.nameColor }}>{this.props.nameColor}</span></h1>
            </div>
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