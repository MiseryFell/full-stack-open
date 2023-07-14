const Header = ({course}) => {

  return (
    <h1>{course}</h1>
  )
}

const Content = ({section}) => {
  
  return (
    <p>
      {section.part} {section.exercises}
    </p>
  )
}

const Total = ({total_num}) => {

  return (
    <p>Number of exercises {total_num}</p>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {part: "Fundamentals of React", exercises: 10},
      {part: "Using props to pass data", exercises: 7},
      {part: "State of a component", exercises: 14}
    ]
  };

  let exercise_nums = [10, 7, 14];

  let total_exercises = () => {
    let total = 0;
    console.log("called total_exercises()");
    console.log(course.parts.length);
    for (let i = 0; i < course.parts.length; i++) {
      console.log(`${total} += ${course.parts[i].exercises}`)
      total += course.parts[i].exercises;
    }
    return total
  }

  return (
    <div>
      <Header course={course.name} />
      <Content section={course.parts[0]} />
      <Content section={course.parts[1]} />
      <Content section={course.parts[2]} />
      <Total total_num={total_exercises()}/>
    </div>
  )
}

export default App