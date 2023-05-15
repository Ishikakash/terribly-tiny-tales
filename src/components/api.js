
import React, { useEffect, useState } from 'react'
import axios from "axios";
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Api = () => {

    const [data, setData] = useState('');
    const [load, setLoad] = useState(false);

    const dataFetch = async() => {
        setLoad(true);

        try {
            const api = await axios.get(
              "https://www.terriblytinytales.com/test.txt"
            );

            const words = api.data
            .trim()
            .replace(/[^\w\s]/gi, "")
            .toLowerCase()
            .split(/\s+/)
            .reduce(function (map, word) {
              map[word] = (map[word] || 0) + 1;
              return map;
            }, {});

            const dataSort = Object.entries(words)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 20)
            .map(([word, count]) => ({ word, count }));
            setData(dataSort);

        } catch (err) {
            console.log("fetching data", err);
        }
        setLoad(false);
    }


    return (
        <div>
            <button onClick={handleSubmit} disabled={load} >Submit</button>
            {load?(<p>Loading...</p>):(
            <div>
            <pre>{text}</pre>
            <ul>
                {Object.entries(freq).map(([word, freq]) => (
                    <li key={word}>
                        {word}:{freq}
                    </li>
                ))}
            </ul>
        </div>
    )}
    </div>
    );
};

export default Api;