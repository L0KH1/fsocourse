const Hello = (props) => {
  return (
    <div>
      <p>'Ello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Lucy"
  const age = 22
  return(
  <div>
    <h1>Greetings</h1>
    <Hello name="Luke" age={22}/>
    <Hello name={name} age={age}/>
  </div>
  )
}

export default App