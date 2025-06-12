import { useParams, Link } from "react-router-dom";

function nextQuestion(questionNumber) {
    if (questionNumber === 10) {
        return "/results";
    }
    return `/survey/${++questionNumber}`;
}

function previousQuestion(questionNumber) {
    if (questionNumber <= 2) {
        return "/survey/1";
    }
    return `/survey/${--questionNumber}`;
}

function Survey() {
    const { questionNumber } = useParams();
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={previousQuestion(parseInt(questionNumber))}>
                précédent
            </Link>
            <Link to={nextQuestion(parseInt(questionNumber))}>suivant</Link>
        </div>
    );
}

export default Survey;
