const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  

  return (
    <div>
      <Header course={course}/>
      {/* <Content part={part1} exercise={exercises1}/>
      <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/> */}
      <Content part={[part1,part2,part3]} exercise={[exercises1,exercises2,exercises3]}/>
      <Total exercises={[exercises1,exercises2,exercises3]}/>
    </div>
  )
}
const Header = (props) => {
  return (
    <>
      <p>Course name: {props.course}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} exercise={props.exercise[0]}/>
      <Part part={props.part[1]} exercise={props.exercise[1]}/>
      <Part part={props.part[2]} exercise={props.exercise[2]}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>"{props.part}" has {props.exercise} exercises</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>There are a total of {props.exercises[0]+props.exercises[1]+props.exercises[2]} exercises</p>
    </>
  )
}

export default App