<template src="./CardTable.html"> </template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import TableDropdown from '@/components/Dropdowns/TableDropdown/TableDropdown.vue';
import Paginator from '@/components/Pagination/Pagination.vue'

interface List {
  name: string
  icon: string
  budget: string
  status: string
  users: string[]
  completion: number
}

const props = defineProps({
  color: {
    default: 'light',
    validator(value: string) {
      // The value must match one of these strings
      return ['light', 'dark'].indexOf(value) !== -1;
    },
  },
})


const bootstrap = '../src/assets/img/bootstrap.jpg';
const angular = '../src/assets/img/angular.jpg';
const sketch = '../src/assets/img/sketch.jpg';
const react = '../src/assets/img/react.jpg';
const vue = '../src/assets/img/vue.jpg';
const team1 = '../src/assets/img/team-1-800x800.jpg';
const team2 = '../src/assets/img/team-2-800x800.jpg';
const team3 = '../src/assets/img/team-3-800x800.jpg';
const team4 = '../src/assets/img/team-4-470x470.png';


const list = ref<List[]>([
  {
    name: 'Argon Design System',
    icon: bootstrap,
    budget: '2500',
    completion: 60,
    status: 'pending',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Angular Now UI Kit PRO',
    icon: angular,
    budget: '1800',
    completion: 100,
    status: 'Completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Black Dashboard Sketch',
    icon: sketch,
    budget: '3150',
    completion: 73,
    status: 'delayed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'React Material Dashboard',
    icon: react,
    budget: '4400',
    completion: 90,
    status: 'on schedule',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Vue Tailwind Dashboard',
    icon: vue,
    budget: '2200',
    completion: 100,
    status: 'completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Argon Design System 2',
    icon: bootstrap,
    budget: '2500',
    completion: 60,
    status: 'pending',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Angular Now UI Kit PRO',
    icon: angular,
    budget: '1800',
    completion: 100,
    status: 'Completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Black Dashboard Sketch',
    icon: sketch,
    budget: '3150',
    completion: 73,
    status: 'delayed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'React Material Dashboard',
    icon: react,
    budget: '4400',
    completion: 90,
    status: 'on schedule',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Vue Tailwind Dashboard',
    icon: vue,
    budget: '2200',
    completion: 100,
    status: 'completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Argon Design System 3',
    icon: bootstrap,
    budget: '2500',
    completion: 60,
    status: 'pending',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Angular Now UI Kit PRO',
    icon: angular,
    budget: '1800',
    completion: 100,
    status: 'Completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Black Dashboard Sketch',
    icon: sketch,
    budget: '3150',
    completion: 73,
    status: 'delayed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'React Material Dashboard',
    icon: react,
    budget: '4400',
    completion: 90,
    status: 'on schedule',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Vue Tailwind Dashboard',
    icon: vue,
    budget: '2200',
    completion: 100,
    status: 'completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Argon Design System 4',
    icon: bootstrap,
    budget: '2500',
    completion: 60,
    status: 'pending',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Angular Now UI Kit PRO',
    icon: angular,
    budget: '1800',
    completion: 100,
    status: 'Completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Black Dashboard Sketch',
    icon: sketch,
    budget: '3150',
    completion: 73,
    status: 'delayed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'React Material Dashboard',
    icon: react,
    budget: '4400',
    completion: 90,
    status: 'on schedule',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Vue Tailwind Dashboard',
    icon: vue,
    budget: '2200',
    completion: 100,
    status: 'completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Argon Design System 5',
    icon: bootstrap,
    budget: '2500',
    completion: 60,
    status: 'pending',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Angular Now UI Kit PRO',
    icon: angular,
    budget: '1800',
    completion: 100,
    status: 'Completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Black Dashboard Sketch',
    icon: sketch,
    budget: '3150',
    completion: 73,
    status: 'delayed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'React Material Dashboard',
    icon: react,
    budget: '4400',
    completion: 90,
    status: 'on schedule',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Vue Tailwind Dashboard',
    icon: vue,
    budget: '2200',
    completion: 100,
    status: 'completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Argon Design System 6',
    icon: bootstrap,
    budget: '2500',
    completion: 60,
    status: 'pending',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Angular Now UI Kit PRO',
    icon: angular,
    budget: '1800',
    completion: 100,
    status: 'Completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Black Dashboard Sketch',
    icon: sketch,
    budget: '3150',
    completion: 73,
    status: 'delayed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'React Material Dashboard',
    icon: react,
    budget: '4400',
    completion: 90,
    status: 'on schedule',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  },
  {
    name: 'Vue Tailwind Dashboard',
    icon: vue,
    budget: '2200',
    completion: 100,
    status: 'completed',
    users: [
      team1,
      team2,
      team3,
      team4
    ]
  }
])


const validateStatus = (status: string): string => {
  if (status === 'completed') return '<i class="fas fa-circle text-emerald-500 mr-2"></i>'
  if (status === 'pending') return '<i class="fas fa-circle text-orange-500 mr-2"></i>'
  if (status === 'delayed') return '<i class="fas fa-circle text-red-500 mr-2"></i>'
  return '<i class="fas fa-circle text-teal-500 mr-2"></i>'
}

const dataFilter = ref('')

const filteredList = computed<List[]>(() => {
  return list.value.filter((item) => {
    const term = dataFilter.value.toLowerCase()
    return item.name?.toLowerCase().includes(term)
  })
})

const pagination = ref({
  currentPage: 1,
  nextPage: true,
  pageNumber: 5,
  pageSize: 5,
  previousPage: true,
  totalCount: filteredList.value.length,
  totalPages: filteredList.value.length / 5
})

const listItems = ref<List[]>([])

const onFilterPagination = (list: List[]) => {
  listItems.value = list
  console.log('lista en la tarjeta', list)
}

const onChangePage = (currentPage: number): void => {
  pagination.value.currentPage = currentPage
  onValidateChange()
}

const onValidateChange = (): void => {
  pagination.value.previousPage = pagination.value.currentPage !== 1;
  pagination.value.nextPage = pagination.value.currentPage <= listItems.value.length
}

onMounted(() => {
  onValidateChange()
})

</script>
