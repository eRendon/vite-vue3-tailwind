<template>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ pagination.currentPage }}</span>
          to
          <span class="font-medium">{{ pagination.pageSize }}</span>
          of
          <span class="font-medium">{{ pagination.totalCount }}</span>
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a @click="onPrevious"
             v-if="pagination.previousPage"
             class="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"/>
            </svg>
          </a>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a v-for="page in pagination.totalPages"
             @click="onSelectPage(page)"
             aria-current="page"
             :class="{'bg-gray-400 text-white': pagination.currentPage === page}"
             class="z-10 cursor-pointer border-gray-300  relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            {{ page }}
          </a>
          <a @click="onNext"
             v-if="pagination.nextPage"
             class="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"/>
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs, watch, watchEffect } from 'vue'

export interface IPagination {
  totalCount: number
  pageSize: number
  currentPage: number
  totalPages: number
  previousPage: boolean
  nextPage: boolean
  pageNumber: number
}

const props = defineProps({
  pagination: {
    type: Object as () => IPagination,
    default: () => ({})
  },
  data: {
    type: Array,
    default: () => ([]),
    required: true
  }
})

const { pagination, data } = toRefs(props)


const buildPage = () => {
  const trimStart = (pagination?.value?.currentPage - 1) * pagination?.value.pageSize
  const trimEnd = trimStart + pagination?.value?.pageSize
  emits('onFilteredData', data?.value?.slice(trimStart, trimEnd))
}

const emits = defineEmits(['onNext', 'onPrevious', 'onSelectPage', 'onFilteredData'])

const onNext = (): void => {
  emits('onNext', props.pagination.currentPage! +1)
  buildPage()
}
const onPrevious = (): void => {
  emits('onPrevious', props.pagination.currentPage! - 1)
  buildPage()
}
const onSelectPage = (page: number): void => {
  emits('onSelectPage', page)
  buildPage()
}

watchEffect( () => {
  buildPage()
})

</script>

<style scoped>

</style>