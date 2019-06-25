class CardList extends React.Component {
    render() {
        return (
            <div className="cardList-style">{this.props.children}</div>
        );
    }
}




const Card = ({ imgSrc, title, description }) => {
    return (
        <div className="card">
            <Icon imgSrc={imgSrc} />
            <Description
                title={title}
                description={description}
            />
            <RadioButton />
        </div>
    );
}




const RadioButton = () => {
    return (
        <div className="radio-style">
            <input id="option1" type="radio" name="optradio" />
            <input id="option2" type="radio" name="optradio" />
            <input id="option3" type="radio" name="optradio" />
        </div>
    );

}



const Icon = ({ imgSrc }) => {
    return (
        <img src={imgSrc} />
    );
}

const Description = ({ title, description }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}



class App extends React.Component {

    render() {

        let cards = {
            card1: {
                imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdW4KIYEtlqYHuGDwL9rSg9Jf5_a3SBjGv-Eb0Gx21zg-Hu4J`,
                title: `read to travel`,
                description: `chose your destination. plan your trip.
                                Pick the best place for your holiday`
            },
            card2: {
                imgSrc: `https://www.calendar.com/wp-content/uploads/2018/06/personal-calendar.jpg`,
                title: `Selecet to Date`,
                description: `select the day pick your ticket, We give 
                                you the best price, we guaranted!`
            },
            card3: {
                imgSrc: `https://rcinc.com/wp-content/uploads/2017/04/7.jpg`,
                title: `Fells Like Home`,
                description: `Enjoy your holidays! dont forget to take
                                a beer and take a photo`
            }
        }
        return (
            <CardList>
                <Card
                    imgSrc={cards.card1.imgSrc}
                    title={cards.card1.title}
                    description={cards.card1.description}
                />
                <Card
                    imgSrc={cards.card2.imgSrc}
                    title={cards.card2.title}
                    description={cards.card2.description}

                />
                <Card
                    imgSrc={cards.card3.imgSrc}
                    title={cards.card3.title}
                    description={cards.card3.description}

                />
            </CardList>
        )

    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();