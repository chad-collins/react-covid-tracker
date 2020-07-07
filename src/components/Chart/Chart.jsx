import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css'

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async ()=> {
            setDailyData(await fetchDailyData());   
        }
        fetchAPI();
    })

    const lineChart = (
        dailyData.length
         ? (
            <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: dailyData.map(({ deaths }) => deaths ),
                        label: 'Deaths',
                        borderColor: 'black',
                        backgroundColor: 'red',
                        fill: true,
                    },
                    {
                        data: dailyData.map(({ confirmed }) => confirmed ),
                        label: 'Infected',
                        borderColor: 'black',
                        backgroundColor: 'yellow',
                        fill: true,
                    },
                  ]
            }}
        
        />) : null

    );

    return (
        <div className={styles.container}>
            {lineChart}
            
        </div>
    )
}

export default Chart