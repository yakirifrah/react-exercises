class Quiz extends React.Component {
    render() {
        return (
            <div className="quiz">
                <QuizTitle />
                <Q1 />
                <Q2 />
            </div>
        );
    }
}
class QuizTitle extends React.Component {
    render() {
        return (
            <h1 className="title-quiz">How Do You Like Front End?</h1>
        );
    }
}
class Q1 extends React.Component {
    render() {
        return (
            <div>
                <Q1Title />
                <Q1Input />
            </div>
        );
    }
}
class Q1Title extends React.Component {
    render() {
        return (
            <h3>How Much you love Front end?</h3>
        );
    }
}
class Q1Input extends React.Component {
    render() {
        return (
            <input type='range' min='1' max='10' />
        );
    }
}
class Q2 extends React.Component {
    render() {
        return (
            <div>
                <Q2Title />
                <Q2Input />
            </div>
        );
    }
}
class Q2Title extends React.Component {
    render() {
        return (
            <h3>What is your favourite front end feature/topic?  </h3>
        );
    }
}
class Q2Input extends React.Component {
    render() {
        return (
            <input type='text' />
        );
    }
}
class App extends React.Component {
    render() {
        return (
            <Quiz />
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);