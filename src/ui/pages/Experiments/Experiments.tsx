import {experiments} from "../../../experiments"
import {ICardable} from "../../../types"
import {IExperiment} from "../../../types/experiment"
import {CardBrowser} from "../../components/browser/cardbrowser/CardBrowser"
import {Suspense, useState} from "react"
import {Dialog} from "../../components/dialog/Dialog"

export const Experiments = () => {
  const [open, setOpen] = useState(false);
  const [selectedExperiment, setSelectedExperiment] = useState<IExperiment | null>(null);

  const sortedExperiments = experiments.sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)

    if (aDate > bDate) return -1
    if (aDate < bDate) return 1
    return 0
  })

  const cardOnClick = (e: ICardable) => {
    const experiment = e as IExperiment
    setSelectedExperiment(experiment)
    setOpen(true)
  }

  const dialogOnClose = () => {
    setOpen(false)
    setTimeout(() => setSelectedExperiment(null), 300)
  }

  return (
    <>
      <CardBrowser showLabel items={sortedExperiments} onClick={cardOnClick} />
      
      <Dialog open={open} onClose={dialogOnClose}>
        <Suspense fallback={<div>Loading...</div>}>
          {selectedExperiment && <selectedExperiment.component />}
        </Suspense>
      </Dialog>
    </>
  )
}