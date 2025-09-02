import { useQuiz } from "../Contexts/QuizContext";

function FinishedScreen() {
  const { points, maxpoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxpoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "👍";
  if (percentage === 0) emoji = "👎";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong>
        out of {maxpoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore :{highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Retry Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
