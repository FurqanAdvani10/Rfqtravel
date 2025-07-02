import { useState } from 'react';
import { PageWrapper } from '../../Components';
import './hajjForm.css';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HajjForm = () => {
  const [packageType, setPackageType] = useState('');
  const [maktabType, setMaktabType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [totalPex, setTotalPex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([
    { name: '', dob: '', email: '', nic: '', phone: '', country: '' },
  ]);

  const handleTotalPexChange = (e) => {
    const value = parseInt(e.target.value);
    setTotalPex(value);
    const updatedPeople = Array.from({ length: value }, (_, i) =>
      people[i] || { name: '', dob: '', email: '', nic: '', phone: '', country: '' }
    );
    setPeople(updatedPeople);
  };

  const handlePersonChange = (index, field, value) => {
    const updated = [...people];
    updated[index][field] = value;
    setPeople(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      packageType,
      maktabType,
      roomType,
      totalPex,
      people,
      timestamp: new Date().toISOString(),
    };

    try {
      setLoading(true);
      const proxyUrl = 'http://localhost:8080/';
      const targetUrl = 'https://script.google.com/macros/s/AKfycbwifr1oKRXqZls7o_KgagqcUsKRXbZ5DV25pCOzAUXeIbIdYMgd5I1su1RKdo3bAmTW/exec';

      const response = await fetch(`${targetUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('✅ Response from Google Apps Script:', result);

      toast.success('🟢 Your registration has been submitted. You will be contacted soon.');

      setPackageType('');
      setMaktabType('');
      setRoomType('');
      setTotalPex(1);
      setPeople([{ name: '', dob: '', email: '', nic: '', phone: '', country: '' }]);
    } catch (error) {
      console.error('❌ Error submitting data:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageWrapper
        title={'Hajj Registration Form'}
        moveTo={'Home'}
        navigatePath={'/'}
        subtitle={'Form'}
      />

    <div className='hajj-form-main bg-gradient'>
      <div className='hajj-form-container section-padding'>
        <motion.form
          onSubmit={handleSubmit}
          className='hajj-form-card'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h3 className='form-title'>Booking Details</h3>

          <div className='form-grid'>
            <div className='form-group'>
              <label>Package Type:</label>
              <select value={packageType} onChange={(e) => setPackageType(e.target.value)} className='form-control' required>
                <option value=''>Select Package</option>
                <option value='12 Days'>12 Days</option>
                <option value='15 Days'>15 Days</option>
                <option value='17 Days'>17 Days</option>
                <option value='30 Days'>30 Days</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Maktab Type:</label>
              <select value={maktabType} onChange={(e) => setMaktabType(e.target.value)} className='form-control' required>
                <option value=''>Select Maktab</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='D'>D</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Room Type:</label>
              <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className='form-control' required>
                <option value=''>Select Room</option>
                <option value='Double'>Double</option>
                <option value='Triple'>Triple</option>
                <option value='Quad'>Quad</option>
                <option value='Sharing'>Sharing</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Total PEX:</label>
              <input type='number' value={totalPex} min='1' onChange={handleTotalPexChange} className='form-control' placeholder='Total number of people' required />
            </div>
          </div>

          <hr className='form-divider' />

          {people.map((person, index) => (
            <div key={index} className='person-section'>
              <h4>{index === 0 ? 'Main Applicant (Person 1)' : `Person ${index + 1}`}</h4>
              <div className='form-grid'>
                <div className='form-group'>
                  <label>Name:</label>
                  <input type='text' value={person.name} onChange={(e) => handlePersonChange(index, 'name', e.target.value)} className='form-control' placeholder='Full Name' required />
                </div>
                <div className='form-group'>
                  <label>Date of Birth:</label>
                  <input type='date' value={person.dob} onChange={(e) => handlePersonChange(index, 'dob', e.target.value)} className='form-control' required />
                </div>
                {index === 0 && (
                  <>
                    <div className='form-group'>
                      <label>Email:</label>
                      <input type='email' value={person.email} onChange={(e) => handlePersonChange(index, 'email', e.target.value)} className='form-control' placeholder='Email Address' required />
                    </div>
                    <div className='form-group'>
                      <label>Phone:</label>
                      <input type='tel' value={person.phone} onChange={(e) => handlePersonChange(index, 'phone', e.target.value)} className='form-control' placeholder='Phone Number' required />
                    </div>
                  </>
                )}
                <div className='form-group'>
                  <label>Country:</label>
                  <input type='text' value={person.country} onChange={(e) => handlePersonChange(index, 'country', e.target.value)} className='form-control' placeholder='Country' required />
                </div>
                <div className='form-group'>
                  <label>NIC No:</label>
                  <input type='text' value={person.nic} onChange={(e) => handlePersonChange(index, 'nic', e.target.value)} className='form-control' placeholder='NIC Number' required />
                </div>
              </div>
            </div>
          ))}

          <div className='reg-form-btn'>
            <button type='submit' className='submit-btn' disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
    </>
  );
};

export default HajjForm;
