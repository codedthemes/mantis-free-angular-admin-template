// angular import
import { Component, viewChild } from '@angular/core';

// project import

// third party
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-sales-report-chart',
  imports: [NgApexchartsModule],
  templateUrl: './sales-report-chart.component.html',
  styleUrl: './sales-report-chart.component.scss'
})
export class SalesReportChartComponent {
  chart = viewChild.required<ChartComponent>('chart');
  chartOptions = {
    chart: {
      type: 'bar' as const,
      height: 430,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 4
      }
    },
    stroke: {
      show: true,
      width: 8,
      colors: ['transparent']
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top' as const,
      horizontalAlign: 'right' as const,
      show: true,
      fontFamily: `'Public Sans', sans-serif`,
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: false
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5
      }
    },
    series: [
      {
        name: 'Net Profit',
        data: [180, 90, 135, 114, 120, 145]
      },
      {
        name: 'Revenue',
        data: [120, 45, 78, 150, 168, 99]
      }
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: ['#222', '#222', '#222', '#222', '#222', '#222']
        }
      }
    },
    tooltip: {
      theme: 'light'
    },
    colors: ['#faad14', '#1677ff'],
    grid: {
      borderColor: '#f5f5f5'
    }
  };
}
