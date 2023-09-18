import { useEffect, useState } from "react";
import axios from "axios";
import DataCard from "./DataCard";

const FetchData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const apiURL = 'https://ipapi.co/json/';

    useEffect(() => {
        axios.get(apiURL)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error.message)
            })
    }, [])

    console.log(data)

    return (
        <>
            {error && <p>{error}</p>}
            {!error && <DataCard data={data} />
            }
        </>
    );

}

export default FetchData;