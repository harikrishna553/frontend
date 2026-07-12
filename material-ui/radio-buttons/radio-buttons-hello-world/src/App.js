import AcademicGradeSelector from "./components/AcademicGradeSelector";
import GradeSelector from "./components/GradeSelector";

function App() {
  return (
    <div
      style={{
        margin: 10,
        display: "flex",
        gap: 100,
        justifyContent: "flex-start"
      }}
    >
      <GradeSelector />
      <AcademicGradeSelector />
    </div>
  );
}

export default App;
