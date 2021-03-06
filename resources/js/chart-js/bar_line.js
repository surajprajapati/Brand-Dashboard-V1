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
    "width": chartWidth-120,
    "height": 330,
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
            /*"axis": {
                "format": "%b-%d",
                "title": null
            },*/
            "type": "nominal",
            "axis": {
                "title": "",
                "labelAngle": 0
            }
         /*   ,
            "timeUnit": "date"*/
        }
    },
    "layer": [
        {
            "mark": {
                "type": "bar",
                "color": "#478cde",
                "opacity": 0.9
            },
            "encoding": {
                "y": {
                    "field": "amountsum",
                    "axis": {
                        "title": "Inventory Value"
                    }
                }
            }
        },
        {
            "mark": {
                "stroke": "#475f91",
                "type": "line",
                "interpolate": "monotone"
            },
            "encoding": {
                "y": {
                    "field": "date_count",
                    "type": "quantitative",
                    "axis": {
                        "title": "Inventory Ageing"
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




const opt_vegabar_line = {mode: "vega-lite", "renderer": "canvas", "actions": false};

const chart_databar_line = [


{
 "posted_date": "RTV",
 "amount": 5
},
{
 "posted_date": "Insurance Claim",
 "amount": 4
},
{
 "posted_date": "Repair",
 "amount": 54
},
{
 "posted_date": "Liquidation",
 "amount": 28
},
{
 "posted_date": "RTV",
 "amount": 4
},
{
 "posted_date": "Insurance Claim",
 "amount": 200
},
{
 "posted_date": "Liquidation",
 "amount": 140
},
{
 "posted_date": "Repair",
 "amount": 500
},
{
 "posted_date": "RTV",
 "amount": 54
},
{
 "posted_date": "Insurance Claim",
 "amount": 90
},
{
 "posted_date": "Repair",
 "amount": 55
},
{
 "posted_date": "Liquidation",
 "amount": 5
},
{
 "posted_date": "RTV",
 "amount": 5
},
{
 "posted_date": "Insurance Claim",
 "amount": 40
},
{
 "posted_date": "Repair",
 "amount": 35
},
{
 "posted_date": "Liquidation",
 "amount": 45
}
,
{
 "posted_date": "Repair",
 "amount": 35
}
,
{
 "posted_date": "Repair",
 "amount": 35
}
,
{
 "posted_date": "Liquidation",
 "amount": 35
}
,
{
 "posted_date": "Liquidation",
 "amount": 28
},
{
 "posted_date": "Liquidation",
 "amount": 45
}
]

/*const chart_databar_line = [{"posted_date": "2019-01-01", "amount": 10 }, {"posted_date": "2019-01-02",
    "amount": 25
},
{
 "posted_date": "2019-01-03",
 "amount": 1
},
{
 "posted_date": "2019-01-05",
 "amount": 1
},
{
 "posted_date": "2019-01-06",
 "amount": 3
},
{
 "posted_date": "2019-01-08",
 "amount": 21
},
{
 "posted_date": "2019-01-09",
 "amount": 4
},
{
 "posted_date": "2019-01-10",
 "amount": 1
},
{
 "posted_date": "2019-01-11",
 "amount": 545
},
{
 "posted_date": "2019-01-12",
 "amount": 5
},
{
 "posted_date": "2019-01-13",
 "amount": 45
},
{
 "posted_date": "2019-01-15",
 "amount": 5
},
{
 "posted_date": "2019-01-17",
 "amount": 8
},
{
 "posted_date": "2019-01-18",
 "amount": 20
},
{
 "posted_date": "2019-01-19",
 "amount": 15
},
{
 "posted_date": "2019-01-20",
 "amount": 14
},
{
 "posted_date": "2019-01-21",
 "amount": 3
},
{
 "posted_date": "2019-01-22",
 "amount": 6
},
{
 "posted_date": "2019-01-23",
 "amount": 5
},
{
 "posted_date": "2019-01-24",
 "amount": 9
},
{
 "posted_date": "2019-01-25",
 "amount": 8
},
{
 "posted_date": "2019-01-26",
 "amount": 5
},
{
 "posted_date": "2019-01-27",
 "amount": 4
},
{
 "posted_date": "2019-01-28",
 "amount": 54
},
{
 "posted_date": "2019-01-29",
 "amount": 28
},
{
 "posted_date": "2019-01-30",
 "amount": 4
},
{
 "posted_date": "2019-01-31",
 "amount": 2
},
{
 "posted_date": "2019-01-01",
 "amount": 14
},
{
 "posted_date": "2019-01-01",
 "amount": 5
},
{
 "posted_date": "2019-01-01",
 "amount": 545
},
{
 "posted_date": "2019-01-03",
 "amount": 4
},
{
 "posted_date": "2019-01-03",
 "amount": 55
},
{
 "posted_date": "2019-01-08",
 "amount": 5
},
{
 "posted_date": "2019-01-08",
 "amount": 0
},
{
 "posted_date": "2019-01-08",
 "amount": 3
},
{
 "posted_date": "2019-01-08",
 "amount": 3
},
{
 "posted_date": "2019-01-08",
 "amount": 3
},
{
 "posted_date": "2019-01-08",
 "amount": 1
},
{
 "posted_date": "2019-01-08",
 "amount": 1
},
{
 "posted_date": "2019-01-19",
 "amount": 11
},
{
 "posted_date": "2019-01-19",
 "amount": 3
},
{
 "posted_date": "2019-01-19",
 "amount": 4
},
{
 "posted_date": "2019-01-19",
 "amount": 17
},
{
 "posted_date": "2019-01-20",
 "amount": 6
},
{
 "posted_date": "2019-01-20",
 "amount": 54
},
{
 "posted_date": "2019-01-24",
 "amount": 3
},
{
 "posted_date": "2019-01-26",
 "amount": 1
},
{
 "posted_date": "2019-01-26",
 "amount": 9
},
{
 "posted_date": "2019-01-26",
 "amount": 5
},
{
 "posted_date": "2019-01-28",
 "amount": 11
},
{
 "posted_date": "2019-01-28",
 "amount": 45
},
{
 "posted_date": "2019-01-28",
 "amount": 1
},
{
 "posted_date": "2019-01-31",
 "amount": 4
},
{
 "posted_date": "2019-01-31",
 "amount": 4
},
{
 "posted_date": "2019-01-31",
 "amount": 1
},
{
 "posted_date": "2019-01-31",
 "amount": 5
},
{
 "posted_date": "2019-01-29",
 "amount": 5
},
{
 "posted_date": "2019-01-29",
 "amount": 54
},
{
 "posted_date": "2019-01-29",
 "amount": 7
}
]*/

var windowheight = $( window ).height()-400;

function loadChartsView() {
    const spendChartSpec = spendBarLineChart(chart_databar_line, $('#bar_line_chart').width(),windowheight);
    renderChartbar_line(spendChartSpec);
}


function renderChartbar_line(spendChartSpec) {
    vegaEmbed("#bar_line_chart", spendChartSpec, opt_vegabar_line);
}