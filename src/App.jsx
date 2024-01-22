/* import { useState } from 'react' */
import "./App.css";
import Chart from "./components/Charts";
import GraphicTypeContent from "./components/GraphicTypeContent";
import { Logo, Upload } from "./components/Icons";
import Metrics from "./components/Metrics";

function App() {
  return (
    <>
      <header>
        <Logo /> myStonks
      </header>
      <main>
        <div className="sheet-viewer-content">
          <Metrics
            types={[
              {
                name: "MRR",
              },
              {
                name: "Churn Rate",
              },
            ]}
          />
          <Chart />
          <GraphicTypeContent
            types={[
              {
                name: "Line",
              },
              {
                name: "Pizza",
              },
              {
                name: "Circle",
              },
            ]}
          />
        </div>
        <div className="sheet-controls-content">
        <button className="upload-button" title="Subir nova planilha">
          <Upload /> Subir nova planilha
        </button>
        </div>
      </main>
      <footer>
        <small>© 2024 - Alexandre Magno Dias</small>
        <small>alexandre.magno.wrk@gmail.com</small>
      </footer>
    </>
  );
}

export default App;
