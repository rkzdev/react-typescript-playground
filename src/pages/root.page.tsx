import { Link, Outlet } from 'react-router-dom'

export const RootPage = () => {
  return (
    <div className="antialiased text-gray-900">
      <header className="flex justify-between items-center container mx-auto">
        <h1 className="font-bold">React Typescript</h1>
        <nav>
          <ul className="flex gap-4 text-sm">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/hooks'}>Hooks</Link>
            </li>
            <li>
              <Link to={'/todos'}>Todos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
