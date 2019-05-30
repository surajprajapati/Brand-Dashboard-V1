/**** This file handles the chart specs generation part
   /* returning the chart specs corresponding data
   /* for the charts visualizations
****/

function spendBulletChart(data, chartWidth, chartHeight) {
    console.log("real_data :: ", data)
    console.log("=======================================");
    return {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "width":chartWidth,
    "height":chartHeight,
    "padding":12,
    "data": {
        "values": data
    },
    "facet": {
        "row": {
            "field": "title",
            "type": "ordinal",
            "header": {
                "labelAngle": 0,
                "title": ""
            }
        }
    },
    "spacing": 10,
    "spec": {
        "layer": [
            {
                "mark": {
                    "type": "bar",
                    "color": "#eee"
                },
                "encoding": {
                    "x": {
                        "field": "ranges[2]",
                        "type": "quantitative",
                        "scale": {
                            "nice": false
                        },
                        "title": null
                    }
                }
            },
            {
                "mark": {
                    "type": "bar",
                    "color": "#ddd"
                },
                "encoding": {
                    "x": {
                        "field": "ranges[1]",
                        "type": "quantitative"
                    }
                }
            },
            {
                "mark": {
                    "type": "bar",
                    "color": "#ccc"
                },
                "encoding": {
                    "x": {
                        "field": "ranges[0]",
                        "type": "quantitative"
                    }
                }
            },
            {
                "mark": {
                    "type": "bar",
                    "color": "lightsteelblue",
                    "size": 10
                },
                "encoding": {
                    "x": {
                        "field": "measures[1]",
                        "type": "quantitative"
                    }
                }
            },
            {
                "mark": {
                    "type": "bar",
                    "color": "steelblue",
                    "size": 10
                },
                "encoding": {
                    "x": {
                        "field": "measures[0]",
                        "type": "quantitative"
                    }
                }
            },
            {
                "mark": {
                    "type": "tick",
                    "color": "black"
                },
                "encoding": {
                    "x": {
                        "field": "markers[0]",
                        "type": "quantitative"
                    }
                }
            }
        ]
    },
    "resolve": {
        "scale": {
            "x": "independent"
        }
    },
    "config": {
        "tick": {
            "thickness": 2
        }
    }
}
}