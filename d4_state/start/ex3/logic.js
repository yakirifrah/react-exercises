const App = () => {
    return (
        <div>
            <TextVisableInProps visable={true} />
            <TextVisableInState />
        </div>);
}

class TextVisableInProps extends React.Component {


    click() {
        
    }
    render() {
        return (
            <h1 onClick={this.click}>{}</h1>

        )
    }

}
class TextVisableInState extends React.Component {
    constructor() {
        super();
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root"));
}

render();