# React Quiz

A fully functional, interactive quiz application built with **React**. This project demonstrates modern React practices, including hooks, state management with `useReducer`, component composition, and integration with a mock REST API using `json-server`.


---

## Features

- Fetches quiz questions from a mock REST API ("json-server")  
- Timer for the quiz
- Progress bar and scoring system
- Highscore tracking (persists until page reload)
- Retry quiz functionality
- Responsive and clean UI
- Modular, reusable React components

---

## Technologies Used

- **React** (v19+)
- **React Hooks**: "useState", "useReducer", "useEffect"
- **json-server**: For mock REST API
- **JavaScript (ES6+)**
- **CSS** for styling
- **VS Code** for development

---

## Project Structure


react-quiz/
│
├── public/
│   └── logo512.png  
│
├── src/
│   ├── components/  
│   │   ├── Appv-1.js  
│   │   ├── Header.js  
│   │   ├── Main.js   
│   │   ├── Loader.js  
│   │   ├── Error.js  
│   │   ├── Startscreen.js   
│   │   ├── Question.js  
│   │   ├── Options.js  
│   │   ├── NextButton.js  
│   │   ├── Progress.js  
│   │   ├── FinishedScreen.js  
│   │   ├── Timer.js  
│   │   └── Footer.js  
│   ├── questions.json  
│   ├── index.js  
│   └── index.css   
│  
├── package.json  
└── README.md

---

## How It Works

1. **Data Fetching**:  
   On app load, questions are fetched from a mock API ("json-server" serving "questions.json").

2. **State Management**:  
   The app uses "useReducer" for complex state, handling quiz status, current question, answers, points, highscore, and timer.

3. **Quiz Flow**:  
   - User starts the quiz.
   - Each question is displayed with options.
   - Timer counts down for the quiz.
   - User selects an answer; points are awarded if correct.
   - Progress and score are shown.
   - At the end, the user sees their score and highscore, and can retry the quiz.

---

## React Concepts & Hooks Used

### `useReducer`
- Manages the main quiz state (status, questions, index, answer, points, highscore, timer).
- Handles actions like "start", "newAnswer", "nextQuestion", "finish", "restart", "tick".

### `useEffect`
- Fetches questions from the API on mount.
- Handles timer logic in the "Timer" component.

### Component Composition
- The app is split into small, reusable components (e.g., "Header", "Question", "Options", "Timer", "FinishedScreen").

### Props & State
- Data and functions are passed down as props to child components for interaction and UI updates.

---

## Mock REST API

- **json-server** is used to serve "questions.json" as a REST API.
- Start the server with:
  bash
  npm run server
  
- The API is available at:  
  "http://localhost:8000/questions"

---

## Implementation Details

### 1. **State Management with useReducer**
- The app uses the `useReducer` hook to manage all quiz-related state in a single place.
- The state includes:  
  - "questions": The list of quiz questions (fetched from the API)
  - "status": The current phase of the quiz (`loading`, `error`, `ready`, `active`, `finish`)
  - "index": The current question number
  - "answer": The user’s selected answer for the current question
  - "points": The user’s current score
  - "highscore": The highest score achieved in the session
  - "secondsRemaining": The countdown timer for the quiz

### 2. **Quiz Lifecycle**
- **Loading:**  
  When the app starts, it fetches questions from the mock API. While fetching, the status is `loading`.
- **Ready:**  
  Once questions are loaded, the status becomes `ready` and the user can start the quiz.
- **Active:**  
  When the quiz starts, the status is set to `active`, the timer starts, and questions are shown one by one.
- **Answering:**  
  The user selects an answer. The app checks if it’s correct and updates the score.
- **Next Question:**  
  After answering, the user can move to the next question. The app updates the index and resets the answer.
- **Timer:**  
  The timer counts down. If it reaches zero, the quiz automatically finishes.
- **Finish:**  
  When all questions are answered or time runs out, the status becomes `finish` and the final score and highscore are shown.
- **Restart:**  
  The user can retry the quiz, which resets the state (except for the loaded questions and highscore).

### 3. **Component Structure**
- The app is split into small, focused components:
  - **Header:** Shows the quiz title and logo.
  - **Main:** Wraps the main quiz content.
  - **Loader/Error:** Shown during loading or if there’s an error fetching questions.
  - **Startscreen:** Lets the user start the quiz.
  - **Question/Options:** Displays the current question and possible answers.
  - **Progress:** Shows quiz progress and score.
  - **Timer:** Displays the countdown and triggers quiz finish when time is up.
  - **NextButton:** Moves to the next question.
  - **FinishedScreen:** Shows the final score, highscore, and retry option.
  - **Footer:** Contains navigation and timer.

### 4. **Mock API Integration**
- The app uses `json-server` to serve a local JSON file as a REST API.
- On startup, the app fetches questions from `http://localhost:8000/questions`.
- This allows you to develop and test the app without a real backend.

### 5. **User Experience**
- The UI is responsive and updates in real-time as the user interacts.
- The timer and progress bar provide feedback and urgency.
- The highscore motivates users to improve.



---

## Customization

- **Add/Edit Questions**:  
  Modify `src/questions.json` to add or change quiz questions.
- **Change Timer**:  
  Adjust `SECS_PER_QUESTION` in `Appv-1.js` to change the time per question.
- **Styling**:  
  Edit `index.css` or component CSS for custom styles.
