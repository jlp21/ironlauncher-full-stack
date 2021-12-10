import * as PATHS from "../utils/paths";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";
import About from "../pages/About";

const routes = (props) => {
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.PROJECTS,
      element: <Projects {...props} />
    },
    {
      path: PATHS.ABOUT,
      element: <About {...props} />
    }
  ];
};

export default routes;
