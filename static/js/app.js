//DROPDOWN CREATION//
function init(){
    var selectDropdown = d3.select("#selDataset");
    d3.json("samples.json").then((data) => {
        var sample_name = data.names;

        sample_name.forEach((sample_id) => {
            selectDropdown
              .append("option")
              .text(sample_id)
              .property("value", sample_id);
          });

          //Sample Data needed to build the charts/plots
          var defaultdata = sample_name[0];
          MetaData(defaultdata);
          Dashboardcontent(defaultdata);
          Bonus (defaultdata);
    });
}

//If another sample were to be selected, the plots below should respond accordingly
function optionChanged(sample_name){
    MetaData(sample_name)
    Dashboardcontent(sample_name); 
    Bonus (sample_name); 
    console.log("changed");
    console.log(sample_name);
};

// DEMOGRAPHIC INFO + CHARTS CREATION //
// Create a function and use D3 library to read in `samples.json`, specifically the metadata section
function MetaData(sample_name){
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        console.log(metadata);

        //Filter through metadata to retrieve required information
        var panelarray = metadata.filter(sample_item => sample_item.id == sample_name);
        var selData = panelarray[0];
        
        //Use d3 to select the required sample ID
        var panelselect = d3.select("#sample-metadata");
        
        //Clear current data in html
        panelselect.html("");

        //Append key and value pairs to panelselect
        Object.entries(selData).forEach(([key, value]) =>{
            panelselect.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

//Create a function for Chart Building by using the D3 library to read the json data
function Dashboardcontent(sample_name){
    d3.json("samples.json").then((data) => {
        var sampledata = data.samples;
        console.log(sampledata);

        //Filter through data to retrieve required information
        let panelarray = sampledata.filter(sample_item => sample_item.id === sample_name);
        var selData = panelarray[0];

        //Create the variables for the chart components
        var sample_values = selData.sample_values;
        var otu_ids = selData.otu_ids;
        var otu_labels = selData.otu_labels;

        console.log(sample_values);
        console.log(otu_ids);
        console.log(otu_labels);
        
        //BAR CHART//
        //Get the top 10 OTUs found in that particular sample selected
        var top_ten = sample_values.slice(0,10).reverse();
        var y_ticks = otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();

        let BarData = [
            {
                y:y_ticks,
                x:top_ten,
                text: otu_labels.slice(0,10).reverse(),
                type: "bar",
                orientation: "h",
            }
        ];

        let layout = {
            title: `Top 10 Bacteria Cultures Found in <b>Sample ID ${selData.id}</b>`,
            margin: {t:30, l:150}
        };

        Plotly.newPlot("bar", BarData, layout);
        
        //BUBBLE CHART//
        let BubbleData = [
            {
                y:sample_values,
                x:otu_ids,
                text: otu_labels,
                mode: 'markers',
                marker: {
                    size:sample_values,           
                    color: otu_ids,
                    colorscale: "Earth"        
                }
            }
        ];
        
        let layout_2 ={
            title: `Bacteria Cultures for <b>Sample ID ${selData.id}</b>`
        };

        Plotly.newPlot("bubble", BubbleData, layout_2);
        
    });
}

// GAUGE CHART BONUS //
//Create a function for the Bonus Gauge Chartby using the D3 library to read the json data
function Bonus(sample_name){

    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        console.log(metadata);

        //Filter through metadata to retrieve required information
        var panelarray = metadata.filter(sample_item => sample_item.id == sample_name);
        var selData = panelarray[0];

        var wfreq = selData.wfreq;
        console.log(wfreq);

        //In case null values do exist
        if (wfreq == null){
            wfreq = 0;
        }

        //Use pie chart to create gauge chart shape
        let GaugeData = {
            type: 'pie',
            showlegend: false,
            hole: 0.4,
            rotation: 90,
            values: [180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180],
            text: ['8-9','7-8','6-7','5-6','4-5','3-4','2-3','1-2','0-1'],
            textinfo: 'text',
            textposition:'inside',
            marker:{
                colors:['rgb(247,242,236)','rgb(241,238,227)','rgb(213,211,186)','rgb(226,227,179)','rgb(213,227,160)','rgb(183,203,149)','rgb(141,190,138)','rgb(139,186,144)','rgb(134,179,139)', 'white']
            },
            hoverinfo: "skip"
        };
        
        //Angle for each range on chart
        var angle = (wfreq/9)*180;

        //calculate end point of Pointer Path
        var degrees = 180 - angle, radius = 0.5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);

        //Pointer Path
        var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
            cX = String(x),
            cY = String(y),
            pathEnd = ' Z';
        var path = mainPath + cX + " " + cY + pathEnd;

        //Needle Format
        let NeedleCenter = {
            type: 'scatter',
            showlegend: false,
            x:[0],
            y:[0],
            marker:{
                size: 10,
                color:'rgb(129,6,15)'
            },
            number: wfreq,
            hoverinfo: 'number'
        };

        let GaugeChart = [NeedleCenter, GaugeData];

        let layout_3 ={
            title: `<b>Belly Button Washing Frequency</b><br>Scrubs per Week for <b>Sample ID ${selData.id}</b>`,
            shapes:[{
                type: 'path',
                path: path,
                fillcolor: 'rgb(129,6,15)',
                line:{
                    color:'rgb(129,6,15'
                }
            }],
            xaxis:{
                zeroline: false,
                showticklabels: false,
                showgrid: false,
                range: [-1,1],
                fixedrange: true
            },
            yaxis:{
                zeroline: false,
                showticklabels: false,
                showgrid: false,
                range: [-1,1],
                fixedrange: true
            },
            width: 500,
            height: 450,

        };

        Plotly.newPlot("gauge", GaugeChart, layout_3);
    });
}

init();


