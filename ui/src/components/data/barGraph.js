import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

// export const Data = () => {
//     return(
//         <div>
//             <h1>Data</h1>
//         </div>
//     )
// }

export const BarGraph = () => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setVehicleData(data))
      .catch((err) => console.log(err));
  }, []);

  const combineDates = [];
  const numberOFVehicles = [];

  const date = vehicleData.map((data) => {
    const newDay = data.date.slice(0, 10);
    if (!combineDates.includes(newDay)) {
      combineDates.push(newDay);
    }
    return;
  });

  for (let i = 0; i < combineDates.length; i++) {
    let count = 0;
    for (let j = 0; j < vehicleData.length; j++) {
      if (combineDates[i] === vehicleData[j].date.slice(0, 10)) {
        count++;
      }
    }
    numberOFVehicles.push(count);
  }

  console.log(numberOFVehicles);

  const chartData = {
    chart: {
      type: "line",
      id: "apexchart-example",
    //   width: '25%',
    //   height: '25%'
      //   foreColor: theme.palette.primary.main
    },
    xaxis: {
      categories: combineDates,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        // colorStops: []
      },
    },
  
 
    legend: {
      // position: '',
      width: 400,
      // position: 'top',
    },
    series: [
      {
        name: "Number of Vehicles",
        type: "column",
        data: numberOFVehicles,
      },
      {
        name: "Time Traveled",
        type: "line",
        data: [10],
      },
    ],
  };

  return <ReactApexChart options={chartData} series={chartData.series} />;
};
