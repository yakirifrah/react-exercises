
const Box = ({ myStyle }) => {
    console.log(myStyle);
    return (
        <div className={myStyle}></div>
    )
}
class App extends React.Component {

    render() {
        let styleBox = {
            box1: 'box box1',
            box2: 'box box2',
            box3: 'box box3',
            box4: 'box box4',
            box5: 'box box5',
            box6: 'box box6'

        }
        return (
            <div>
                <div className="container">
                    <Box myStyle={styleBox.box1} />
                    <Box myStyle={styleBox.box2} />
                    <Box myStyle={styleBox.box3} />
                    <Box myStyle={styleBox.box2} />
                    <Box myStyle={styleBox.box1} />
                </div>
                <Box myStyle={styleBox.box6} />
            </div>
        );
    }

}





function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );

}
render();