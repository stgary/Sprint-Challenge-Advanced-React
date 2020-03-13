import React from 'react';
import { useForm } from './hooks/useForm';

export default function SignupForm() {
    const [values, handleChanges] = useForm('user', {
      firstName: '',
      lastName: ''
    });

    return (
<div className="App">
      <form>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="bill"
            onChange={e => handleChanges(e)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="luo"
            onChange={e => handleChanges(e)}
          />
        </div>
        <button id="submit" name="submit" type="submit">Submit</button>
      </form>
    </div>
    );
  }
  