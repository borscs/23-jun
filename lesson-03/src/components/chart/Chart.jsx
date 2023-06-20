import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {
    let dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const amountSum = dataPointsValue.reduce((sum, dataPoint) => sum + dataPoint);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={amountSum}
                    label={dataPoint.label}
                />
                ))
            }
        </div>
    )

};


export default Chart;