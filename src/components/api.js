
import React, { useEffect, useState } from 'react'

const Api = () => {

    const [text, setText] = useState('');
    const [load, setLoad] = useState(false);
    const [freq, setFreq] = useState([]);


    const handleSubmit = async() => {
        setLoad(true);

        try{
            const res = await fetch('https://www.terriblytinytales.com/test.txt');
            const data = await res.text();
            setText(data);

            const words = data.split(/\s+/);
            const frequency = {};
            words.forEach((word) => {
                frequency[word] = (frequency[word] || 0) + 1;
            })
            setFreq(frequency);

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