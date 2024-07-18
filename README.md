hosted link=> https://react-quiz-app-three-eta.vercel.app/

I'd be glad to provide a short and simple README for the enhanced React Quiz component:

**README.md**

**React Quiz Component**

This is a React component that implements a simple JavaScript quiz with the following features:

- Question data with options and correct answers
- Random question selection
- Scorekeeping based on correct answers
- Display of correct answer after selection
- Highlighting of correct and incorrect options
- Progress tracking (question number out of total)
- Result screen with final score and list of incorrectly answered questions
- Restart button to replay the quiz

**Usage:**

1. Import the component:

```javascript
import Quiz from './Quiz';
```

2. Render the component in your application:

```javascript
function App() {
  return (
    <div>
      <Quiz />
    </div>
  );
}
```

**Styling:**

- Inline styles are used for basic formatting.
- You can customize the styles further by creating a separate CSS file and referencing it in your application.

**Features for Further Development:**

- Timer for each question
- Different question difficulty levels
- User authentication and score storage
- User feedback for incorrect answers
- Animations and transitions

