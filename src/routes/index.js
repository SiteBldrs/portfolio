import { createBrowserRouter } from "react-router-dom";
import { App } from "layouts";
import {
  ProjectsPage,
  ToolsPage,
  ReviewsPage,
  DocumentPage,
  HomePage,
  QualificationPage,
} from "pages";
import {
  ROOT,
  PROJECTS,
  NOTFOUND,
  TOOLS,
  REVIEWS,
  ABOUT,
  QUALIFICATIONS,
} from "constants";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <App />,
    children: [
      {
        path: ROOT,
        element: <HomePage />,
      },
      {
        path: ABOUT,
        element: <DocumentPage />,
      },
      {
        path: PROJECTS,
        element: <ProjectsPage />,
      },
      {
        path: TOOLS,
        element: <ToolsPage />,
      },
      {
        path: QUALIFICATIONS,
        element: <QualificationPage />,
      },
      {
        path: REVIEWS,
        element: <ReviewsPage />,
      },
      {
        path: NOTFOUND,
        element: <h1>Page Not found</h1>,
      },
    ],
  },
  {
    path: NOTFOUND,
    element: <h1>Page Not found</h1>,
  },
]);
