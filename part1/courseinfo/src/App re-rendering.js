// Destructuring 3
const Hello = ({name,age}) => {
  //Destructuring 1
  //const name = props.name
  //const age = props.age //Destructuring 1
  // Destructuring 2
  //const {name, age} = props
  
  const bornYear = () => {    
    const yearNow = new Date().getFullYear()
    return yearNow - age  
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you are probably born in {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  const {counter}=props
  return (
    <div>{counter}</div>
  )
}

export default App