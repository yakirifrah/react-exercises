class Box1 extends React.Component {
    render() {
        return (
            <div className="box1">
                <Box2 />
            </div>
        );
    }
}
class Box2 extends React.Component {
    render() {
        return (
            <div className="box2">
                <Box3 />
            </div>
        );
    }
}
class Box3 extends React.Component {
    render() {
        return (
            <div className="box3">
                <Box4 /><Box4 />
            </div>
        );
    }
}
class Box4 extends React.Component {
    render() {
        return (
            <div className="box4">
            </div>
        );
    }
}
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Box1 />
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);