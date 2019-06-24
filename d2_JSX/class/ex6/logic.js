class App extends React.Component {
    constructor() {
        super();
        this.number = 8;
        this.showNumbers = this.showNumbers.bind(this);
    }
    showNumbers() {
        document.getElementById('number').innerHTML = '';
        for (let i = 0; i < this.number; i++) {
            document.getElementById('number').innerHTML += `${i}\t`;
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.showNumbers}>Show Numbers</button>
                <div>
                    <h3>Number:</h3>
                    <div id="number"></div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);