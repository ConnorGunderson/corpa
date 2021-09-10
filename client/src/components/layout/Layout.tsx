import { NavBar, Footer, Main } from '..'

export const Layout: React.FC = () => {
  return (
    <div className="bg-gray-300 h-full w-full flex justify-between flex-col">
      <NavBar></NavBar>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
