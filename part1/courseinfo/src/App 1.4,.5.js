const App = () => {
  const course = {
    name:'Half Stack application development',
    parts:[
      {
        name:'Fundamentals of React',
        exercises:10,
      },
      {
        name:'Using props to pass data',
        exercises:7,
      }, 
      {
        name:'State of a component',
        exercises:14,
      }
    ]
  }
  

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}
const Header = (props) => {
  return (
    <>
      <p>Course name: {props.course.name}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      {/*<Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
       <Part part={props.part[1]} exercise={props.exercise[1]}/>
      <Part part={props.part[2]} exercise={props.exercise[2]}/> */}
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      {/* <p>"{props.part}" has {props.exercise} exercises</p> */}
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>There are a total of {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises} exercises</p>
    </>
  )
}

export default App