import React from 'react';
import styles from './WeatherData.module.css';

const WeatherData = ({apiData}) => {


    const iconUrl = `http://openweathermap.org/img/w/${apiData.list[0].weather[0].icon}.png`

    const kelvinToCelsius = (k) => {
        return (k - 273.15).toFixed(2);
    }

    console.log(apiData)
    return (
        <div className={styles.container}>
                <div className={styles.image}>
                    <div className={styles.back}>
                        <div className={styles.location}>
                            <div className={styles.imglocation}></div>
                            <div className={styles.namelocation}>{apiData.city.name},{apiData.city.country}</div>
                        </div> 

                        <div className={styles.temp}>
                            <span>Current Temp: </span>
                            {kelvinToCelsius(apiData.list[0].main.temp)}&deg; C <br/>
                            <span>Feels like: </span>
                            {kelvinToCelsius(apiData.list[0].main.feels_like)}&deg; C
                        </div>
                        <div className={styles.weather}>
                            <img src={iconUrl}  alt='Icon' /> 
                            <span>{apiData.list[0].weather[0].main}</span>
                            <div className={styles.weatherInfo}>
                            <span>Humidity: {apiData.list[0].main.humidity}%</span>  <span>Wind: {apiData.list[0].wind.speed} m/s</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.description}>
                        <h1>Your Location: {apiData.city.name}</h1>
                        <h3>Date: {apiData.list[0].dt_txt}</h3>
                        <h3>Current Temp: {kelvinToCelsius(apiData.list[0].main.feels_like)}&deg; C</h3>
                        <h3>Humidity: {apiData.list[0].main.humidity}%</h3>
                        <h3>Wind: {apiData.list[0].wind.speed} m/s</h3>
                    </div>
                    <div className={styles.daysItem}>
                       <div className={styles.daysItemCard}>
                            <p>Current Temp: {kelvinToCelsius(apiData.list[1].main.temp)}&deg; C </p>
                            <p>Feels like: {kelvinToCelsius(apiData.list[1].main.feels_like)}&deg; C</p>
                            <p><img src={`http://openweathermap.org/img/w/${apiData.list[1].weather[0].icon}.png`}  alt='Icon' /></p>
                            <span>{apiData.list[1].weather[0].main}</span>
                       </div>
                       <div className={styles.daysItemCard}>
                       <p>Current Temp: {kelvinToCelsius(apiData.list[14].main.temp)}&deg; C </p>
                            <p>Feels like: {kelvinToCelsius(apiData.list[14].main.feels_like)}&deg; C</p>
                            <p><img src={`http://openweathermap.org/img/w/${apiData.list[14].weather[0].icon}.png`}  alt='Icon' /></p>
                            <span>{apiData.list[14].weather[0].main}</span>
                       </div>
                       <div className={styles.daysItemCard}>
                       <p>Current Temp: {kelvinToCelsius(apiData.list[22].main.temp)}&deg; C </p>
                            <p>Feels like: {kelvinToCelsius(apiData.list[22].main.feels_like)}&deg; C</p>
                            <p><img src={`http://openweathermap.org/img/w/${apiData.list[22].weather[0].icon}.png`}  alt='Icon' /></p>
                            <span>{apiData.list[22].weather[0].main}</span>
                       </div>
                       <div className={styles.daysItemCard}>
                       <p>Current Temp: {kelvinToCelsius(apiData.list[30].main.temp)}&deg; C </p>
                            <p>Feels like: {kelvinToCelsius(apiData.list[30].main.feels_like)}&deg; C</p>
                            <p><img src={`http://openweathermap.org/img/w/${apiData.list[30].weather[0].icon}.png`}  alt='Icon' /></p>
                            <span>{apiData.list[30].weather[0].main}</span>
                       </div>
                       <div className={styles.daysItemCard}>
                       <p>Current Temp: {kelvinToCelsius(apiData.list[38].main.temp)}&deg; C </p>
                            <p>Feels like: {kelvinToCelsius(apiData.list[38].main.feels_like)}&deg; C</p>
                            <p><img src={`http://openweathermap.org/img/w/${apiData.list[38].weather[0].icon}.png`}  alt='Icon' /></p>
                            <span>{apiData.list[38].weather[0].main}</span>
                       </div>
                    </div>
                </div>
        </div>
    )
}

export default WeatherData;
