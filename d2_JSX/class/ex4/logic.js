class App extends React.Component {
    render() {
        return (
            <WinOrLose />
        )
    }
}
class WinOrLose extends React.Component {
    randNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }
    render() {
        let ranMun = this.randNumber();
        let result = ranMun > 5 ? <h1>You won</h1> : <h3>You lost</h3>;
        return (
            <div>
                <p>you number is {ranMun}</p>
                {result}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);