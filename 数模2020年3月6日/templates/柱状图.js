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
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['1', '2', '3', '4', '5', 'The average of star rating']
        },
        xAxis: [
            {
                type: 'category',
                data: ['商品1', '商品2', '商品3', '商品4', '商品5', '商品6', '商品7',
                    '商品8', '商品9', '商品10', '商品11', '商品12'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '数量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            {
                type: 'value',
                name: '数量',
                min: 0,
                max: 5,
                interval: 0.5,
                axisLabel: {
                    formatter: '{value} 个'
                }
            }
        ],
        series: [
            {
                name: '1',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '2',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '3',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '4',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }, {
                name: '5',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: 'The average of star rating',
                type: 'line',
                yAxisIndex: 1,
                data: [3, 2, 3, 4, 3, 4, 5, 3, 5, 4, 3, 3]
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
