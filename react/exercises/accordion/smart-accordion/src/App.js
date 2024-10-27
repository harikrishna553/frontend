import Accordion from "./components/Accordion";

const data = [
  {
    id: 1,
    title: "What is React?",
    description:
      "React is a JavaScript library for building user interfaces, primarily used for creating single-page applications where efficient UI rendering and interactive elements are essential. It was developed by Facebook and uses a component-based architecture.",
  },
  {
    id: 2,
    title: "What is the virtual DOM in React?",
    description:
      "The virtual DOM is a lightweight representation of the actual DOM. React uses this to improve performance by minimizing direct DOM manipulations, comparing the virtual DOM with a 'diffing' algorithm, and updating only the changed elements on the actual DOM.",
  },
  {
    id: 3,
    title: "What are React components?",
    description:
      "Components are the building blocks of a React application. Each component represents a part of the UI, and components can be reused, nested, and composed to create complex interfaces. They can be defined as functional or class components.",
  },
  {
    id: 4,
    title: "What is the use of `useState` in React?",
    description:
      "`useState` is a React hook that allows you to add state to functional components. It returns a state variable and a function to update that state, enabling interactive features and dynamic UI updates based on user actions.",
  },
  {
    id: 5,
    title: "What is `useEffect` used for in React?",
    description:
      "`useEffect` is a hook used for performing side effects in functional components, like fetching data, setting up subscriptions, or manually changing the DOM. It accepts a function and a dependency array to control when it re-runs.",
  },
  {
    id: 6,
    title: "What are props in React?",
    description:
      "Props (short for 'properties') are a way to pass data from a parent component to a child component in React. Props are read-only and allow components to be more dynamic and reusable by customizing them with data from parent components.",
  },
];

function App() {
  return (
    <div>
      <Accordion data={data} />
    </div>
  );
}

export default App;
