import { useTwitchChat } from '../useTwitchChat'
import { Layout } from '../components'

const HomePage: React.FC = () => {
  useTwitchChat()

  return <Layout></Layout>
}

export default HomePage
