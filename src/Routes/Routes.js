import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Projects from "../pages/Project/Projects";
import Skill from "../pages/Skill";
import Main from '../layout/Main'
import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blog/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutMe />
            },
            {
                path: '/skill',
                element: <Skill />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/blog',
                element: <Blogs />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]);

export default router;