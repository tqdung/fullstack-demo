import { FunctionComponent, Suspense, lazy } from "react"
import { Route, Navigate } from 'react-router-dom'
import { ROUTE_PATHS } from "./route-paths"

const LoginPage = lazy(() => import('@pages/Login'));
const MainPage = lazy(() => import('@pages/Main'));
const HomePage = lazy(() => import('@pages/Home'));
const AboutPage = lazy(() => import('@pages/About'));
const BlogPage = lazy(() => import('@pages/Blog'));

const NotFound = lazy(() => import('@pages/NotFound'));

interface IRoute {
    path: string
    name: string
    component: any
    children?: IRoute[]
    requireAuth?: boolean;
}

function PrivateRoute({ children, ...rest }) {
    const authenticated = true;//localStorage.getItem(LOCAL_STORAGE_KEY.AUTHENTICATION)
    if (!authenticated) {
        // not logged in so redirect to login page with the return url
        return <Navigate to={ROUTE_PATHS.LOGIN} state={{ from: window.location.pathname }} />
    }
    // authorized so return child components
    return children;
}

const LazyLoadRoute = (Component: FunctionComponent) => (
    <Suspense fallback={<>Loading...</>}>
        <Component />
    </Suspense>
)

const renderRoutes = (items: IRoute[]) =>
    items.map((route) => {
        if (route.children) {
            return (
                <Route
                    key={route.name}
                    path={route.path}
                    element={route.requireAuth ? <PrivateRoute>{route.component}</PrivateRoute> : route.component}
                >
                    {renderRoutes(route.children)}
                    <Route key="not-found" path="*" element={<NotFound />} />
                </Route>
            )
        }
        return (
            <Route
                key={route.name}
                path={route.path}
                element={route.requireAuth ? <PrivateRoute>{route.component}</PrivateRoute> : route.component}
            />
        )
    })



export const NON_AUTH_ROUTES: IRoute[] = [
    {
        path: ROUTE_PATHS.LOGIN,
        name: 'Login',
        component: LazyLoadRoute(LoginPage),
    },
]

export const AUTH_ROUTES: IRoute[] = [
    {
        path: '/',
        name: 'Main',
        requireAuth: true,
        component: LazyLoadRoute(MainPage),
        children: [
            {
                path: ROUTE_PATHS.HOME,
                name: 'Home',
                component: LazyLoadRoute(HomePage),
            },
            {
                path: ROUTE_PATHS.ABOUT,
                name: 'About',
                component: LazyLoadRoute(AboutPage),
            },
            {
                path: ROUTE_PATHS.BLOG,
                name: 'Blog',
                component: LazyLoadRoute(BlogPage),
            },
        ]
    }
]

export const mainRoutes: IRoute[] = [
    ...AUTH_ROUTES,
    ...NON_AUTH_ROUTES,
]

export { LazyLoadRoute, renderRoutes }
