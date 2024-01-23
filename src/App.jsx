/* import { useState } from 'react' */
import { useState } from "react";
import "./App.css";
import Chart from "./components/Charts";
import GraphicTypeContent from "./components/GraphicTypeContent";
import { FileSheet, Logo, Upload } from "./components/Icons";
import Metrics from "./components/Metrics";
import { useDropzone } from "react-dropzone";
import APIService from "./service/APIService";

function App() {
  const [hasFile, setHasFile] = useState(false);

  const onDrop = async (acceptedFiles) => {
    // Handle the dropped files and send them to your API
    console.log(acceptedFiles);
    // Add logic to send files to API here

    const fileWillBeSent = acceptedFiles[0]

    const formData = new FormData()
    formData.append('file', fileWillBeSent)

    const result = await APIService.post('/upload/sheet', formData)
    console.log("Tipo", result.map(r => r))
    console.log("resulto", result)

    if(!!result){
      setHasFile([...result])
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone(
    {
      onDrop,
      /* accept: ['.xlsx', '.csv'] */
    });

  /* const dropzoneStyle = {
    border: "2px dashed #cccccc",
    borderRadius: "4px",
    padding: "50px",
    textAlign: "center",
    height: "90%"
  }; */

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
                    name: "MRR",
                  },
                  {
                    name: "Churn Rate",
                  },
                ]}
              />
              <Chart
                data={hasFile}
              />
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
          </>
        ) : (
          <div className="drop-file-area">
            <div {...getRootProps()} className="dropzone-style" title="Clique aqui ou arraste seu arquivo .xlsx ou .csv">
              <input {...getInputProps()} />
              {isDragActive ? (
                <>
                  <FileSheet />
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
