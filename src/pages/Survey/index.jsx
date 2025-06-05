import { Outlet, Link } from "react-router-dom";

function Survey() {
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <Link to="client">QuestionnaireClient</Link>
            <Link to="freelance">QuestionnaireFreelance</Link>
            <Outlet />
        </div>
    );
}

export default Survey;
