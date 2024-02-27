import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Alert } from "./Alert";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            display: "-ms-flexbox",
          }}
        >
          <h1>Lab 1 Markov </h1>
          <h2>Bootstrap button</h2>
          <Button variant="info">Info</Button>
          <h2>Bootstrap progress bar</h2>
          <ProgressBar now={90} />
          <h2>Custom component</h2>
          <Alert heading="test heading" closable>
            test descriadsfption
          </Alert>
        </div>
      </div>
    </>
  );
}

export default App;
