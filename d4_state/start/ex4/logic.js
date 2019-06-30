class App extends React.Component {
    constructor() {
        super();


    }
    render() {
        return (
            <ToolBar />
        )
    }
}

class ToolBar extends React.Component {
    constructor() {
        super();
    }
    render() {
        const arrTools = ['user', 'star', 'message'];
        const srcICon = [
            'https://findicons.com/files/icons/703/artists_valley_sample/128/business_man_blue.png',
            'https://findicons.com/files/icons/1676/primo/128/star_none.png',
            'https://findicons.com/files/icons/817/webgloss_3d/64/message_32.png'
        ];
        const listIcons = arrTools.map((icon, i) => {
            return (
                <Icon
                    key={i}
                    type={arrTools[i]}
                    srcIcon={srcICon[i]}
                />
            )
        })
        return (
            <div className="container">
                {listIcons}
            </div>
        );
    }
}

class Icon extends React.Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
        this.state = {
            randNum: Math.floor(Math.random() * 10) + 1
        }
    }
    click(e) {
        console.log('clciked')
        let type = e.target.getAttribute('type');
        if (type === 'message') {
            this.setState({
                randNum: 0
            })
        }
    }

    render() {
        let span = this.props.type === 'message' ? <span className="budget">{this.state.randNum}</span> : null
        return (
            <div className='container-img'>
                <img
                    className="img-style"
                    src={this.props.srcIcon}
                    onClick={this.click}
                    type={this.props.type}
                />
                {span}
            </div>
        );
    }

}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root"));
}

render();   