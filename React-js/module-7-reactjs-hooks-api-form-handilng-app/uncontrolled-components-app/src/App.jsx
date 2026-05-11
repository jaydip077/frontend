import { useMemo, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Row,
  Stack,
} from 'react-bootstrap';

import heroImg from './assets/hero.png';

function App() {
  const doctors = useMemo(
    () => [
      {
        id: 'dr-aman',
        name: 'Dr. Aman Verma',
        speciality: 'General Physician',
        image: heroImg,
        experience: '10+ yrs',
        rating: '4.8',
      },
      {
        id: 'dr-neha',
        name: 'Dr. Neha Sharma',
        speciality: 'Dermatologist',
        image: heroImg,
        experience: '7+ yrs',
        rating: '4.7',
      },
      {
        id: 'dr-rahul',
        name: 'Dr. Rahul Singh',
        speciality: 'Cardiologist',
        image: heroImg,
        experience: '12+ yrs',
        rating: '4.9',
      },
    ],
    []
  );

  const [form, setForm] = useState({
    patientName: '',
    email: '',
    phone: '',
    doctorId: doctors[0]?.id ?? '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    agree: true,
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = useMemo(() => {
    const errors = {};

    if (!form.patientName.trim()) errors.patientName = 'Patient name is required.';
    if (!form.email.trim()) errors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid email.';

    if (!form.phone.trim()) errors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(form.phone)) errors.phone = 'Phone must be 10 digits.';

    if (!form.appointmentDate) errors.appointmentDate = 'Date is required.';
    if (!form.appointmentTime) errors.appointmentTime = 'Time is required.';

    if (!form.reason.trim()) errors.reason = 'Reason is required.';

    if (!form.agree) errors.agree = 'You must agree before booking.';

    return errors;
  }, [form]);

  const errorsCount = Object.keys(validate).length;

  const setField = (key) => (e) => {
    const value = e?.target?.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
    setSubmitted(false);
  };

  const onBlur = (key) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const showError = (key) => touched[key] && validate[key];

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      patientName: true,
      email: true,
      phone: true,
      appointmentDate: true,
      appointmentTime: true,
      reason: true,
      agree: true,
      doctorId: true,
    });

    if (errorsCount === 0) {
      setSubmitted(true);
    }
  };

  const selectedDoctor = doctors.find((d) => d.id === form.doctorId) ?? doctors[0];

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Doctor Appointment</h1>
        <p className="page-subtitle mb-0">
          Book your visit in minutes. Choose a doctor and preferred time.
        </p>
      </div>

      <Card className="appointment-shell" body>
        <Row className="g-4 align-items-stretch">
          {/* Left: Form */}
          <Col xs={12} lg={7}>
            <Card className="appointment-form-card h-100" body>
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="patientName">
                      <Form.Label>Patient Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter patient name"
                        value={form.patientName}
                        onChange={setField('patientName')}
                        onBlur={onBlur('patientName')}
                        isInvalid={!!showError('patientName')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validate.patientName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={setField('email')}
                        onBlur={onBlur('email')}
                        isInvalid={!!showError('email')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validate.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        inputMode="numeric"
                        placeholder="10-digit phone"
                        value={form.phone}
                        onChange={setField('phone')}
                        onBlur={onBlur('phone')}
                        isInvalid={!!showError('phone')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validate.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="doctorId">
                      <Form.Label>Doctor</Form.Label>
                      <Form.Select
                        value={form.doctorId}
                        onChange={setField('doctorId')}
                        onBlur={onBlur('doctorId')}
                        aria-label="Select doctor"
                      >
                        {doctors.map((d) => (
                          <option value={d.id} key={d.id}>
                            {d.name} • {d.speciality}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="appointmentDate">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        value={form.appointmentDate}
                        onChange={setField('appointmentDate')}
                        onBlur={onBlur('appointmentDate')}
                        isInvalid={!!showError('appointmentDate')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validate.appointmentDate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="appointmentTime">
                      <Form.Label>Time</Form.Label>
                      <Form.Control
                        type="time"
                        value={form.appointmentTime}
                        onChange={setField('appointmentTime')}
                        onBlur={onBlur('appointmentTime')}
                        isInvalid={!!showError('appointmentTime')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validate.appointmentTime}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="reason">
                      <Form.Label>Reason for Visit</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Describe your symptoms or reason"
                        value={form.reason}
                        onChange={setField('reason')}
                        onBlur={onBlur('reason')}
                        isInvalid={!!showError('reason')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validate.reason}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="agree">
                      <Form.Check
                        type="checkbox"
                        label="I agree to the clinic terms and acknowledge this is a request for appointment."
                        checked={form.agree}
                        onChange={setField('agree')}
                        onBlur={onBlur('agree')}
                        isInvalid={!!showError('agree')}
                        className="agree-check"
                      />
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {validate.agree}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Stack direction="horizontal" gap={2} className="mt-2">
                      <Button variant="primary" type="submit" className="submit-btn">
                        Book Appointment
                      </Button>
                      <Button
                        variant="outline-secondary"
                        type="button"
                        className="reset-btn"
                        onClick={() => {
                          setForm({
                            patientName: '',
                            email: '',
                            phone: '',
                            doctorId: doctors[0]?.id ?? '',
                            appointmentDate: '',
                            appointmentTime: '',
                            reason: '',
                            agree: true,
                          });
                          setTouched({});
                          setSubmitted(false);
                        }}
                      >
                        Reset
                      </Button>
                    </Stack>

                    {submitted && errorsCount === 0 ? (
                      <div className="success-box mt-3" role="status" aria-live="polite">
                        <strong>Appointment requested!</strong>
                        <div className="mt-1 text-muted">
                          {selectedDoctor?.name} • {form.appointmentDate} at {form.appointmentTime}
                        </div>
                      </div>
                    ) : null}
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>

          {/* Right: Images */}
          <Col xs={12} lg={5}>
            <div className="appointment-images">
              <div className="images-header">
                <h2 className="images-title">Meet Your Doctor</h2>
                <p className="images-subtitle mb-0">
                  Selected: <span className="fw-semibold">{selectedDoctor?.name}</span>
                </p>
              </div>

              <Card className="doctor-hero-card">
                <div className="doctor-hero">
                  <Image
                    src={selectedDoctor?.image}
                    alt={selectedDoctor?.name}
                    fluid
                    className="doctor-hero-img"
                  />
                </div>
                <Card.Body>
                  <div className="doctor-meta">
                    <div className="doctor-name">{selectedDoctor?.name}</div>
                    <div className="doctor-speciality">{selectedDoctor?.speciality}</div>
                    <div className="doctor-stats mt-2">
                      <span className="stat">{selectedDoctor?.experience}</span>
                      <span className="stat">★ {selectedDoctor?.rating}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <div className="doctor-grid mt-3">
                {doctors.map((d) => {
                  const active = d.id === form.doctorId;
                  return (
                    <Card
                      key={d.id}
                      className={active ? 'doctor-mini-card active' : 'doctor-mini-card'}
                      role="button"
                      tabIndex={0}
                      onClick={() => setForm((prev) => ({ ...prev, doctorId: d.id }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setForm((prev) => ({ ...prev, doctorId: d.id }));
                        }
                      }}
                      aria-pressed={active}
                    >
                      <div className="doctor-mini-img-wrap">
                        <Image src={d.image} alt={d.name} fluid className="doctor-mini-img" />
                      </div>
                      <Card.Body className="p-3">
                        <div className="doctor-mini-name">{d.name}</div>
                        <div className="doctor-mini-spec">{d.speciality}</div>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>

              <div className="images-note mt-3 text-muted">
                Tip: choose a doctor card to auto-update the right preview.
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;

