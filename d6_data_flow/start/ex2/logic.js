class App extends React.Component {
    constructor() {
        super();
        this.counterInputBoxChecked = 0;
        this.clickCheckBox = this.clickCheckBox.bind(this);
        this.state = {
            disabledProp: true,
        }
    }
    clickCheckBox(target) {
        if (target.checked) {
            this.counterInputBoxChecked++;
        }
        else if (!target.checked) {
            this.counterInputBoxChecked--;

        }
        this.setState({
            disabledProp: this.counterInputBoxChecked === 2 ? false : true
        })
    }
    render() {
        return (
            <div>
                <Title
                    text='Terms of Use'
                />
                <TermsText
                    text='bla bla'
                />
                <CheckBox
                    textCheckBox1='I have read the conditions'
                    textCheckBox2='I accept all the terms'
                    clickCheckBox={this.clickCheckBox}
                />
                <Button
                    disabledProp={this.state.disabledProp}
                />
            </div>
        )
    }
}

const Title = ({ text }) => {
    return (
        <h1>{text}</h1>
    );
}

const TermsText = ({ text }) => {
    return (
        <h3>{text}</h3>
    );
}

class CheckBox extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        this.props.clickCheckBox(target);
    }
    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} type="checkbox" />{this.props.textCheckBox1}<br />
                <input onChange={this.handleInputChange} type="checkbox" />{this.props.textCheckBox2}
            </div>
        )
    }
}



class Button extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <button disabled={this.props.disabledProp} >next</button>
        )
    }
}



function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root"));
}

render();