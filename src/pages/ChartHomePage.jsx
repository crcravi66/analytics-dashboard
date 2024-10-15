import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import Header from "../component/Header";
import LineChart from '../component/LineChart';
import { cartTitles } from '../datas/data'


const ChartHomePages = () => {
    const { id } = useParams();
    const chart = cartTitles.find(check => check.id === parseInt(id, 10));

    const [seconds, setSeconds] = useState(0);
    const [viewCount, setViewCount] = useState(0);
    // const [viewTime, setViewTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => {
                const newCount = prev + 1;
                return newCount;
            });
        }, 1000);



        // const totalViewTime = localStorage.getItem('viewTime');
        // const newViewTime = totalViewTime ? parseInt(totalViewTime, 10) + totalViewTime : 1;

        const storedCount = localStorage.getItem('viewCount');
        const newCount = storedCount ? parseInt(storedCount, 10) + 1 : 1;

        // Update the state with the new count
        setViewCount(newCount);

        // Store the updated count back in localStorage
        localStorage.setItem('viewCount', newCount);

        return () => clearInterval(interval);

    }, [chart]);

    return (
        <div>
            <Header />
            <div style={{ padding: '1rem' }}>
                <h2>{chart.title}</h2>
                <p>Total view time: {seconds}</p>
                <p>View count: {viewCount} </p>
                <p>Average session time per viewing: {seconds}</p>
                <div style={{ width: "70% ", height: '400px', margin: "auto" }}>
                    <LineChart
                        data={chart.data}
                        options={chart.options}
                        chartType={chart.chartType}
                    />
                </div>
            </div>
        </div>
    )
}



export default ChartHomePages;