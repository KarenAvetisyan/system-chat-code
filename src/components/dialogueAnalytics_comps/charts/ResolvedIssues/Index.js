import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  // chart colors 
  const barColor = '#00CA2C';

  // options 
  export const options = {
    responsive: true,
    maintainAspectRatio: false,

    
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        yAlign: 'bottom',
        bodyFont: {
          size: 12,
         
        },
      }
    },
    scales: {
        y: {
            display: true,
            position: "left",
            ticks: {
              color: "rgba(127, 127, 127, 0.7)",
              font: {
                  size: 10,
                  family: "helvetica_regular",
              }
            } 
          },
          
        x: {
            grid: {
                lineWidth: 0
            },
            ticks: {
              color: "rgba(127, 127, 127, 0.7)",
              font: {
                  size: 10,
                  family: "helvetica_regular",
              }
            } 
          },
        
    },
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value'
    }
       
  };
  // datas 
  const labels = [];
  export const data = {
    labels,
    datasets: [
      {
        label: 'Решенные вопрос',
        data: [
          {id: '0:00', nested: {value: 0}},
          {id: '2:00', nested: {value: 0}},
          {id: '4:00', nested: {value: 0}},
          {id: '8:00', nested: {value: 5}},
          {id: '10:00', nested: {value: 2}},
          {id: '12:00', nested: {value: 9}},
          {id: '14:00', nested: {value: 5}},
          {id: '16:00', nested: {value: 2}},
          {id: '18:00', nested: {value: 1}},
          {id: '20:00', nested: {value: 0}},
          {id: '22:00', nested: {value: 10}},
          {id: '24:00', nested: {value: 0}},
          {id: null, nested: {value: 12}}
        ],
        position: 'top',
        pointRadius: 3,
        pointHoverRadius: 4,
        borderColor: barColor,
        borderWidth: 1,
        backgroundColor: barColor,
       
      },
     
    ],
    
  };

// Решенные вопрос
const ReslovedIssues = () => {
    return (
        <div className='single-chart'>
          <div className="chart-info">
                <h4>Решенные вопросы</h4>
                <div className="chart-global-stats">
                    <div className="stat col-50">
                        <span>30</span>
                        <p>Всего решенных вопросов</p>
                    </div>
                    <div className="stat col-50">
                        <span>30</span>
                        <p>Всего пользователей с решенными вопросами</p>
                    </div>
                </div>
            </div>

            <p className="chart-title">Количество решенных вопросов по часам  </p>
            <div className="chart-bar">
                <Line options={options} data={data}  />
            </div>
            
            <div className="bar-tip">
                <span style={{background: barColor}}></span>Новые вопросы
            </div>

        </div>
    );
}

export default ReslovedIssues;
