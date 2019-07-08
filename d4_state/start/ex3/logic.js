const App = () => {
    return (
        <div>
            <TextVisableInProps isVisable={true} />
            <TextVisableInProps isVisable={false} />
            <TextVisableInState />
        </div>);
}

class TextVisableInProps extends React.Component {
    render() {
        const { isVisable } = this.props;
        let isVisablity = isVisable ? "block" : "none";
        return (
            <div>
                <h1>text visbility with props</h1>
                <h2>the text is visable:{isVisable.toString()}</h2>
                <h3 style={{ display: isVisablity }}>the text is visbilty</h3>
            </div>
        );

    }
}
class TextVisableInState extends React.Component {
    constructor() {
        super();
        this.state = ({ isVisable: true });
    }
    render() {
        let isVisablity = this.state.isVisable ? "block" : "none"
        return (
            <div onMouseEnter={() => this.setState({ isVisable: !this.state.isVisable })}>
                <h2 onClick={() => this.setState({ isVisable: !this.state.isVisable })}>text is visablity with state</h2>
                <h2 style={{ display: isVisablity }}>visable</h2>
            </div>
        )
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root"));
}

render();