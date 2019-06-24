class App extends React.Component {
    render() {
        return (
            <Factorial />
        );
    }
}
class Factorial extends React.Component {
    calcFactorial(num) {
        if (num >= 1) {
            return num * this.calcFactorial(num - 1);
        }
        return 1;
    }
    render() {
        return (
            <div>{this.calcFactorial(5)}</div>

        );
    }
}
ReactDOM.render(
    <App>click</App>,
    document.getElementById("root")
);