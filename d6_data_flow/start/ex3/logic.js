class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "kitchen tools"
        }
    }

    getSubCategories() {
        if (this.state.category === "kitchen tools") {
            return ["bread knife", "grater", "colander"];
        } else if (this.state.category === "furnitures") {
            return ["stool", "couch", "futon"];
        }
    }

    render() {
        return (
            <div>
                <label>Category</label>
                <Category items={["kitchen tools", "furnitures"]} onSelect={(e) => this.setState({ category: e.target.selectedOptions[0].value })}></Category>
                <label>Sub Category</label>
                <Category items={this.getSubCategories()} onSelect={this.select}></Category>
            </div>
        );
    }
}

class Category extends React.Component {
    render() {
        const { onSelect, items } = this.props
        return (
            <div>
                <select onChange={onSelect}>
                    {items.map((item) =>
                        (
                            <option>{item}</option>
                        )
                    )}
                </select>
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