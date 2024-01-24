import ApexCharts from "react-apexcharts";

export default function Chart(props){

    const options = {
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enable: true
            }
        }
    }

    const series = [{
        data: props.data.map(data => {

            return {
                x: new Date(data.monthAndYear).getTime(),
                y: [data.amount]
            }
        })
    }]

    return (
        <section className="chart-content">
            <ApexCharts
                options={options}
                series={series}
                type={props.graphicStyle}
                width={640}
                height={450}
            />
        </section>
    )
}