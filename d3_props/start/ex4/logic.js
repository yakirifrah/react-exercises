
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
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(event) {
        var typeClothes = event.target.attributes.getNamedItem('data').value;
        if (typeClothes === 'shirt') {
            this.props.clothes.shirt = event.target.value;
            let spanShirt = document.getElementById('shirt');
            spanShirt.innerHTML = this.props.clothes.shirt;
            spanShirt.style.color = this.props.clothes.shirt;


        }
        if (typeClothes === 'dress') {
            this.props.clothes.dress = event.target.value;
            let spanDress = document.getElementById('dress');
            spanDress.innerHTML = this.props.clothes.dress;
            spanDress.style.color = this.props.clothes.dress;
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
                <div>
                    <h1>your shirt will be <span id="shirt"></span></h1>
                </div>
                <ColorSelector
                    data='dress'
                    change={this.change}
                    colorsVal={colorsVal}
                />
                <div>
                    <h1>your dress will be <span id="dress"></span></h1>
                </div>
            </div>

        );
    }

}

function render() {
    let clothes = {
        shirt: 'aqua',
        dress: 'aqua'
    };
    ReactDOM.render(
        <App clothes={clothes} />,
        document.getElementById("root")
    );
}
render();


