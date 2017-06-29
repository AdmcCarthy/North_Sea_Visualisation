function plot_points(data) {

    function agg_year(leaves) {
        var total = d3.sum(leaves, function(d) {
            return d['attendance'];
        });

        var coords = leaves.map(function(d) {
            return projection([+d.long, +d.lat]);
        });

        var center_x = d3.mean(coords, function(d) {
            return d[0];
        });

        var center_y = d3.mean(coords, function(d) {
            return d[1];
        });

        var teams = d3.set();

        leaves.forEach(function(d) {
            teams.add(d['team1']);
            teams.add(d['team2']);
        });

        return {
            'attendance' : total,
            'x' : center_x,
            'y' : center_y,
            'teams' : teams.values()
        };
    }

    var nested = d3.nest()
                    .key(function(d) {
                        return d['date'].getUTCFullYear();
                    })
                    .rollup(agg_year)
                    .entries(data);

    var attendance_max = d3.max(nested, function(d) {
        return d.values['attendance'];
    });

    var radius = d3.scale.sqrt()
                    .domain([0, attendance_max])
                    .range([0, 15]);

    function key_func(d) {
        return d['key'];
    }

    svg.append('g')
        .attr("class", "bubble")
        .selectAll("circle")
        .data(nested.sort(function(a, b) { 
            return b.values['attendance'] - a.values['attendance'];
        }), key_func)
        .enter()
        .append("circle")
        .attr('cx', function(d) { return d.values['x']; })
        .attr('cy', function(d) { return d.values['y']; })
        .attr('r', function(d) {
            return radius(d.values['attendance']);
        })

var format = d3.time.format("%d-%m-%Y (%H:%M h)");

d3.json("wlbPoint.json", function(d) {
    d['attendance'] = +d['attendance'];
    d['date'] = format.parse(d['date']);
    return d;
}, plot_points)

}