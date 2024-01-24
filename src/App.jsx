/* import { useState } from 'react' */
import { useEffect, useState } from "react";
import "./App.css";
import Chart from "./components/Charts";
import GraphicTypeContent from "./components/GraphicTypeContent";
import { ArrowDown, FileSheet, Logo, Upload } from "./components/Icons";
import Metrics from "./components/Metrics";
import { useDropzone } from "react-dropzone";
import APIService from "./service/APIService";

function App() {
  const [hasFile, setHasFile] = useState(false);
  const [typeRate, setTypeRate] = useState(0)
  const [graphicStyle, setGraphicStyle] = useState("line");

  const onDrop = async (acceptedFiles) => {
    
    const fileWillBeSent = acceptedFiles[0]

    const formData = new FormData()
    formData.append('file', fileWillBeSent)

    const result = await APIService.post('/upload/sheet', formData)

    if(!!result){
      setHasFile([...result])
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone(
    {
      onDrop,
    });

  return (
    <div className="layout-content">
      <header>
        <Logo /> myStonks
      </header>
      <main>
        {hasFile ? (
          <>
            <div className="sheet-viewer-content">
              <Metrics
                types={[
                  {
                    name: "Churn Rate",
                  },
                  {
                    name: "MRR",
                  },
                ]}

                rateTypeRateHandler={(type) => {
                  setTypeRate(type)
                }}

                rateTypeCurrent={typeRate}
              />
              <Chart
                data={hasFile[typeRate].data}
                graphicStyle={graphicStyle.name}
              />
              <GraphicTypeContent
                types={[
                  {
                    name: "Line",
                  },
                  {
                    name: "Bar",
                  },
                  {
                    name: "Area",
                  },
                  {
                    name: "Scatter",
                  },
                ]}
                graphicHandler={(id ,style) => {
                  setGraphicStyle({
                    id,
                    name: style.toLowerCase()
                  })
                }}
                rateTypeCurrent={graphicStyle.id}
              />
            </div>
            <div className="sheet-controls-content">
              <button
                className="upload-button"
                title="Subir nova planilha"
                onClick={() => setHasFile(false)}
              >
                <Upload /> Subir nova planilha
              </button>
            </div>
          </>
        ) : (
          <div className="drop-file-area">
            <div {...getRootProps()} className="dropzone-style" title="Clique aqui ou arraste seu arquivo .xlsx ou .csv">
              <input {...getInputProps()} />
              {isDragActive ? (
                <>
                  <span className="arrow-moving"><ArrowDown /></span>
                  <br />
                  <p>Recebendo arquivo...</p>
                </>
              ) : (
                <>
                  <FileSheet />
                  <br />
                  <p>Clique aqui ou arraste seu arquivo .xlsx ou .csv</p>
                </>
              )}
            </div>
          </div>
        )}
      </main>
      <footer>
        <small>© 2024 - Alexandre Magno Dias</small>
        <small>alexandre.magno.wrk@gmail.com</small>
      </footer>
    </div>
  );
}

export default App;
