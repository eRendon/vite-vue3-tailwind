<template>
  <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-row items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
              class="font-semibold text-lg"
              :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Card Tables
          </h3>
        </div>
        <div class="relative mb-3">
          <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
          >
            Search
          </label>
          <input name="email"
                 v-model="dataFilter"
                 placeholder="Name"
                 type="email"
                 class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
        <tr>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
          >
            Project
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
          >
            Budget
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
          >
            Status
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
          >
            Users
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
          >
            Completion
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
          ></th>
        </tr>
        </thead>
        <tbody>
        <tr :key="`table-list-${index}`" v-for="(item, index) in listItems">
          <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img
                :src="item.icon"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
            />
            <span
                class="ml-3 font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
            >
              {{ item.name }}
              </span>
          </th>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            {{ item.budget }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div v-html="validateStatus(item.status)">

            </div>
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex">
              <img    v-for="(team, index) in item.users"
                      :src="team"
                      :key="`user-${index}`"
                      alt="..."
                      class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
              />
            </div>
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">{{ item.completion }}%</span>
              <div class="relative w-full">
                <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                >
                  <div
                      :style="{'width': item.completion+'%'}"
                      :class="{
                                                    'bg-red-500' : item.completion <= 79,
                                                    'bg-teal-500': item.completion <= 99,
                                                    'bg-emerald-500': item.completion === 100
                                                }"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <TableDropdown />
          </td>
        </tr>
        </tbody>
      </table>
      <Paginator :pagination="pagination"
                 :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
                 @onNext="onChangePage($event)"
                 @onPrevious="onChangePage($event)"
                 @onSelectPage="onChangePage($event)"
                 @onFilteredData="onFilterPagination($event)"
                 :data="filteredList"/>
    </div>
  </div>
</template>
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
