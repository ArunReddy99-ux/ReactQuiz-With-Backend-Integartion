import { useQuiz } from "../Contexts/QuizContext";
import Options from "./Options";
function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <>
      <h4>{question.question}</h4>
      <Options />
    </>
  );
}

export default Question;
