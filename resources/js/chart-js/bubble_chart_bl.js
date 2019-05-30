const bubble_chart_data = [
 {
   "quantity": 21049,
   "rate": 75.2
 },
 {
   "quantity": 17344,
   "rate": 76.2
 },
 {
   "quantity": 7763,
   "rate": 74.4
 },
 {
   "quantity": 44056,
   "rate": 81.8
 },
 {
   "quantity": 44401,
   "rate": 81
 },
 {
   "quantity": 16986,
   "rate": 72.9
 },
 {
   "quantity": 22818,
   "rate": 72.3
 },
 {
   "quantity": 44138,
   "rate": 79.2
 },
 {
   "quantity": 3161,
   "rate": 70.1
 },
 {
   "quantity": 12984,
   "rate": 75.8
 },
 {
   "quantity": 17415,
   "rate": 70.4
 },
 {
   "quantity": 41240,
   "rate": 80.4
 },
 {
   "quantity": 8501,
   "rate": 70
 },
 {
   "quantity": 1830,
   "rate": 65.5
 },
 {
   "quantity": 7983,
   "rate": 70.2
 },
 {
   "quantity": 6295,
   "rate": 72.3
 },
 {
   "quantity": 9833,
   "rate": 77.9
 },
 {
   "quantity": 17196,
   "rate": 66.4
 },
 {
   "quantity": 15441,
   "rate": 75.6
 },
 {
   "quantity": 73003,
   "rate": 78.7
 },
 {
   "quantity": 16371,
   "rate": 74.9
 },
 {
   "quantity": 1654,
   "rate": 62.8
 },
 {
   "quantity": 777,
   "rate": 60.4
 },
 {
   "quantity": 3267,
   "rate": 68.4
 },
 {
   "quantity": 2897,
   "rate": 59.5
 },
 {
   "quantity": 43294,
   "rate": 81.7
 },
 {
   "quantity": 6514,
   "rate": 74.6
 },
 {
   "quantity": 599,
   "rate": 53.8
 },
 {
   "quantity": 2191,
   "rate": 57.7
 },
 {
   "quantity": 22465,
   "rate": 79.3
 },
 {
   "quantity": 13334,
   "rate": 76.9
 },
 {
   "quantity": 12761,
   "rate": 75.8
 },
 {
   "quantity": 1472,
   "rate": 64.1
 },
 {
   "quantity": 809,
   "rate": 58.3
 },
 {
   "quantity": 6220,
   "rate": 61.9
 },
 {
   "quantity": 14132,
   "rate": 80
 },
 {
   "quantity": 3491,
   "rate": 60.33
 },
 {
   "quantity": 20260,
   "rate": 78
 },
 {
   "quantity": 21291,
   "rate": 78.5
 },
 {
   "quantity": 29797,
   "rate": 82.6
 },
 {
   "quantity": 29437,
   "rate": 78.6
 },
 {
   "quantity": 43495,
   "rate": 80.1
 },
 {
   "quantity": 3139,
   "rate": 64.63
 },
 {
   "quantity": 10503,
   "rate": 74.6
 },
 {
   "quantity": 12837,
   "rate": 73.8
 },
 {
   "quantity": 10996,
   "rate": 75.2
 },
 {
   "quantity": 11031,
   "rate": 71.3
 },
 {
   "quantity": 7776,
   "rate": 74.1
 },
 {
   "quantity": 31087,
   "rate": 60.63
 },
 {
   "quantity": 1129,
   "rate": 62.9
 },
 {
   "quantity": 26812,
   "rate": 76.8
 },
 {
   "quantity": 1520,
   "rate": 63.6
 },
 {
   "quantity": 7925,
   "rate": 66.3
 },
 {
   "quantity": 38923,
   "rate": 80.8
 },
 {
   "quantity": 37599,
   "rate": 81.9
 },
 {
   "quantity": 18627,
   "rate": 60.53
 },
 {
   "quantity": 1644,
   "rate": 65.1
 },
 {
   "quantity": 7474,
   "rate": 73.3
 },
 {
   "quantity": 44053,
   "rate": 81.1
 },
 {
   "quantity": 4099,
   "rate": 65.5
 },
 {
   "quantity": 25430,
   "rate": 79.8
 },
 {
   "quantity": 11593,
   "rate": 71.7
 },
 {
   "quantity": 7279,
   "rate": 73.1
 },
 {
   "quantity": 1225,
   "rate": 60.8
 },
 {
   "quantity": 1386,
   "rate": 53.4
 },
 {
   "quantity": 6816,
   "rate": 64.4
 },
 {
   "quantity": 1710,
   "rate": 65.3
 },
 {
   "quantity": 4270,
   "rate": 72.4
 },
 {
   "quantity": 24200,
   "rate": 76.2
 },
 {
   "quantity": 42182,
   "rate": 82.8
 },
 {
   "quantity": 5903,
   "rate": 66.8
 },
 {
   "quantity": 10504,
   "rate": 70.9
 },
 {
   "quantity": 15573,
   "rate": 78.5
 },
 {
   "quantity": 14646,
   "rate": 72.1
 },
 {
   "quantity": 47758,
   "rate": 80.4
 },
 {
   "quantity": 31590,
   "rate": 82.4
 },
 {
   "quantity": 33297,
   "rate": 82.1
 },
 {
   "quantity": 8606,
   "rate": 75.5
 },
 {
   "quantity": 36162,
   "rate": 83.5
 },
 {
   "quantity": 11752,
   "rate": 78.3
 },
 {
   "quantity": 23468,
   "rate": 68.2
 }
]

function loadBubbleChartsView(chartElementId, windowHeight) {
    const spendBubbleChartSpec = bubbleChart(bubble_chart_data, $('#spend_chart').width(), windowHeight);
    renderChart(spendBubbleChartSpec, chartElementId);
}