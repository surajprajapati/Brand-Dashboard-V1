/**** This file handles the chart specs generation part
   /* returning the chart specs corresponding data
   /* for the charts visualizations
****/

function stackedBarChart(data, chartWidth, chartHeight) {
    console.log("real_data :: ", data)
    console.log("=======================================");
    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
        "data": {
            "values":data
        },
        "padding":15,
        "width": 500,
        "mark": "bar",
        "config":{"scale": {
                    "barBandPaddingInner":0.2 }},
        "encoding": {
            "x": {
                "timeUnit": "month",
                "field": "date",
                "type": "ordinal",
                "axis": {
                    "title": "Month of the year"
                }
            },
            "y": {
                "aggregate": "sum",
                "field":"count",
                "type": "quantitative",
                "title": "Sum of Transaction"
            },
            "color": {
                "field": "series",
                "type": "nominal",
                "scale": {
                    "scheme": "category20c"
                },
                "legend": {
                    "title": "Transaction Type"
                }
            }
        }
    }
}