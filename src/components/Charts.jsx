import ApexCharts from "react-apexcharts";

export default function Chart(){

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
        data: [
            {
                x: new Date("Sun Jan 15 2017").getTime(),
                y: [150000000]
            },
            {
                x: new Date("Mon Jan 16 2017").getTime(),
                y: [160379978]
            },
            {
                x: new Date("Tue Jan 17 2017").getTime(),
                y: [170493749]
            },
            {
                x: new Date("Wed Jan 18 2017").getTime(),
                y: [160785250]
            },
            {
                x: new Date("Thu Jan 19 2017").getTime(),
                y: [167391904]
            },
            {
                x: new Date("Fri Jan 20 2017").getTime(),
                y: [161576838]
            },
            {
                x: new Date("Sat Jan 21 2017").getTime(),
                y: [161413854]
            },
            {
                x: new Date("Sun Jan 22 2017").getTime(),
                y: [152177211]
            },
            {
                x: new Date("Mon Jan 23 2017").getTime(),
                y: [140762210]
            },
            {
                x: new Date("Tue Jan 24 2017").getTime(),
                y: [144381072]
            },
        ]
    }]

    return (
        <section className="chart-content">
            <ApexCharts
                options={options}
                series={series}
                type="line"
                width={640}
                height={450}
            />
        </section>
    )
}