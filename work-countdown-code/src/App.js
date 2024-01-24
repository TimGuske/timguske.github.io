import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const [startzeit, setStartzeit] = useState('7:55');
  const [pause, setPause] = useState('0:45');
  const [endzeit, setEndzeit] = useState(getCurrentTime());
  const [sollArbeitszeit, setSollArbeitszeit] = useState('7.60');
  const [ueberstunden, setUeberstunden] = useState(null);
  const [arbeitszeit, setArbeitszeit] = useState(null);

  const berechneDaten = () => {
    console.log('Call: berechne Daten');
    function uhrzeitZuDezimal(uhrzeit) {
      const [stunden, minuten] = uhrzeit.split(':').map(Number);
      return stunden + minuten / 60;
    }

    const currentTime = getCurrentTime();
    setEndzeit(currentTime);

    const startStunden = uhrzeitZuDezimal(startzeit);
    const endStunden = uhrzeitZuDezimal(endzeit);
    const pauseStunden = uhrzeitZuDezimal(pause);

    const arbeitszeitT = (endStunden - startStunden - pauseStunden).toFixed(2);
    const ueberstundenT = (arbeitszeitT - sollArbeitszeit).toFixed(2);

    setArbeitszeit(arbeitszeitT);
    setUeberstunden(ueberstundenT);
  }


  useEffect(() => {

    berechneDaten();

    const intervalId = setInterval(() => {
      berechneDaten();
    }, 10000);

    return () => clearInterval(intervalId);

  }, [startzeit, pause, endzeit]);


  function getCurrentTime() {
    console.log('Call: getCurrentTime');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return (
    <div>

      <Form>
        <Form.Group as={Row} className="mb-4" >
          <Form.Label column sm="2"></Form.Label>
          <Col sm="6"><h1>💻 Arbeitszeit Rechner</h1></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">Startzeit</Form.Label>
          <Col sm="6">
            <Form.Control
              size="sm"
              type="text"
              value={startzeit}
              onChange={(e) => setStartzeit(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">Pause</Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              size="sm"
              value={pause}
              onChange={(e) => setPause(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">Soll in h</Form.Label>
          <Col sm="6">
            <Form.Control
              className='bg-dark text-light'
              type="text"
              size="sm"
              value={sollArbeitszeit}
              aria-label="Disabled input example"
              disabled
              readOnly
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">Endzeit</Form.Label>
          <Col sm="6">
            <Form.Control
              className='bg-dark text-light'
              size="sm"
              type="text"
              value={endzeit}
              disabled
              readOnly
            />
          </Col>
        </Form.Group>      
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2"></Form.Label>
          <Col sm="8" style={{display:'flex'}}>
            <p style={{ marginRight: '10px' }}><b>{arbeitszeit}</b> / {sollArbeitszeit} Stunden</p>
            <p style={{ color: ueberstunden < 0 ? 'red' : 'green' }}>({ueberstunden} Überstunden)</p>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
