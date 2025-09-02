import { useQuiz } from "../Contexts/QuizContext";

function Progress() {
  const { numQuestions, index, answer, points, maxpoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question<strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxpoints}
      </p>
    </header>
  );
}

export default Progress;
