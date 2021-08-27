import React, {Fragment} from 'react';
import styles from './MainPage.module.css';

import Header from '../Header/Header';
import Form from '../Form/Form';
import WeatherData from '../WeatherData/WeatherData';

import useAPI from '../useAPI.js/useAPI';

const MainPage = () => {

const { inputHandler, submitHandler, getState, apiData, loading } = useAPI();

if(loading) {
    <div>Loading...</div>
}

    return (
        <Fragment>
            <Header />
                <div className={styles.box}>
                    <Form  inputHandler={inputHandler} submitHandler={submitHandler} getState={getState} />
                    <WeatherData  apiData={apiData} />
                </div> 
        </Fragment>
    )
}

export default MainPage;
