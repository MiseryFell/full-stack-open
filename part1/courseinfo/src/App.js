import Curriculum from "./Curriculum"

const App = () => {

  const curriculum = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {part: "Fundamentals of React", exercises: 10, id: 1},
        {part: "Using props to pass data", exercises: 7, id: 2},
        {part: "State of a component", exercises: 14, id: 3},
        {part: "Redux", exercises: 11, id: 4}
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {part: "Routing", exercises: 3, id: 1},
        {part: "Middlewares", exercises: 7, id: 2}
      ]
    }
  ];

  

  return (
    <div>
      <Curriculum curriculum={curriculum} curriculumName={"Web Development Curriculum"} />
    </div>
  )
}

export default App