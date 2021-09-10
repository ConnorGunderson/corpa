import corpa from '../../assets/corpa.png'

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-200 p-2 shadow-md">
      <div className="w-4/5 mx-auto">
        <h1 className="text-2xl flex flex-row items-center">
          Corpa
          <img alt="corpa" src={corpa} className="pl-2 h-12 font-bolder" />
        </h1>
      </div>
    </nav>
  )
}
