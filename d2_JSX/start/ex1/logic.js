var data = {
    linkAddress: "https://www.google.com/",
    linkText: "go to google",
    min: -5,
    max: 5,
    color: "maroon",
    "font-weight": "bold",
    buttonText: "click me"
};
function render(data) {
    ReactDOM.render(
        <div>
            <a className="border" href={data.linkAddress} target="_blank">Go to {data.linkText}</a>
            <input type="range" min={data.min * -1} max={data.max * 2} step="2"></input>
            <button id="click" style={{ color: data.color, "font-weight": data["font-weight"] }}>{data.buttonText}</button>
        </div>
        , document.getElementById("root"));
}
render(data);
