class App extends React.Component {
    constructor() {
        super();
        this.calc = this.calc.bind(this);
    }
    calc(num, typeCalc) {
        if (typeCalc === 'squrt-calc') {
            return num * num;
        }
        else if (typeCalc === 'root-calc') {
            return Math.sqrt(num);
        }
        else if (typeCalc === 'sum-calc') {
            let result = this.getSigma(num);
            return result;
        }
        else if (typeCalc === 'heighest-calc') {
            let valSqurt = Math.sqrt(num);
            let sigma = this.getSigma(num + 5);
            let valSigma = sigma.slice(sigma.indexOf('=') + 1, sigma.length);
            return Math.max(valSigma, valSqurt);
        }
    }
    getSigma(num) {
        let message = "";
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            if (i === num) {
                message += i;
            }
            else {
                message += i + "+";
            }
            sum += i;
        }
        return `${message} = ${sum}`
    }
    render() {
        return (
            <div>
                <Calculator
                    title="calculate Squard Number"
                    data="squrt-calc"
                    calc={this.calc}
                    label='Enter Number'
                    Result='Result'
                />
                <Calculator
                    title="calculate Squard Root"
                    data="root-calc"
                    calc={this.calc}
                    label='Enter Number'
                    Result='Result'
                />
                <Calculator
                    title="calculate Sigma"
                    data="sum-calc"
                    calc={this.calc}
                    label='Enter Number'
                    Result='Result'
                />
                <Calculator
                    title="calculate Height between squrt and Sigma"
                    data="heighest-calc"
                    calc={this.calc}
                    label='Enter Number'
                    Result='Result'
                />
            </div>
        );
    }
}



class Calculator extends React.Component {
    constructor() {
        super();
        this.performCalculation = this.performCalculation.bind(this);
    }
    performCalculation(event) {
        let typeCalc = event.target.getAttribute('id');
        // console.log(document.getElementById(`${this.props.data}`))
        let val = document.getElementById(`${this.props.data}`).value;
        console.log(val)
        if (val !== '') {
            let result = this.props.calc(parseInt(val), typeCalc);
            document.getElementById(`result${this.props.data}`).innerHTML = `\t${result}`;
        }
        else {
            document.getElementById(`result${this.props.data}`).innerHTML = '';
        }
    }
    render() {
        return (
            <div className="calculator">
                <h1>{this.props.title}</h1>
                <div>
                    <label>{this.props.label}</label>
                    <input type="text" onBlur={this.performCalculation} id={this.props.data} />
                </div>
                <div>
                    <label htmlFor="result">{this.props.Result}</label>
                    <span id={"result" + this.props.data}></span>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);
