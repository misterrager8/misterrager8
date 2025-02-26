import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("CNJ-theme") || "light"
  );

  const sections = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    localStorage.setItem("CNJ-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="p-3">
      <div className="nav-custom">
        <div>
          <div className="text-center h5">
            <div>Chemllei "CJ" Joseph</div>
            <div>Full-Stack Developer</div>
            <div>Atlanta, GA</div>
          </div>
          <div className="d-flex mt-1">
            <div className="m-auto">
              <a className="btn bn-sm border-0">
                <i className="bi bi-envelope"></i>
              </a>
              <a className="btn bn-sm border-0">
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="btn bn-sm border-0">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="">
          {sections.map((x) => (
            <a className="text-center" href={"#" + x.id}>
              <div className="heading1">{x.label}</div>
            </a>
          ))}
        </div>
        <div className="bottom">
          <button
            className="btn w-100 border-0"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <i
              className={
                "bi bi-" + (theme === "light" ? "sun-fill" : "moon-fill")
              }></i>
          </button>
        </div>
      </div>
      <div className="main">
        {sections.map((x) => (
          <div className="section" id={x.id}>
            <div className="heading2">{x.label}</div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
