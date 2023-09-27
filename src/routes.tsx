import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { RootPage } from './pages/root.page'
import { HooksPage } from './pages/hooks.page'
import { TodosPage } from './pages/todos.page'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/hooks',
        element: <HooksPage />
      },
      {
        path: '/todos',
        element: <TodosPage />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router
