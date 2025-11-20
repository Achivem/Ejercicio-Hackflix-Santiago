import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-purple ">
          <div class="px-5 container-fluid">
            <a class="ms-5 navbar-brand text-dream fw-bold" href="#">
              <img
                src="src\assets\moon.svg"
                alt="Sleepflix Logo"
                width="35"
                height="35"
                className="d-inline-block mt-0"
              />
              Sleepflix
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-lg-flex justify-content-lg-between w-75 mx-auto">
                <li class="nav-item">
                  <a class="nav-link text-dream" href="#">
                    Hogar
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  text-dream" href="#">
                    Buscar
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-dream"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Ver más
                  </a>
                  <ul class="dropdown-menu bg-purple">
                    <li>
                      <a class="dropdown-item text-dream" href="#">
                        Vite
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-dream" href="#">
                        React
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-dream" href="#">
                        Bootstrap
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-dream" href="#">
                        Anima
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <p>hola</p>
      </div>
    </>
  );
}

export default App;
