const WIDTH = 800;
const HEIGHT = 600;

var runs = [
    {
        id:1,
        date:'October 1, 2017 at 4:00PM',
        distance:5.2
    },
    {
        id:2,
        date:'October 2, 2017 at 5:00PM',
        distance:7.0725
    },
    {
        id:3,
        date:'October 3, 2017 at 6:00PM',
        distance:8.7
    }
];
//SVGスタイリング
d3.select('svg')
     .style('width', WIDTH)
     .style('height', HEIGHT);
//リニアスケールを作成する
var yScale = d3.scaleLinear(); //create the scale used to convert distances run to y position values
// set the visual range to 600 -> 0
// remember 600 will map to a low run distance value and 0 will map to a high run distance value
// we do this because y starts at 0 at the top of the SVG and increases in value as we move down the SVG
yScale.range([HEIGHT, 0]);
 //create array containing min/max distance values for run data
 //動的ドメインの設定
var yDomain = d3.extent(runs, function(datum, index){
    return datum.distance; //compare distance properties of each item in the data array
})
yScale.domain(yDomain); //set domain of yScale to min/max values created by d3.extent in the last step
console.log(yScale.domain());

//you can get the range whenever you want like this:
console.log(yScale.range());
console.log(yScale(5)); //get a visual point from a data value
//get a data values from a visual point
console.log(yScale.invert(450));
// d3.selectAll('circle').attr('cy', 300);
//ビジュアル要素へのデータの添付
//ビジュアル要素に添付されたデータを使用して外観に影響を与える
//SVG要素を動的に生成する
//since no circles exist, we need to select('svg')
//so that d3 knows where to append the new circles
d3.select('svg').selectAll('circle')
    .data(runs) //attach the data as before
    //find the data objects that have not yet
    //been attached to visual elements
    .enter()
    //for each data object that hasn't been attached,
    //append a <circle> to the <svg>
    .append('circle');

d3.selectAll('circle')//.data(runs)
    .attr('cy', function(datum, index){
      console.log(`cy: ${yScale(datum.distance)}`);
        return yScale(datum.distance);
    });
//時間スケールを作成する
//scaleTime maps date values with numeric visual points
//解析時間と書式設定時間
//this format matches our data in the runs array
var parseTime =d3.timeParse("%B%e, %Y at %-I:%M%p");
var formatTime =d3.timeFormat("%B%e, %Y at %-I:%M%p");
var xScale =d3.scaleTime();
xScale.range([0,WIDTH]);
//動的ドメインの設定
var xDomain =d3.extent(runs, function(datum, index){
    return parseTime(datum.date);
});
xScale.domain(xDomain);
d3.selectAll('circle')
    .attr('cx', function(datum, index){
      console.log(`cx: ${xScale(parseTime(datum.date))}`);
      return xScale(parseTime(datum.date));
    });

//軸の作成
