class App extends React.Component {
    addHello() {
        document.getElementById('title').innerHTML = 'Hello World';
    }
    render() {
        return (
            <div>
                <button onClick={this.addHello}>Say Hello</button>
                <div id="title">
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);