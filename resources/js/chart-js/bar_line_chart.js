/**** This file handles the chart specs generation part
   /* returning the chart specs corresponding data
   /* for the charts visualizations
****/

function spendBarLineChart(data, chartWidth,chartHeight) {
    console.log("real_data :: ", data)
    console.log("=======================================");
    return {
    "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
    "description": "A dual axis chart, created by setting y's scale resolution to `\"independent\"`",
    "width": chartWidth-200,
    "height": chartHeight,
    "padding":4,
    "data": {
        "values": data
    },
    "transform": [
        {
            "aggregate": [
                {
                    "op": "sum",
                    "field": "amount",
                    "as": "amountsum"
                },{
                    "op": "count",
                    "field": "posted_date",
                    "as": "date_count"
                }
            ],
             
            "groupby": [
                "posted_date"
            ]
        }
    ],
    "encoding": {
        "x": {
            "field": "posted_date",
            "axis": {
                "format": "%b-%d",
                "title": null
            },
            "type": "nominal",
            "timeUnit": "date"
        }
    },
    "layer": [
        {
            "mark": {
                "type": "bar",
                "color": "#CCFFFF",
                "opacity": 0.9
            },
            "encoding": {
                "y": {
                    "field": "amountsum",
                    "axis": {
                        "title": "Total Order" 
                    }
                }
            }
        },
        {
            "mark": {
                "stroke": "#32CD32",
                "type": "line",
                "interpolate": "monotone"
            },
            "encoding": {
                "y": {
                    "field": "date_count",
                    "type": "quantitative",
                    "axis": {
                        "title": "Sales"
                    }
                }
            }
        }
    ],
    "resolve": {
        "scale": {
            "y": "independent"
        }
    }
}
}