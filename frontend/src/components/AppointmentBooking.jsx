// PlumbingBookingForm.js
import { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Modal, Alert } from 'react-bootstrap';

function PlumbingBookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', description: '', photo: null });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    console.log("file change");
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log("photo");
    console.log(photo);
    if (photo) formData.append('photo', photo);

    try {
      const res = await axios.post(`${API_URL}/appointments`,formData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.status === 201) {
        setShowModal(true);
        setForm({ name: '', phone: '', date: '', time: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed.');
    }
  };

  return (
    <Container className="p-4">
      <h2>Plumbing Appointment Booking</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="phone" value={form.phone} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" value={form.date} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" name="time" value={form.time} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" value={form.description} onChange={handleChange} required as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Photo (Optional)</Form.Label>
          <Form.Control type="file" accept="image/*" name="photo" onChange={handleFileChange} />
        </Form.Group>
        
        <Button type="submit">Book Appointment</Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for booking. We’ll see you on <strong>{form.date}</strong> at <strong>{form.time}</strong>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default PlumbingBookingForm;
