import React, { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roomType: [],
    checkInDate: '',
    adults: 1,
    children: 0,
  });

  const roomOptions = [
    'ห้องมาตรฐานสำหรับสระน้ำ',
    'ห้องดีลักซ์เตียงใหญ่',
    'Deluxe Lanna Room',
    'ห้องมาตรฐานเตียงแฝด',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        roomType: checked
          ? [...prev.roomType, value]
          : prev.roomType.filter((room) => room !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleGuestCount = (type, guestType) => {
    setFormData((prev) => ({
      ...prev,
      [guestType]: Math.max(0, prev[guestType] + (type === 'increment' ? 1 : -1)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ข้อมูลการจองถูกส่งเรียบร้อยแล้ว');
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h1 style={styles.title}>WE Terminal Hotel</h1>
      <div style={styles.section}>
        <h2>ข้อมูลการติดต่อ</h2>
        <input
          type="text"
          name="fullName"
          placeholder="ชื่อเต็ม"
          value={formData.fullName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="อีเมล"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="เบอร์"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.section}>
        <h2>ประเภทห้อง</h2>
        {roomOptions.map((room, index) => (
          <label key={index} style={styles.checkbox}>
            <input
              type="checkbox"
              value={room}
              checked={formData.roomType.includes(room)}
              onChange={handleChange}
            />
            {room}
          </label>
        ))}
      </div>

      <div style={styles.section}>
        <h2>กรอกวันที่เช็กอิน</h2>
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          style={styles.input}
        />
        <div style={styles.guestCounter}>
          <label>
            ผู้ใหญ่:
            <button type="button" onClick={() => handleGuestCount('decrement', 'adults')}>-</button>
            {formData.adults}
            <button type="button" onClick={() => handleGuestCount('increment', 'adults')}>+</button>
          </label>
          <label>
            เด็ก:
            <button type="button" onClick={() => handleGuestCount('decrement', 'children')}>-</button>
            {formData.children}
            <button type="button" onClick={() => handleGuestCount('increment', 'children')}>+</button>
          </label>
        </div>
      </div>

      <div style={styles.section}>
        <h2>รายละเอียดห้องพัก</h2>
        <p>ห้องพักทั้งหมด 3 คืน มีสิ่งอำนวยความสะดวกครบครัน...</p>
      </div>

      <button type="submit" style={styles.submitButton}>
        ยืนยันการจอง
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
  },
  section: {
    marginBottom: '20px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  checkbox: {
    display: 'block',
    marginBottom: '10px',
  },
  guestCounter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  submitButton: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BookingForm;
