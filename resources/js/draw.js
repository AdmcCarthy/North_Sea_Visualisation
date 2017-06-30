function draw(geo_data) {
"use strict";
var margin = 75,
    width = 1500 - margin,
    height = 2000 - margin;

var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin)
    .attr("height", height + margin)
    .append('g')
    .attr('class', 'map');

var projection = d3.geoMercator()
                        .center([ 13, 52])
                        .scale( width/0.7)
                        .translate( [width / 2, height / 1.5]);

var path = d3.geoPath().projection(projection);

var blocks = svg.selectAll('path')
                .data(geo_data.features)
                .enter()
                .append('path')
                .attr('d', path)
                .style('fill', 'rgba(189, 189, 189, 0.9)')
                .style('stroke', 'rgba(240, 240, 240, 1)')
                .style('stroke-width', 0.5);

}

d3.json("resources/data/GeoJson/fldArea.json", draw);