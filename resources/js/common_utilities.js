const opt_vega = {mode: "vega-lite", "renderer": "canvas", "actions": false};

function renderChart(spendChartSpec, chartElementId) {
    vegaEmbed("#"+chartElementId, spendChartSpec, opt_vega);
}