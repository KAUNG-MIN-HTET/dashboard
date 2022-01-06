$(".show-navigation").click(function() {
    $(".navigation").animate({marginLeft: '0px'});
});

$(".hide-navigation").click(function() {
    $(".navigation").animate({marginLeft:"-100%"});
});

let waypoint = new Waypoint({
    element: document.querySelectorAll('.counter-up'),
    handler: function() {
        notify('Basic waypoint triggered')
    }
})

$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});

function go(url) {
    setTimeout(function() {
        location.href = url;
    },10)
}

let dateArr = ['dec 25','dec 26','dec 27','dec 28','dec 29','dec 30','dec 31','jan 1','jan 2','jan 3','jan 4'];
let orderCountArr = [7,5,6,4,8,4,1,3,7,4,9];
let viewerCountArr = [12,12,22,28,18,17,27,11,19,25,29];


const ctx = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Orders',
            data: orderCountArr,
            fill: true,
            backgroundColor: [
                '#dc354580'
            ],
            borderColor: [
                '#dc3545'
            ],
            borderWidth: 1,
            tension: 0.2
        },
            {
                label: 'Viewers',
                data: viewerCountArr,
                fill: true,
                backgroundColor: [
                    '#19875480'
                ],
                borderColor: [
                    '#198754'
                ],
                borderWidth: 1,
                tension: 0.2
            }]
    },
    options: {
        scales: {
            yAxes: {
                display: false
            },
            xAxes: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(0, 0, 0)'
                },
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        }
    }
});

let orderArr = [23,10,8,22,45,24];
let placeArr = ["YGN","MDY","MGW","NPT","BAGO","SHAN"];


let op = document.getElementById('opChart').getContext('2d');
let myop = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: placeArr,
        datasets: [{
            label: 'Places',
            data: orderArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        }
    }
});


//scroll
let screenHeight = $(window).height();
let currentMenuHeight = $(".navigation .list-active").offset().top;

if(currentMenuHeight > screenHeight*0.8) {
    $(".navigation").animate({
        scrollTop: currentMenuHeight
    },1000)
}

//alert
function noti() {
    alert("This function will add later");
};