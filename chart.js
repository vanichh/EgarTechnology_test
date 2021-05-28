google.charts.load('current', { packages: ['line', 'corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var chartDiv = document.getElementById('chart_div');
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Month');
  data.addColumn('number', 'Average Temperature');
  data.addRows(bruteDate());
  var materialOptions = {
    chart: {
      title: 'Average Temperatures and Daylight in Iceland Throughout the Year',
    },
    width: 900,
    height: 500,
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: 'Temps' },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: 'Temps (Celsius)' },
      },
    },
  };
  var materialChart = new google.charts.Line(chartDiv);
  materialChart.draw(data, materialOptions);
}
  function bruteDate() {
    const render = [];
    const dataTD = document.querySelectorAll('td:nth-of-type(1)');
    dataTD.forEach(elem => {
      let arr = [];
      let time = elem.textContent.split('.').reverse().join('.');
      arr.push(new Date(time));
      render.push(arr);
    });
    const textTD = document.querySelectorAll('td:nth-of-type(3)');
    textTD.forEach((elem, index) => {
      render[index].push(Number(elem.textContent));
    });
    return render;
  }
