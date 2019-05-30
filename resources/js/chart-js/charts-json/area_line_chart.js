/**** This file handles the chart specs generation part
   /* returning the chart specs corresponding data
   /* for the charts visualizations
****/

function areaLineChart(data, chartWidth, chartHeight) {
    console.log("real_data :: ", data)
    console.log("=======================================");
    return {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "description": "Area chart showing weight of cars over time.",
      "width": 300,
      "height": 200,
      "data": {"values": data},
       "encoding": {
            "x": {
              "timeUnit": "year",
              "field": "date",
              "type": "temporal",
              "axis": {"format": "%Y"}
            }
       },

      "layer": [
        {
          "mark": "area",
          "encoding": {
            "y": {
              "aggregate": "sum",
              "field": "count",
              "type": "quantitative",
              "title": "Net Recovery ($)"
            } ,
            "color": {
              "field": "series",
              "type": "nominal",
              "scale": {"scheme": "category20b"},
              "title": ""
            }
          }
        },
        {
          "mark": {"stroke": "red", "type": "line", "interpolate": "monotone"},
          "encoding": {
            "y": {
             "aggregate": "sum",
              "field": "rate",
              "type": "quantitative",
              "axis": {"title": "Net Recovery (%)"}
            }
          }
        }
      ],
      "resolve": {"scale": {"y": "independent"}}
    }
}