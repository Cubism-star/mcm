function getOption(graphInfo) {
//给节点设置样式
//     graphInfo.nodes.forEach(function (node) {
//         //node.itemStyle = null;//
//         //node.symbolSize = node.size;//强制指定节点的大小
//         // Use random x, y
//         node.x = node.y = null;
//         node.draggable = true;
//     });
    chart_name = graphInfo.chart_name
    legends = graphInfo.legend
    series = graphInfo.series
    year_x = graphInfo.year_x
    yAxis = graphInfo.yAxis
    console.log(graphInfo.links)
    title = graphInfo['title']
    nodes = graphInfo['nodes']
    links = graphInfo['links']
    categories = graphInfo['categories']
//指定图标的配置和数据
    var option = {
        grid: { //图表绘制与上下左右的距离
                left: '5%',
                right: '5%',
                bottom: '15%',
             },
        title: {
             //text: 'accumulated sales volume chart'
            text: chart_name,
             x: 'middle',
            y: 'bottom',
            padding: 10,
            textAlign: 'center'
        },
        tooltip: {},
        legend: {
            data: legends,
            y: 'top'
        },
        xAxis: {
            data: year_x,
            name: 'year'
        },
        yAxis: [
                        {
                type: 'value',
                name: 'Sales volume',
                min: yAxis.min,
                // max: 80,
                max: yAxis.max,
                // interval: yAxis.interval,
                axisLabel: {
                    formatter: '{value} '
                }
            },
        ],
        series: series
    };
    return option
}

function createGraph(myChart, mygraph) {
//设置option样式
    option = getOption(mygraph)
//使用Option填充图形
    myChart.setOption(option);

}
