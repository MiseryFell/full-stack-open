import { useState } from 'react'

const Button = (props) => {
  
  return (
    <button onClick={props.handleClick}>{props.btn_type}</button>
  )
}

const AllStatistics = (props) => {
  
  console.log(props.values)

  if (props.values.total == 0) {
    return (
      <>
        <h1>statistics</h1>
        <h2>No feedback given</h2>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticDisplay data_classification={"good"} statistic_value={props.values.good} />

          <StatisticDisplay data_classification={"neutral"} statistic_value={props.values.neutral} />
          
          <StatisticDisplay data_classification={"bad"} statistic_value={props.values.bad} />
          
          <StatisticDisplay data_classification={"all"} statistic_value={props.values.total} />
          
          <StatisticDisplay data_classification={"average"} statistic_value={props.values.average} />
          
          <StatisticDisplay data_classification={"positive"} statistic_value={props.values.positivity} />
        </tbody>
      </table>
    </>
  )
}

const StatisticDisplay = (props) => {

  return (
    <>
      <tr>
        <td>
          {props.data_classification} 
        </td>
        <td>
          {props.statistic_value}
        </td>
      </tr>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allValues = [good, neutral, bad]

  for (let i = 0; i < allValues.length; i++) {
    console.log(allValues[i])
  }
  

  const total = () => {
    let total = 0
    console.log(allValues.length)
    for (let i = 0; i < allValues.length; i++) {
      console.log(total)
      total += allValues[i]
    }
    return total
  }

  const average = () => {
    if (total() == 0) {
      return 0
    }
    return (((good * 1) + (neutral * 0) + (bad * -1)) / total())
  }

  const positivity = () => {
    if (total() == 0) {
      return ("0 %")
    }
    return (`${(good / total()) * 100} %`)
  }

  const AllStatisticsObject = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total(),
    average: average(),
    positivity: positivity()
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} btn_type={"good"}/>
      <Button handleClick={() => setNeutral(neutral + 1)} btn_type={"neutral"}/>
      <Button handleClick={() => setBad(bad + 1)} btn_type={"bad"}/>
      <AllStatistics values={AllStatisticsObject} />
    </div>
  )
}

export default App