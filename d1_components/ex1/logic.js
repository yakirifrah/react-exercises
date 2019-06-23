class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>The Title</h1>
                <p>some content</p>
            </div>
        );
    }
}
ReactDOM.render(
    <MyFirstComponent />,
    document.getElementById("root")
);