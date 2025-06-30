import { useState } from 'react';
import { PageWrapper } from '../../Components';
import './hajjForm.css';
import './hajjForm.css';

const HajjForm = () => {
    const [packageType, setPackageType] = useState('');
    const [maktabType, setMaktabType] = useState('');
    const [roomType, setRoomType] = useState('');
    const [totalPex, setTotalPex] = useState(1);
    const [people, setPeople] = useState([{ name: '', dob: '', passport: '', nic: '', phone: '' }]);

    const handleTotalPexChange = (e) => {
        const value = parseInt(e.target.value);
        setTotalPex(value);
        const updatedPeople = Array.from({ length: value }, (_, i) => people[i] || { name: '', dob: '', passport: '', nic: '', phone: '' });
        setPeople(updatedPeople);
    };

    const handlePersonChange = (index, field, value) => {
        const updated = [...people];
        updated[index][field] = value;
        setPeople(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        people[0] = {
            ...people[0], packageType,
            maktabType,
            roomType,
            totalPex,
        }
        const payload = {
            people,
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzosqt_6hSLYsQiyQQMs-WRKQo_FJ9pj13MQDWfekAXJp8Rk4zFs-bx5xzkU-mMN3qE/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                body: JSON.stringify(payload),
            });
            console.info('response', response)

            const result = await response.json();
            console.log('✅ Form submitted:', result);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('❌ Submission error:', error);
            alert('Something went wrong!');
        }
    };

    return (
        <div className='hajj-form-main bg-gradient'>
            <PageWrapper
                title={'Hajj Registration Form'}
                moveTo={'Home'}
                navigatePath={'/'}
                subtitle={'Form'}
            />

            <div className='hajj-form-container section-padding'>


                <form onSubmit={handleSubmit} className='hajj-form-card'>
                    <h3 className='form-title'>Booking Form</h3>

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='form-group'>
                                    <label>Package Type:</label>
                                    <select
                                        value={packageType}
                                        onChange={(e) => setPackageType(e.target.value)}
                                        className='form-control'
                                        required
                                    >
                                        <option value=''>Select Package</option>
                                        <option value='10 Days'>10 Days</option>
                                        <option value='15 Days'>15 Days</option>
                                        <option value='Premium'>30 Days</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='form-group'>
                                    <label>Maktab Type:</label>
                                    <select
                                        value={maktabType}
                                        onChange={(e) => setMaktabType(e.target.value)}
                                        className='form-control'
                                        required
                                    >
                                        <option value=''>Select Maktab</option>
                                        <option value='A'>A</option>
                                        <option value='B'>B</option>
                                        <option value='C'>C</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='form-group'>
                                    <label>Room Type:</label>
                                    <select
                                        value={roomType}
                                        onChange={(e) => setRoomType(e.target.value)}
                                        className='form-control'
                                        required
                                    >
                                        <option value=''>Select Room</option>
                                        <option value='Double'>Double</option>
                                        <option value='Triple'>Triple</option>
                                        <option value='Quad'>Quad</option>
                                        <option value='Sharing'>Sharing</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='form-group'>
                                    <label>Total PEX:</label>
                                    <input
                                        type='number'
                                        value={totalPex}
                                        min='1'
                                        onChange={handleTotalPexChange}
                                        className='form-control'
                                        placeholder='Total number of people'
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='form-divider' />

                    {people.map((person, index) => (
                        <div key={index} className='person-section'>
                            <h4>Person {index + 1}</h4>

                            <div className='form-group'>
                                <label>Name:</label>
                                <input
                                    type='text'
                                    value={person.name}
                                    onChange={(e) => handlePersonChange(index, 'name', e.target.value)}
                                    className='form-control'
                                    placeholder='Full Name'
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label>Date of Birth:</label>
                                <input
                                    type='date'
                                    value={person.dob}
                                    onChange={(e) => handlePersonChange(index, 'dob', e.target.value)}
                                    className='form-control'
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label>Passport No:</label>
                                <input
                                    type='text'
                                    value={person.passport}
                                    onChange={(e) => handlePersonChange(index, 'passport', e.target.value)}
                                    className='form-control'
                                    placeholder='Passport Number'
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label>NIC No:</label>
                                <input
                                    type='text'
                                    value={person.nic}
                                    onChange={(e) => handlePersonChange(index, 'nic', e.target.value)}
                                    className='form-control'
                                    placeholder='NIC Number'
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label>Phone:</label>
                                <input
                                    type='tel'
                                    value={person.phone}
                                    onChange={(e) => handlePersonChange(index, 'phone', e.target.value)}
                                    className='form-control'
                                    placeholder='Phone Number'
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <div className="reg-form-btn">
                        <button type='submit' className='submit-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HajjForm;
