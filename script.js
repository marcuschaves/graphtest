var bar_ctx = document.getElementById('chart').getContext('2d');

var background_1 = bar_ctx.createLinearGradient(0, 0, 0, 600);
background_1.addColorStop(0, '#EB3349');
background_1.addColorStop(1, '#F45C43');

var background_2 = bar_ctx.createLinearGradient(0, 0, 0, 600);
background_2.addColorStop(0, '#FF8008');
background_2.addColorStop(1, '#FFC837');

var background_3 = bar_ctx.createLinearGradient(0, 0, 0, 600);
background_3.addColorStop(0, '#4CB8C4');
background_3.addColorStop(1, '#3CD3AD');

var background_4 = bar_ctx.createLinearGradient(0, 0, 0, 600);
background_4.addColorStop(0, '#1A2980');
background_4.addColorStop(1, '#26D0CE');

/* data */
var data = {
    labels: ["Africa", "Asia", "Europe", "America"],
    datasets: [{
        /* data */
        label: "Population (millions)",
        backgroundColor: [background_1, background_2, background_3, background_4],
        data: [-50, 75, 150, -100],
        datalabels: {
            align: 'right',
            padding: 200,

        }
    }]
};

var options = {
    responsive: true,
    title: {
        text: 'multiple colors for bars',
        display: true
    },
    scales: {
        xAxes: [{
            stacked: true,
            ticks: {
                max: 200,
                min: -200
            },
        }],
        yAxes: [{
            stacked: true,
        }]
    }
};

var myChart = new Chart(document.getElementById("chart"), {
    type: 'horizontalBar',
    data: data,
    options: options
});