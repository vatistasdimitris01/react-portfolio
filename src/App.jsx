import { useState, useCallback } from "react";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import "./App.css";

export default function App() {
  const [currentProject, setCurrentProject] = useState(null);

  const openProject = useCallback((index) => {
    setCurrentProject(index);
    window.scrollTo(0, 0);
  }, []);

  const goHome = useCallback(() => {
    setCurrentProject(null);
    window.scrollTo(0, 0);
  }, []);

  if (currentProject !== null) {
    return (
      <ProjectPage
        projectIndex={currentProject}
        onGoHome={goHome}
        onOpenProject={openProject}
      />
    );
  }

  return <HomePage onOpenProject={openProject} />;
}
