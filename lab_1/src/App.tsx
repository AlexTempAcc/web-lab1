import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {

  return (
    <>
    <h1>Lab 1 Markov</h1>
    <Button variant="info">Info</Button>{' '}
    <ProgressBar now={90} />
    </>
  )
}

export default App
