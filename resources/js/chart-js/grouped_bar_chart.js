/**** This file handles the chart specs generation part
   /* returning the chart specs corresponding data
   /* for the charts visualizations
****/

function groupedBarChart(data, chartWidth,chartHeight) {
    console.log("real_data :: ", data)
    console.log("=======================================");
    return {
     "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
     "width": chartWidth-500,
    "height": chartHeight-22,
    "padding":0,
  "data": {  "values": data},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.value == 2 ? 'Book' : 'Realized'", "as": "Type"}
  ],
  "spacing":10,
  "mark": "bar",
  "encoding": {
    "column": {
      "field": "company", "type": "ordinal"
    },
    "y": {
      "aggregate": "sum", "field": "total", "type": "quantitative",
      "axis": {"title": "Value", "grid": false}
    },
    "x": {
      "field": "Type", "type": "nominal",
      "scale": {"rangeStep": 12},
      "axis": {
        "title": "",
        "labelAngle": 0
       }
    },
    "color": {
      "field": "Type", "type": "nominal",
      "scale": {"range": ["#478cde", "#ff9966"]}
    }
  },
  "config": {
    "view": {"stroke": "transparent"},
    "axis": {"domainWidth": 1}
  }
}
}



const opt_vega_groupedbar = {mode: "vega-lite", "renderer": "canvas", "actions": false};

const chart_data_groupedbar = [

{"year":2000,"company":'H&B',"value":1,"total":50},
{"year":2000,"company":'H&B',"value":2,"total":50},
{"year":2000,"company":'G&G',"value":1,"total":80},
{"year":2000,"company":'G&G',"value":2,"total":70},
{"year":2000,"company":'Over all',"value":1,"total":90},
{"year":2000,"company":'Over all',"value":2,"total":80}
]

var windowheight = $( window ).height();

// $('#myGrid').css('min-height', 30+'px');

function loadGroupedbarChartsView() {

  var widthdiv = $('#bookRealize_chart_div').width()

  // alert(widthdiv);
  
    const bookRealize = groupedBarChart(chart_data_groupedbar, $('#bookRealize_chart_div').width(),windowheight);
    rendeGroupedbarChart(bookRealize);
}


function rendeGroupedbarChart(bookRealize) {
    vegaEmbed("#bookRealize_chart", bookRealize, opt_vega_groupedbar);
}