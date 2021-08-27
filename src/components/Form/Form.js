import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({inputHandler, submitHandler, getState}) => {
    
    return (
        <form>
            <input 
            className={styles.input}
            type='text'
            placeholder='Search for location'
            required
            value={getState}
            onChange={inputHandler}
            />
            <button className={styles.button} onClick={submitHandler}>
                SERACH
            </button>
        </form>
    )
}

Form.propTypes = {
    getState: PropTypes.string.isRequired,
    inputHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired,
}

export default Form;
