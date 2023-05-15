
import React, { useState } from 'react'
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Api = () => {

    const [data, setData] = useState([]);
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


    const dataExport = () => {
        const csv = "data:text/csv;charset=utf-8," + data.map((d) => `${d.word},${d.count}`).join("\n");
        const encodedUri = encodeURI(csv);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "histogram_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div>
            <h1 style={{color: "gray"}}><b><center>TERRIBLY {" "} 
            <strong style={{color: "black"}}>TINY TALES </strong>
                ASSIGNMENT
            </center></b></h1>
            <center>
            <button onClick={dataFetch} disabled={load} style={{backgroundColor:"#8A8AFF", margin: "8px 6px"}}>
                {load ? "Loading..." : "Submit"}
            </button></center><br/><br/>
            {data.length > 0 && (
            <div>
            <center>
            <BarChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="word" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#FF647F" />
            </BarChart>
            <center> <br/>
            <button onClick={dataExport} style={{backgroundColor:"#8A8AFF", margin: "8px 6px"}} >Export</button>
            </center><br/>
            </center>
        </div>
    )}
    </div>
    );
};

export default Api;

// => This code is going to fetch the text after clicking on submit button
// import React, { useState } from "react";
// function App() {

//   const [chat, setChat] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("https://www.terriblytinytales.com/test.txt");
//     const text = await res.text();
//     setChat(text);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <button type="submit">Submit</button>
//       </form>
//       <div><center>{chat}</center></div>
//     </div>
//   );
// }

// export default App;
