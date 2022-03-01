<template>
  <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-white bg-blueGray-700"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase dark:text-black text-blueGray-100 mb-1 text-xs font-semibold">
            Overview
          </h6>
          <h2 class="text-white dark:text-black text-xl font-semibold">
            Sales value
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, watch } from 'vue'
import {
  Chart,
  ChartConfiguration,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineElement,
  LineController,
  PointElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { storageTheme } from '@/store/modules/theme'

Chart.register(CategoryScale, LinearScale, BarController, BarElement, LineElement, LineController, PointElement, Tooltip, Legend, Title)

const config: ChartConfiguration = {
  type: 'line',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    datasets: [
      {
        label: new Date().getFullYear().toString(),
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
        data: [65, 78, 66, 44, 56, 67, 75],
        fill: false,
      },
      {
        label: (new Date().getFullYear() - 1).toString(),
        fill: false,
        backgroundColor: '#fff',
        borderColor: '#fff',
        data: [40, 68, 86, 74, 56, 60, 87],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Sales Charts',
        color: 'white',
      },
      legend: {
        labels: {
          color: 'white',
        },
        align: 'end',
        position: 'bottom',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(255,255,255,.7)',
        },
        display: true,
        title: {
          display: false,
          text: 'Month',
          color: '#000000',
        },
        grid: {
          display: false,
          borderDash: [2],
          borderDashOffset: 2,
          color: 'rgba(33, 37, 41, 0.3)',
        },
      },
      y: {
        ticks: {
          color: 'rgba(255,255,255,.7)',
        },
        display: true,
        title: {
          display: false,
          text: 'Value',
          color: '#000000',
        },
        grid: {
          borderDash: [3],
          borderDashOffset: 3,
          drawBorder: false,
          color: 'rgba(255, 255, 255, 0.15)',
        },
      },
    },
  },
}

const theme = computed(()=> storageTheme.theme)

watch(()=> theme.value, (value) => {
  console.log('oldValue', value)
  if (value === 'dark') {
    config.options!.scales!.x!.grid!.color = '#000000'
    config.options!.scales!.y!.grid!.color = '#000000'
    config.options!.scales!.x!.ticks!.color = '#000'
    config.options!.scales!.y!.ticks!.color = '#000'
    // config.options!.scales!.y!..color = '#000'
    console.log('chart', Chart)
    config.data.datasets[1].backgroundColor = '#000000'
    config.data.datasets[1].borderColor = '#000000'
    // @ts-ignore
    window.myLine.update()
  } else {
    config.options!.scales!.x!.grid!.color = 'rgba(248,249,253,0.3)'
    config.options!.scales!.y!.grid!.color = 'rgba(248,249,253,0.3)'
    config.data.datasets[1].backgroundColor = '#fff'
    config.data.datasets[1].borderColor = '#fff'
    config.options!.scales!.x!.ticks!.color = 'rgba(255,255,255,.7)'
    config.options!.scales!.y!.ticks!.color = 'rgba(255,255,255,.7)'
  }
  Chart.getChart('line-chart')?.update()
})

const renderChart = ():void => {
  // @ts-ignore
  const ctx = document.getElementById('line-chart')!.getContext('2d');
  // @ts-ignore
  window.myLine = new Chart(ctx, config);
}

onMounted(async () => {
  await nextTick(() => {
    renderChart()
  })
})
</script>
