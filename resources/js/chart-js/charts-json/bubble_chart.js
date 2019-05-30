/**** This file handles the chart specs generation part
   /* returning the chart specs corresponding data
   /* for the charts visualizations
****/

function bubbleChart(data, chartWidth, chartHeight) {
    console.log("real_data :: ", data)
    console.log("=======================================");
    return {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "A bubble plot showing the correlation between rate and quantity for 187 countries in the world (modified from an example in Lisa Charlotte Rost's blog post 'One Chart, Twelve Charting Libraries' --http://lisacharlotterost.github.io/2016/05/17/one-chart-code/).",
    "width": chartWidth,
    "height": 200,
    "data": {
        "values": data
    },
    "transform": [
        {
            "calculate": "datum.quantity*datum.rate",
            "as": "totalamount"
        }
    ],
    "selection": {
        "view": {
            "type": "interval",
            "bind": "scales"
        }
    },
    "mark": "circle",
    "encoding": {
        "y": {
            "field": "rate",
            "type": "quantitative",
            "scale": {
                "zero": false
            },
            "axis": {
                "minExtent": 30
            }
        },
        "x": {
            "field": "quantity",
            "type": "quantitative",
            "scale": {
                "type": "log"
            }
        },
        "size": {
            "field": "totalamount",
            "type": "quantitative"
        },
        "color": {
            "field": "totalamount",
            "type": "quantitative",
            "scale": {
                "range": [
                    "purple",
                    "#ff0000",
                    "teal"
                ]
            }
        }
    }
}
}