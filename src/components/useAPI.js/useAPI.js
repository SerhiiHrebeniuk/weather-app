import { useState, useEffect } from 'react';
import axios from 'axios';



const useAPI = () => {
    const API_KEY = '7a0de14ec6305d3a3ec40eb5b900dd0e';

    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('');
    const [state, setState] = useState('');
    const [loading, setLoading] = useState(false);

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=${API_KEY}`

    
    useEffect(() => {
        const getWeatherData = async () => {
            setLoading(true);
            const response = await axios.get(apiUrl);
            setApiData(response.data);
            setLoading(false);
        }; 
        getWeatherData();
    },[apiUrl]);

    const inputHandler = (e) => {
        setGetState(e.target.value)
    };

    const submitHandler = () => {
        setState(getState);
        setGetState('');
    };

    return {
        inputHandler,
        submitHandler,
        getState,
        apiData,
        loading
    }
}

export default useAPI;
