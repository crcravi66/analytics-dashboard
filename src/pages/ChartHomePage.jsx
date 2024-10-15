import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import Header from "../component/Header";
import LineChart from '../component/LineChart';
import { cartTitles } from '../datas/data'


const ChartHomePages = () => {
    const { id } = useParams();
    const chart = cartTitles.find(check => check.id === parseInt(id, 10));

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => {
                const newCount = prev + 1;
                return newCount;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [chart]);

    return (
        <div>
            <Header />
            <div style={{ padding: '1rem' }}>
                <h2>{chart.title}</h2>
                <p>Total view time: {seconds}</p>
                <p>View count: 1 </p>
                <p>Average session time per viewing: {seconds}</p>
                <div style={{ height: '500px' }}>
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