
const Box = ({ style }) => {
    return (
        <div className={style} ></div>
    )
}


const App = () => {
    let style = {
        box1: 'box1',
        box2: 'box2',
        box3: 'box3',
        box4: 'box4'
    }
    return (
        <div className="container">
            <Box style={style.box1} />
            <Box style={style.box2} />
            <Box style={style.box3} />
            <Box style={style.box2} />
            <Box style={style.box1} />
            <box style={style.box4} />
        </div>
    );

}



function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

render();