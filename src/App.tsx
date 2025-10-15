import './core.css'
import { Button } from './components/button'
import { Typography } from './components/typography'

export const App = () => {
  return (
    <>
      <Button color='primary'>prim</Button>
      <Button color='secondary'>swconvd</Button>
      <Button>nothing</Button>
      <Typography color='primary'>primary</Typography>
      <Typography color='secondary'>secondary</Typography>
    </>
  )
}
