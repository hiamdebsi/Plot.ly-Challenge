let GaugeData = {
    domain: {x:[0,1], y:[0,1]},
    type: "indicator",
    mode: "gauge",
    value: wfreq,
    gauge:{
        axis:{range:[0,9],
            tickmode: 'linear'
        },
        bar: {color: 'rgba(8,29,88,0)'},
        bordercolor: 'rgba(8,29,88,0)',
        steps:[
            { range: [0, 1], color: 'rgb(247,242,236)' },
            { range: [1, 2], color: 'rgb(241,238,227)' },
            { range: [2, 3], color: 'rgb(213,211,186)' },
            { range: [3, 4], color: 'rgb(226,227,179)' },
            { range: [4, 5], color: 'rgb(213,227,160)' },
            { range: [5, 6], color: 'rgb(183,203,149)' },
            { range: [6, 7], color: 'rgb(141,190,138)' },
            { range: [7, 8], color: 'rgb(139,186,144)' },
            { range: [8, 9], color: 'rgb(134,179,139)' }
        ]
    }  
};


let GaugeData = {
    type:'pie',
    shape_size: '50%',
    hole: 0.5,
    rotation: 90,
    direction: 'clockwise',
    values: [180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180],
    text: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
    textinfo: 'text',
    textposition: 'inside',
    marker: {
        colors: ['rgb(247,242,236)','rgb(241,238,227)','rgb(213,211,186)','rgb(226,227,179)','rgb(213,227,160)','rgb(183,203,149)','rgb(141,190,138)','rgb(139,186,144)','rgb(134,179,139)'],
        labels: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9','']
    },
    hoverinfo: "skip",
    showlegend: false  
};



let GaugeData = {
    domain: {x:[0,1], y:[0,1]},
    type: "indicator",
    mode: "gauge",
    value: wfreq,
    gauge:{
        axis:{range:[0,9],
            tickmode: 'linear'
        },
        bar: {
            color: 'rgba(8,29,88,0)',
        },
        bordercolor: 'rgba(8,29,88,0)',
        steps:[
            { range: [0, 1], color: 'rgb(247,242,236)' },
            { range: [1, 2], color: 'rgb(241,238,227)' },
            { range: [2, 3], color: 'rgb(213,211,186)' },
            { range: [3, 4], color: 'rgb(226,227,179)' },
            { range: [4, 5], color: 'rgb(213,227,160)' },
            { range: [5, 6], color: 'rgb(183,203,149)' },
            { range: [6, 7], color: 'rgb(141,190,138)' },
            { range: [7, 8], color: 'rgb(139,186,144)' },
            { range: [8, 9], color: 'rgb(134,179,139)' }
        ]
    } 
};


//CLOSEST SO FAR
let GaugeData = {
    domain: {x:[0,1], y:[0,1]},
    type: "indicator",
    mode: "gauge",
    value: wfreq,
    gauge:{
        axis:{range:[0,9],
            visible: false
        },
        bar: {
            color: 'rgba(8,29,88,0)',
        },
        bordercolor: 'rgba(8,29,88,0)',
        steps:[
            { range: [0, 1], color: 'rgb(247,242,236)' },
            { range: [1, 2], color: 'rgb(241,238,227)' },
            { range: [2, 3], color: 'rgb(213,211,186)' },
            { range: [3, 4], color: 'rgb(226,227,179)' },
            { range: [4, 5], color: 'rgb(213,227,160)' },
            { range: [5, 6], color: 'rgb(183,203,149)' },
            { range: [6, 7], color: 'rgb(141,190,138)' },
            { range: [7, 8], color: 'rgb(139,186,144)' },
            { range: [8, 9], color: 'rgb(134,179,139)' }
        ]
    } 
};