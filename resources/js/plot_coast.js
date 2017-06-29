function plot_points(data) {

var projection = d3.geoMercator()
                    .center([ 13, 52])
                    .scale( width/0.7)
                    .translate( [width / 2, height / 1.5]);

var path = d3.geoPath().projection(projection);

var blocks = svg.selectAll('path')
                .data(data.features)
                .enter()
                .append('path')
                .attr('d', path)
                .style('stroke', 'rgba(240, 240, 240, 1)')
                .style('stroke-width', 0.5);

d3.json("NorwayCoast.json", function(d) {
    d['attendance'] = +d['attendance'];
    d['date'] = format.parse(d['date']);
    return d;
}, plot_points)

}