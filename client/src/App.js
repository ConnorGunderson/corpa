import { Route, Switch } from 'react-router'
import { HomePage } from './views'
import './css/globals.css'
import './css/tailwind.css'
import './css/animations.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  )
}

export default App
