<template>
  <div>
    <p class="tip">改变图标，通过设置 <table-api-link prop="filter-config"/>={<table-api-link prop="iconMatch"/>, <table-api-link prop="iconMatch"/>} 局部替换默认的图标</p>

    <vxe-table
      border
      height="400"
      :row-config="{isCurrent: true, isHover: true}"
      :filter-config="{iconNone: 'vxe-icon-question-circle-fill', iconMatch: 'vxe-icon-question-circle-fill'}"
      :loading="demo1.loading"
      :data="demo1.tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role" :filters="roleOptions"></vxe-column>
      <vxe-column field="sex" title="Sex" sortable :filter-multiple="false" :filters="sexOptions"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" sortable></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup () {
    const demo1 = reactive({
      loading: false,
      tableData: [] as any[]
    })

    const roleOptions = ref([
      { label: '前端', value: '前端' },
      { label: '后端', value: '后端' }
    ])

    const sexOptions = ref([
      { label: 'Man', value: '1' },
      { label: 'Woman', value: '0' }
    ])

    const findList = (): Promise<void> => {
      demo1.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          demo1.tableData = [
            { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
            { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
            { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
            { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
            { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
            { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }
          ]
          demo1.loading = false
          resolve()
        }, 300)
      })
    }

    findList()

    return {
      demo1,
      roleOptions,
      sexOptions,
      demoCodes: [
        `
        <vxe-table
          border
          height="400"
          :row-config="{isCurrent: true, isHover: true}"
          :filter-config="{iconNone: 'vxe-icon-question-circle-fill', iconMatch: 'vxe-icon-question-circle-fill'}"
          :loading="demo1.loading"
          :data="demo1.tableData">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="role" title="Role" :filters="roleOptions"></vxe-column>
          <vxe-column field="sex" title="Sex" sortable :filter-multiple="false" :filters="sexOptions"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column field="address" title="Address" sortable></vxe-column>
        </vxe-table>
        `,
        `
        import { defineComponent, ref, reactive } from 'vue'

        export default defineComponent({
          setup () {
            const demo1 = reactive({
              loading: false,
              tableData: [] as any[]
            })

            const roleOptions = ref([
              { label: '前端', value: '前端' },
              { label: '后端', value: '后端' }
            ])

            const sexOptions = ref([
              { label: 'Man', value: '1' },
              { label: 'Woman', value: '0' }
            ])

            const findList = (): Promise<void> => {
              demo1.loading = true
              return new Promise(resolve => {
                setTimeout(() => {
                  demo1.tableData = [
                    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
                    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
                    { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
                    { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
                    { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
                    { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
                    { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
                    { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }
                  ]
                  demo1.loading = false
                  resolve()
                }, 300)
              })
            }

            findList()

            return {
              demo1,
              roleOptions,
              sexOptions
            }
          }
        })
        `
      ]
    }
  }
})
</script>
