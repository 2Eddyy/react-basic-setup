import React from 'react';
import ReactECharts from "echarts-for-react";
import './Charts.css';
import $ from 'jquery';
import moment from 'moment';

function Charts() {
  const xAxisData = [
    "02 13, 2023 at 11:00 pM ",
    "02 14, 2023 at 2:00 AM ",
    "02 14, 2023 at 5:00 AM ",
    "02 14, 2023 at 8:00 AM ",
    "02 14, 2023 at 11:00 AM ",
    "02 14, 2023 at 2:00 PM ",
    "02 14, 2023 at 5:00 PM "
  ];
  const voltageData = [3.64, 3.62, 3.63, 3.66, 3.67, 3.62, 3.65];
  const temperatureData = [3.47, 3.52, 3.52, 3.49, 3.51, 3.48, 3.54];
  const options = {
    title: {
      text: "Battery Voltage"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      bottom: 0
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: "none"
        },
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        show: true
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: xAxisData
    },
    yAxis: {
      type: "value",
      min: 3.45,
      max: 3.7,
      axisLabel: {
        color: "black",
        formatter: "{value} V"
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          width: 2
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: "solid",
          color: "pink"
        }
      }
    },
    series: [
      {
        type: "line",
        lineStyle: {
          type: "dashed"
        },
        color: "red",
        markLine: {
          silent: true,
          symbol: "none",
          data: [
            {
              name: "Low Battery",
              yAxis: 3.5,
              label: {
                formatter: "Low Battery",
                position: "insideMiddle"
              }
            }
          ]
        }
      },
      {
        name: "VOLTAGE",
        type: "line",
        color: "pink",
        data: voltageData
      },
      {
        name: "TEMPERATURE",
        type: "line",
        color: "#DCDCDC",
        data: temperatureData
      }
    ]
  };
  console.log(options);

  var startDate = moment().startOf('day');
var endDate = moment().endOf('day');

$(function () {
    $('#reportrange').daterangepicker({
        startDate: startDate,
        endDate: endDate,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Last 3 Months': [moment().subtract(3, 'month'), moment().subtract(1, 'month')],
            'Last 6 Months': [moment().subtract(6, 'month'), moment()]
        }
    }, setDate);
    setDate(startDate, endDate);
})


function setDate(start, end) {
    startDate = start.startOf('day');
    endDate = end.endOf('day');
    console.log(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
}

  return (
    <div className='container body'>
      <div class="container mt-2">
        <div class="date d-md-block d-none">
            <div id="reportrange">
                <i class="fa fa-calendar"></i>&nbsp;
                <span ></span> <i class="fa fa-caret-down"></i>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <div id="chart-container">
                    <h1 id="chart"></h1>
                </div>
            </div>
        </div>
    </div> 
      <div className='charts'>
        <ReactECharts option={options} />
      </div>
    </div>
  )
}

export default Charts