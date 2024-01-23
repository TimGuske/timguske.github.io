import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {

  const [startzeit, setStartzeit] = useState('7:55');
  const [pause, setPause] = useState('0:30');
  const [endzeit, setEndzeit] = useState(getCurrentTime());
  const [sollArbeitszeit, setSollArbeitszeit] = useState('7.6');
  const [ueberstunden, setUeberstunden] = useState(null);
  const [arbeitszeit, setArbeitszeit] = useState(null);
  const [useRealTime, setUseRealTime] = useState(true);

  const berechneDaten = () => {
    console.log('Call: berechne Daten');
    function uhrzeitZuDezimal(uhrzeit) {
      const [stunden, minuten] = uhrzeit.split(':').map(Number);
      return stunden + minuten / 60;
    }

   

    const startStunden = uhrzeitZuDezimal(startzeit);
    const endStunden = uhrzeitZuDezimal(endzeit);
    const pauseStunden = uhrzeitZuDezimal(pause);

    const arbeitszeitT = (endStunden - startStunden - pauseStunden).toFixed(2);
    const ueberstundenT = (arbeitszeit - sollArbeitszeit).toFixed(2);

    setArbeitszeit(arbeitszeitT);
    setUeberstunden(ueberstundenT);
    console.log(arbeitszeitT, ueberstundenT);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Überstunden berechnen und in den State speichern
  };

  useEffect(() => {
    console.log('Call: UseEffect');
    berechneDaten();

    if (useRealTime) {
      const intervalId = setInterval(() => {
        console.log('Call: SetInterval');

        const currentTime = getCurrentTime();
        setEndzeit(currentTime);
        
        berechneDaten();
      }, 10000);

      return () => clearInterval(intervalId);
    }
    
  }, [startzeit, pause, endzeit, useRealTime]);

  function getCurrentTime() {
    console.log('Call: getCurrentTime');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return (
    <div>

      <Form onSubmit={handleSubmit}>
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
              size="sm"
              type="text"
              value={endzeit}
              onChange={(e) => setEndzeit(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-5" >
          <Form.Label column sm="2"></Form.Label>
          <Col sm="3">
            <Button variant='secondary' type='submit'>Berechne Überstunden</Button>
          </Col>
          <Col sm="4">
            <Form.Check
              className='mt-2'
              type="switch"
              id="custom-switch"
              label="RealTime"
              checked={useRealTime}
              onChange={(e) => setUseRealTime(e.target.checked)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2"></Form.Label>
          <Col sm="8">
            <h3 style={{ color: ueberstunden < 0 ? 'red' : 'green' }}>
              {ueberstunden} Stunden (Arbeitszeit: {arbeitszeit}h)
            </h3>
            {useRealTime ? (<p>RealTime aktiv</p>) : (<p>keine Berechnung aktiv </p>)}
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
