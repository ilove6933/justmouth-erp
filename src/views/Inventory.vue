<script setup>
import { ref, onMounted } from 'vue'
const API_BASE = 'https://script.google.com/macros/s/AKfycbxc2MglnJ844JdAuQrPJUjVFQ_csS7rYVDbJew4q4dR80HjdNXiztqCLENp2MseoFgh/exec'
const inventory = ref([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch(`${API_BASE}?action=getStock`)
  inventory.value = await res.json()
  loading.value = false
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">📦 庫存查詢</h1>
    <div v-if="loading">載入中...</div>
    <table v-else class="table-auto w-full text-sm border border-gray-300">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="p-2 border border-gray-300">品名規格</th>
          <th class="p-2 border border-gray-300">批號</th>
          <th class="p-2 border border-gray-300">有效日期</th>
          <th class="p-2 border border-gray-300">現有庫存</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in inventory" :key="i" class="border-b">
          <td class="p-2 border border-gray-300">{{ item['品名規格'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['批號'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['有效日期'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['現有庫存'] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>