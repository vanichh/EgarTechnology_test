const data = {
  datasets: [
    {
      label: 'График изменений цен',
      backgroundColor: '#00BF80',
      borderColor: '#00BF80',
      data: bruteDate(),
    },
  ],
};
const config = {
  type: 'line',
  data,
  options: {
    aspectRatio: 1,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'График изменения цен',
        font: {
          size: 26,
          weight: 'normal',
          family: "'Roboto', sans-serif",
        },
        padding: {
          top: 40,
          bottom: 30,
        },
      },
      legend: {
        display: false,
      },
    },
  },
};

var myChart = new Chart(document.getElementById('myChart'), config);
// создаения объекта для отрисовки графика 
function bruteDate() {
  const render = [];
  const dataTD = document.querySelectorAll('td:nth-of-type(1)');
  dataTD.forEach(elem => {
    let arr = {};
    arr.x = elem.textContent.split('.').reverse().join('.');
    render.push(arr);
  });
  const textTD = document.querySelectorAll('td:nth-of-type(3)');
  textTD.forEach((elem, index) => {
    render[index].y = Number(elem.textContent);
  });
  return render;
}
function addData(obj) {
  if (obj === undefined) {
     myChart.data.datasets[0].data = bruteDate();
  } else myChart.data.datasets[0].data.push(obj);
  myChart.update();
}