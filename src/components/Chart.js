import {Bar,Line,Pie} from 'react-chartjs-2'
import  { useState } from 'react';
import {Chart as ChartJS} from 'chart.js/auto'

function Chart(props) {
    const [userdata,setuserdata] = useState({
        yLabels : {
            1 : 'Novice', 2 : 'Advanced Beginner', 3 : 'Competent', 4 : 'Proficient', 5 : 'Expert',
        },
        labels: ['Python','Javascript','Java','Arduino','Machine Learning','Game Development'],
        
        datasets: [{
            label: 'Skill Level 1-5',
            data: [4.5,4,2,4,3,3],
            backgroundColor: [
                'rgba(255, 99, 132, .5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ]
        }]
    })
    return (
        <div class="chart">
        <Bar data={userdata} options={{indexAxis:'y',scales: {
            x: {
                max:5,
                ticks: {
                    callback: function(value, index, ticks) {
                        return userdata['yLabels'][value]
                    }
                }
            }
        }
    }}/>
    </div>
    );
  }
  
  export default Chart;
  