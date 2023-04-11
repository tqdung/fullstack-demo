import {
    useOutlet,
    useNavigate,
    useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { Masthead, Navbar, Footer } from '@layouts/index';
import { ROUTE_PATHS } from '@routes/route-paths';

export default function Home() {
    const outlet = useOutlet();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate(ROUTE_PATHS.HOME)
        }
    }, []);

    return (
        <>
            <Masthead />
            <Navbar />
            {outlet}
            <Footer />
        </>
    );
}