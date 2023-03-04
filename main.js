var data = d3.csv('https://raw.githubusercontent.com/UBC-InfoVis/datasets/master/cities_and_population.csv').then(function(data){
    data.forEach(function(d) {
        d.population = +d.population;
        d.x = +d.x;
        d.y = +d.y;
        d.eu == "true"

        svg.selectAll('circle')
            .data(data)
            .enter()
        .append('circle')
            .attr('fill', 'red')
            .attr('width', 5)
            .attr('height', 5)
            .attr('cy', (d, index) => d.y)
            .attr('cx', (d, index) => d.x)
            .attr('r', function(d) {
                if(+d.population > 1000000){
                    return 8;
                } else {
                    return 4;
                }
            })
            .attr("opacity", function(d) {
                if(d.eu == "true"){
                    return 1;
                } else {
                    return 0;
                }
            })
        
        svg.selectAll('text')
            .data(data)
            .enter()
        .append("text")
            .text((d, index) => d.city)
            .attr("opacity", function(d) {
                if(+d.population > 1000000 & d.city != "New York City"){
                    return 1;
                } else {
                    return 0;
                }
            })
            .attr("x", (d, index) => +d.x - 15)
            .attr("y", (d, index) => +d.y - 10);
                
        
        
    });
    console.log(data);
});

const svg = d3.select('body').append('svg')
    .attr('width', 700)
    .attr('height', 550)
    .text("Hey guys")



