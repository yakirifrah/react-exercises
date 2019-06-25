const Title = ({ font, text, size }) => {
    let style = {
        fontFamily: font,
        fontSize: size
    }
    return (
        <h1 style={style}>{text}</h1>
    );
}
const App = () => {
    return (
        <div>
            <Title font="Times New Roman" size="20px" text="if I Rule the DOM" />
            <Title font="Ariel" size="40px" text="Talk is cheap.Show me the code" />
        </div >
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);