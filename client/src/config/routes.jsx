import * as PATHS from "../utils/paths";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";

const routes = (props) => {
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.PROJECTS,
      element: <Projects {...props} />
    }
  ];
};

export default routes;
