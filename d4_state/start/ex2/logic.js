class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        let titleText = 'Which colors do you want?';
        let subTitle = "(disable the one you don't want a click)";
        let arrColor = ['blue', 'purple', 'green', 'red', 'pink'];
        let listArray = arrColor.map((color, i) => {
            return (
                <Button
                    type={arrColor[i]}
                    key={i}
                    value={arrColor[i]}
                />

            )
        })
        return (
            <div>
                <Title text={titleText} />
                <SubTitle text={subTitle} />
                {listArray}
            </div>

        );
    }
}

const Title = ({ text }) => {
    return (
        <h1>{text}</h1>
    )
}
const SubTitle = ({ text }) => {
    return (
        <h3>{text}</h3>
    );
}
class Button extends React.Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
        this.state = {
            disable: false
        }
    }
    click(e) {
        let type = e.target.getAttribute('type');
        if (type === 'blue' || 'purple' || 'green' || 'red' || 'pink') {
            this.setState({
                disable: true
            })

        }
    }
    render() {
        return (
            <button
                onClick={this.click}
                disabled={this.state.disable}
                type={this.props.type}
            >
                {this.props.value}
            </button>
        );
    }
}












function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root"));
}

render();