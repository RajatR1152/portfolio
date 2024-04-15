'use client';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function SkillChart() {
    const [state, setState] = useState({
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: ['C', 'Python', 'HTML', 'CSS', 'JavaScript', 'Express.js', 'React.js', 'MongoDB', 'SQL', 'Next.js', 'Node.js'],
            },
        },
        series: [
            {
                name: 'Programming Languages',
                data: [80, 70, 90, 80, 85, 75, 85, 70, 65, 75, 80],
                color: 'red',
            },
        ],
    });

    return (

        <div className="container h-fit w-full md:w-5/12 rounded-xl absoulte">
            {/* <Chart
                options={state.options}
                series={state.series}
                type="radar"
            /> */}

        </div>

    );
}
