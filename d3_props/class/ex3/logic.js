class Box extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
const App = () => {
    return (
        <Box>
            <div className="box box1">
                <div className="box box2">
                    <div className="box box3">
                        <div className="center-box">
                            <div className="box4"></div>
                            <div className="box4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

