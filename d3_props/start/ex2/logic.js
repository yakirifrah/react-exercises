class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Nav />
            </div>
        );
    }
}



class StripeCenter extends React.Component {
    render() {
        return (
            <div className="stripe-center">
                <StripeIcon1 />
                <StripeIcon2 />
                <StripeIcon3 />
            </div>
        );
    }
}



class StripeIcon1 extends React.Component {
    render() {
        return (
            <div className="stripe-icon">
                <Icon1 />
                <TitleIcon1 />
                <SecondaryTitleIcon1 />
            </div>
        );
    }
}



class TitleIcon1 extends React.Component {
    render() {
        return (
            <div className="title-icon">USER INRTERFACE DESIGN</div>
        );
    }
}



class SecondaryTitleIcon1 extends React.Component {
    render() {
        return (
            <ul className="main-ul">
                <li className="main-li">
                    Wireframing
                </li>
                <li className="main-li">
                    Prototyping
                </li>
                <li className="main-li">
                    Usabillity testing
                </li>
            </ul>
        );
    }
}



class StripeIcon2 extends React.Component {
    render() {
        return (
            <div className="stripe-icon">
                <Icon2 />
                <TitleIcon2 />
                <SecondaryTitleIcon2 />
            </div>
        );
    }
}



class TitleIcon2 extends React.Component {
    render() {
        return (
            <div className="title-icon">CONCEPT AND IDEAS</div>
        );
    }
}


class SecondaryTitleIcon2 extends React.Component {
    render() {
        return (
            <ul className="main-ul">
                <li className="main-li">
                    Conceptuallazation
                </li>
                <li className="main-li">
                    Digital Branding
                </li>
                <li className="main-li">
                    Product Strategy
                </li>
            </ul>
        );
    }
}

const Icon1 = () => {
    return (
        <div className="icon1">
        </div>
    );

}
const Icon2 = () => {
    return (
        <div className="icon2">
        </div>
    );

}
const Icon3 = () => {
    return (
        <div className="icon3">
        </div>
    );

}

class StripeIcon3 extends React.Component {
    render() {
        return (
            <div className="stripe-icon">
                <Icon3 />
                <TitleIcon3 />
                <SecondaryTitleIcon3 />
            </div>
        );
    }
}


class TitleIcon3 extends React.Component {
    render() {
        return (
            <div>
                <div className="title-icon">DESIGN END BRANDING</div>
            </div>
        )
    };
}


class SecondaryTitleIcon3 extends React.Component {
    render() {
        return (
            <ul className="main-ul">
                <li className="main-li">
                    Interection Design
                </li>
                <li className="main-li">
                    Graphic Design
                </li>
                <li className="main-li">
                    Indentity Design
                </li>
            </ul>
        );
    }
}


class MainTitle extends React.Component {
    render() {
        return (
            <div className="title-main">
                SERVICES
            </div>
        );
    }
}
class DescriptionTitle extends React.Component {
    render() {
        return (
            <div className="desciption-title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a reiciendis repellat molestias quod corrupti fugiat numquam quibusdam ex sapiente aperiam itaque architecto sit rerum, expedita iure esse? Magni, nam.</p>
            </div>
        );
    }
}


class GroupTitle extends React.Component {
    render() {
        return (
            <div className="group-title">
                <MainTitle />
                <DescriptionTitle />
            </div>
        );
    }
}


class Nav extends React.Component {
    render() {
        return (
            <ul className="nav">
                <li><a href="">SERVICES</a></li>
                <li><a href="">WORK</a></li>
                <li><a href="">THE TEAM</a></li>
                <li className="last-item"><img src="https://imageog.flaticon.com/icons/png/512/35/35432.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" /></li>
            </ul>
        );
    }
}


class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <GroupTitle />
                <StripeCenter />
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>

        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);