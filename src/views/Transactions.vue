<script setup>
import { ref, onMounted } from 'vue'
const API_BASE = 'https://script.google.com/macros/s/AKfycbxc2MglnJ844JdAuQrPJUjVFQ_csS7rYVDbJew4q4dR80HjdNXiztqCLENp2MseoFgh/exec'
const transactions = ref([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch(`${API_BASE}?action=getTransactions`)
  transactions.value = await res.json()
  loading.value = false
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">🧾 交易查詢</h1>
    <div v-if="loading">載入中...</div>
    <table v-else class="table-auto w-full text-sm border border-gray-300">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="p-2 border border-gray-300">客戶/廠商</th>
          <th class="p-2 border border-gray-300">產品</th>
          <th class="p-2 border border-gray-300">日期</th>
          <th class="p-2 border border-gray-300">數量</th>
          <th class="p-2 border border-gray-300">單價</th>
          <th class="p-2 border border-gray-300">金額</th>
          <th class="p-2 border border-gray-300">業務</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in transactions" :key="i" class="border-b">
          <td class="p-2 border border-gray-300">{{ item['客戶/廠商簡稱'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['產品名稱'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['單據日期'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['數量'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['單價'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['含稅金額'] }}</td>
          <td class="p-2 border border-gray-300">{{ item['業務/採購員'] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>