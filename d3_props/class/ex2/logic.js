const App = () => {
    let labelBoxs = {
        label1: "fresh",
        label2: "calm",
        label3: "adventurous",
        label4: "happy"
    }
    let color = {
        colorBox1: '#2ecc71',
        colorBox2: '#f1c40f',
        colorBox3: '#e74c3c',
        colorBox4: '#2c3e50'
    }
    return (
        <div>
            <Box label={labelBoxs.label1} color={color.colorBox1} />
            <Box label={labelBoxs.label2} color={color.colorBox2} />
            <Box label={labelBoxs.label3} color={color.colorBox3} />
            <Box label={labelBoxs.label4} color={color.colorBox4} />
        </div>
    );
}
const Box = ({ label, color }) => {
    let style = {
        backgroundColor: color,
    }
    return (
        <div style={style} className="box">
            {label}
        </div>
    );

}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);