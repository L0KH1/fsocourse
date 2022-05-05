import { useState } from 'react'

const Statistics = (props) => (
  <div>
    <table>
    <tbody>
      <tr>
        <td><StatisticLine text="good" value={props.good}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="neutral" value={props.neutral}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="bad" value={props.bad}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="total" value={props.bad+props.neutral+props.good}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="average" value={(-props.bad+props.good)/(props.good+props.bad+props.neutral)}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="positive" value={props.good/(props.good+props.bad+props.neutral)}/></td>
      </tr>
    </tbody>
    </table>
  </div>
  )

const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      {((good+neutral+bad)>0) ? <Statistics good={good} neutral={neutral} bad={bad}/> : <div><p>no feedback given</p></div>}
    </div>
  )
}

export default App