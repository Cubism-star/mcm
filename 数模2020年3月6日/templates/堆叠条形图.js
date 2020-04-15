function getOption(graphInfo) {
//给节点设置样式
    graphInfo.nodes.forEach(function (node) {
        //node.itemStyle = null;//
        //node.symbolSize = node.size;//强制指定节点的大小
        // Use random x, y
        node.x = node.y = null;
        node.draggable = true;
    });

    console.log(graphInfo.links)
    title = graphInfo['title']
    nodes = graphInfo['nodes']
    links = graphInfo['links']
    categories = graphInfo['categories']
//指定图标的配置和数据
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['rating of 1', 'rating of 2', 'rating of 3', 'rating of 4', 'rating of 5']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['商品1', '商品2', '商品3', '商品4', '商品5', '商品6', '商品7']
    },
    series: [
        {
            name: 'rating of 1',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'rating of 2',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'rating of 3',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'rating of 4',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: 'rating of 5',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};

    return option
}

function createGraph(myChart, mygraph) {
//设置option样式
    option = getOption(mygraph)
//使用Option填充图形
    myChart.setOption(option);

}
