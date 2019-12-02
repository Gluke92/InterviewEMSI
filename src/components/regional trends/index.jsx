import React from "react";
import "./styles.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
export default class RegionalTrends extends React.Component {	
	render() {
        const series = [
            {
                name: "regional",
                data: [
                    {year: 2013, value: 11904},
                    {year: 2014, value: 12384},
                    {year: 2015, value: 12352},
                    {year: 2016, value: 12680},
                    {year: 2017, value: 12920},
                    {year: 2018, value: 13114}
                ]
            },
            {
                name: "state",
                data: [
                    {year: 2013, value: 13103},
                    {year: 2014, value: 13598},
                    {year: 2015, value: 13599},
                    {year: 2016, value: 13968},
                    {year: 2017, value: 14244},
                    {year: 2018, value: 14469}
                ]
            },
            {
                name: "nation",
                data: [
                    {year: 2013, value: 300651},
                    {year: 2014, value: 307024},
                    {year: 2015, value: 314154},
                    {year: 2016, value: 318998},
                    {year: 2017, value: 326205}
                ]
            }
        ]
             return (
               <LineChart width={300} height={400} data={series}>
                 <CartesianGrid stroke="#ccc" />
                 <XAxis dataKey="year" />
                 <YAxis dataKey="value"/>
                 <Tooltip />
                 <Legend />
                 {series.map(s => (
                     <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
                 ))}
               </LineChart>
             );
    }
}