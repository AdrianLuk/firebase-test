import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [born, setBorn] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const doc = await addDoc(collection(db, 'users'), {
        first: firstName,
        last: lastName,
        born,
      });
      console.log('Document written with ID: ', doc.id);
      setFirstName('');
      setLastName('');
      setBorn('');
    } catch (error) {
      console.log('Error adding document: ', error);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p style={{ display: 'flex' }}>
          <label htmlFor='First'>First Name: </label>
          <input
            id='First'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>
        <p style={{ display: 'flex' }}>
          <label htmlFor='Last'>Last Name: </label>
          <input
            id='Last'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>
        <p style={{ display: 'flex' }}>
          <label htmlFor='born'>Born: </label>
          <input
            id='born'
            inputMode='numeric'
            type='text'
            pattern='[0-9]*'
            value={born}
            onChange={(e) => setBorn(e.target.value)}
          />
        </p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
