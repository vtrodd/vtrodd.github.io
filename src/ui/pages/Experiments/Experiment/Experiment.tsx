import {useParams} from "react-router-dom"
import {experiments} from "../../../../experiments"
import {Suspense} from "react"
import {IExperiment} from "../../../../types/experiment"
import './Experiment.scss'

type ExperimentProps = {
  experiment?: IExperiment
}

export const Experiment = (props: ExperimentProps) => {
  let {keyedName} = useParams()
  let experiment = props.experiment || experiments.find(e => e.keyed_name === keyedName)

  if (!experiment) {
    return <div>Experiment not found</div>
  }

  return (
    <div id='experiment-page'>
      <h1>{experiment.name}</h1>
      <h3>{new Date(experiment.date).toDateString()}</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <experiment.component />
      </Suspense>
    </div>
  )
}