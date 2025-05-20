function Progress({ numQuestions, index, answer, points, maxpoints }) {
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
