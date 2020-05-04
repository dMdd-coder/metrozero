google.charts.load('current', {packages: ['gantt', 'timeline']});
google.charts.setOnLoadCallback(drawGantt);
/*google.charts.setOnLoadCallback(drawTimeline);*/ 

function drawGantt() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1ehnHwoUqJXd37mhndKCiD7RT56m79U3i7PyErhRoaxU/edit?sheet=Gantt&headers=1&tq=');
    query.send(handleQueryResponseGantt);
}  
function handleQueryResponseGantt(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable()
    var options = {
        color: 'green',
        height: 700,
        gantt: {
            criticalPathEnabled: false,                        
            barCornerRadius: 2,
            criticalPathStyle: {
                stroke: 'green',
                strokeWidth: 4
            },
            arrow: {
                angle: 180,
                spaceAfter: 0,
                width: 2,
                color: 'green',
                radius: 20
            },
            innerGridHorizLine: {
                stroke: '#ffe0b2',
                strokeWidth: 0
            },
            innerGridTrack: {fill: '#ffffff'},
            innerGridDarkTrack: {fill: '#ffffff'},
            labelStyle: {
                fontName: 'Arial',
                fontSize: 14,
                color: '#000000',
            },
            shadowEnabled: false
        }                      
    }

    var chart = new google.visualization.Gantt(document.getElementById('chart_gantt'));
    chart.draw(data, options);
} 
function drawTimeline() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1z5GkR5EiTmylzHwBO9865uP5ZddpK372pEqNtehkyK0/edit?usp=sharing');
    query.send(handleQueryResponseTimeline);
} 
function handleQueryResponseTimeline(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var options = {
        height: 300,
        backgroundColor: 'white',
        colors: ['#787878', '#6cca6c', '#800000', '#e9cf08', '#f6c7b6'],
        barLabelStyle: 'Arial',
        timeline: {
            showRowLabels: false,
            groupByRowLabel: true,
            colorByRowLabel: true,
            barLabelStyle: {
                fontName: 'Arial',
                fontSize: 12,
                color: 'transparent'
            },
            avoidOverlappingGridLines: false
        }             
    }

    var chart = new google.visualization.Timeline(document.getElementById('chart_timeline'));
    chart.draw(data, options)
}

function show(name){
    if (document.getElementById(name).style.display == "block"){
        document.getElementById(name).style.display = "none";
    } else {
        document.getElementById(name).style.display = "block"
    }   
}
