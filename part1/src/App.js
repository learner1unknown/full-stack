const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}  

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {

  return (
    props.partsAndExercises.map((part) => {
    return <p>
      <Part part={part.part} exercise={part.exercise}/>
    </p>
    })
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const partsAndExercises = [
    {
      part: 'Fundamentals of React',
      exercise: 10
    },
    {
      part: 'Using props to pass data',
      exercise: 7
    },
    {
      part: 'State of a component',
      exercise: 14
    }
  ]

  const total = partsAndExercises.reduce((sum, part) => {
    return sum + part.exercise
  }, 0)

  return (
    <div>
      <Header course={course} />
      <Content partsAndExercises={partsAndExercises} />
      <Total  total={total}/>
    </div>
  )
}

export default App;
