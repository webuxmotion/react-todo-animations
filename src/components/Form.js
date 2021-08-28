import { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const { addNote } = useContext(FirebaseContext);

    const submitHandler = event => {
        event.preventDefault();

        if (value.trim()) {
            setValue('');
            addNote(value.trim())
                .then(() => {
                    alert.show('Note was created!', 'success');
                })
                .catch(() => {
                    alert.show('Something went wrong!', 'danger');
                })
        } else {
            alert.show('Enter text!', 'warning');
        }
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter note name"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}

export default Form;