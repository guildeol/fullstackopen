const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part} {props.exerciseCount}
    </p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exerciseCount={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exerciseCount={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exerciseCount={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  let totalExercises = 0;
  course.parts.forEach(part => totalExercises += part.exercises);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </div>
  )
}

export default App
