Details about the Components and Libraries used in the project.

=> The code provided a React component that fetches data from a URL, performs some word frequency calculations, and displays the results in a bar chart using the Recharts library. It also includes a button to export the data as a CSV file.

=> On submitting the button, it will show the bar chart and on exporting the button, it will export the data.

The components used in the code:

1.	React: The main library used to build the user interface and manage component state.
2.	useState: A React hook used to manage state variables in functional components.
3.	axios: A popular JavaScript library for making HTTP requests. It's used here to fetch data from the specified URL.
4.	BarChart: A component from the Recharts library that renders a bar chart.
5.	Bar: A child component of BarChart that represents a single bar in the chart.
6.	XAxis: A component that renders the X-axis (horizontal axis) of the chart.
7.	YAxis: A component that renders the Y-axis (vertical axis) of the chart.
8.	CartesianGrid: A component that renders a grid in the chart's background.
9.	Tooltip: A component that displays a tooltip when hovering over chart elements.
10.	Legend: A component that displays a legend for the chart.
11.	data: A state variable that holds the data for the bar chart.
12.	load: A state variable that indicates whether data is currently being fetched.
13.	dataFetch: An asynchronous function that fetches data from the specified URL, performs word frequency calculations, and updates the data state variable.
Inside the fetchData function, the fetched data is processed to count the frequency of words. The data is then sorted, sliced, and mapped to create an array of objects with the top 20 words and their counts.
14.	dataExport: A function that generates a CSV file based on the current data and triggers its download when the "Export" button is clicked.

The Libraries used in the code:

=> recharts: 

BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend: These are components from the recharts library, which provides a set of charting components for React applications. These components are used to create a bar chart visualization in the UI.

Overall, the code uses React, axios, and Recharts libraries to create a React component that fetches data, performs calculations, and displays the results in a bar chart, with an option to export the data as a CSV file.
