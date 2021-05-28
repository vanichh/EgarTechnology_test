google.charts.load('current', { packages: ['line', 'corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var chartDiv = document.getElementById('chart_div');
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Время');
  data.addColumn('number', 'Стоимость');
  data.addRows(bruteDate());
  var option = {
    chart: {
      title: 'График изменений роста ценнных бумаг',
    },
    legend: { position: 'bottom' },
  };
  var chart = new google.charts.Line(chartDiv);
  chart.draw(data, option);
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
