<template>
  <div>
    <p class="tip">实现简单的级联下拉选项列表<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="insertEvent()">新增</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      ref="xTable"
      max-height="400"
      :column-config="{resizable: true}"
      :data="demo1.tableData"
      :edit-config="{trigger: 'click', mode: 'row'}"
      @edit-actived="editActivedEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="attr3" title="Project type" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatProjectType(row.attr3) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.attr3" transfer @change="ptypeChangeEvent({ row })">
            <vxe-option v-for="item in demo1.ptypeList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="attr4" title="Project name" :formatter="formatPanmeLabel" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.attr4" transfer>
            <vxe-option v-for="item in demo1.pnameList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date12" type="date"></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { VxeTableInstance, VxeColumnPropTypes, VxeTableEvents } from 'vxe-table'
import XEUtils from 'xe-utils'

export default defineComponent({
  setup () {
    const xTable = ref<VxeTableInstance>()

    const demo1 = reactive({
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
      ],
      ptypeList: [
        { label: '项目1', value: '1' },
        { label: '项目2', value: '2' },
        { label: '项目3', value: '3' }
      ],
      pnameList: [] as any[],
      cachePnameList: [] as any[]
    })

    const formatProjectType = (value: any) => {
      const item = demo1.ptypeList.find(item => item.value === value)
      return item ? item.label : value
    }

    const insertEvent = () => {
      const $table = xTable.value
      if ($table) {
        const record = {}
        $table.insert(record)
      }
    }

    // 格式化显示名称
    const formatPanmeLabel: VxeColumnPropTypes.Formatter = ({ cellValue, row }) => {
      const ptype = row.attr3
      const cacheItem = demo1.cachePnameList.find(item => item.ptype === ptype)
      if (cacheItem && cacheItem.pnameList) {
        const pnameItem = cacheItem.pnameList.find((item: any) => item.value === cellValue)
        if (pnameItem) {
          return pnameItem.label
        }
      }
      return ''
    }

    // 更新级联选项列表
    const updatePnameList = (row: any) => {
      const ptype = row.attr3
      let pnameList: any[] = []
      if (ptype) {
        const item = demo1.cachePnameList.find(item => item.ptype === ptype)
        if (item) {
          pnameList = item.pnameList
        } else {
          // 模拟后台数据
          Array.from(new Array(XEUtils.random(3, 8))).forEach((item, index) => {
            pnameList.push({
              label: `${ptype}-名称${index}`,
              value: `${ptype}_${index}`
            })
          })
          demo1.cachePnameList.push({ ptype, pnameList })
        }
      }
      demo1.pnameList = pnameList
    }

    const ptypeChangeEvent = ({ row }: any) => {
      // 类型切换时更新级联的下拉数据
      row.attr4 = ''
      updatePnameList(row)
    }

    const editActivedEvent: VxeTableEvents.EditActived = ({ row }) => {
      updatePnameList(row)
    }

    return {
      xTable,
      demo1,
      formatProjectType,
      insertEvent,
      formatPanmeLabel,
      ptypeChangeEvent,
      editActivedEvent,
      demoCodes: [
        `
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="insertEvent()">新增</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          show-overflow
          ref="xTable"
          max-height="400"
          :column-config="{resizable: true}"
          :data="demo1.tableData"
          :edit-config="{trigger: 'click', mode: 'row'}"
          @edit-actived="editActivedEvent">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.name" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="attr3" title="Project type" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatProjectType(row.attr3) }}</span>
            </template>
            <template #edit="{ row }">
              <vxe-select v-model="row.attr3" transfer @change="ptypeChangeEvent({ row })">
                <vxe-option v-for="item in demo1.ptypeList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
              </vxe-select>
            </template>
          </vxe-column>
          <vxe-column field="attr4" title="Project name" :formatter="formatPanmeLabel" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-select v-model="row.attr4" transfer>
                <vxe-option v-for="item in demo1.pnameList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
              </vxe-select>
            </template>
          </vxe-column>
          <vxe-column field="date12" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.date12" type="date"></vxe-input>
            </template>
          </vxe-column>
        </vxe-table>
        `,
        `
        import { defineComponent, reactive, ref } from 'vue'
        import { VxeTableInstance, VxeColumnPropTypes, VxeTableEvents } from 'vxe-table'
        import XEUtils from 'xe-utils'

        export default defineComponent({
          setup () {
            const xTable = ref<VxeTableInstance>()

            const demo1 = reactive({
              tableData: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
              ],
              ptypeList: [
                { label: '项目1', value: '1' },
                { label: '项目2', value: '2' },
                { label: '项目3', value: '3' }
              ],
              pnameList: [] as any[],
              cachePnameList: [] as any[]
            })

            const formatProjectType = (value: any) => {
              const item = demo1.ptypeList.find(item => item.value === value)
              return item ? item.label : value
            }

            const insertEvent = () => {
              const $table = xTable.value
              const record = {}
              $table.insert(record)
            }

            // 格式化显示名称
            const formatPanmeLabel: VxeColumnPropTypes.Formatter = ({ cellValue, row }) => {
              const ptype = row.attr3
              const cacheItem = demo1.cachePnameList.find(item => item.ptype === ptype)
              if (cacheItem && cacheItem.pnameList) {
                const pnameItem = cacheItem.pnameList.find((item: any) => item.value === cellValue)
                if (pnameItem) {
                  return pnameItem.label
                }
              }
              return ''
            }

            // 更新级联选项列表
            const updatePnameList = (row: any) => {
              const ptype = row.attr3
              let pnameList: any[] = []
              if (ptype) {
                const item = demo1.cachePnameList.find(item => item.ptype === ptype)
                if (item) {
                  pnameList = item.pnameList
                } else {
                  // 模拟后台数据
                  Array.from(new Array(XEUtils.random(3, 8))).forEach((item, index) => {
                    pnameList.push({
                      label: \`\${ptype}-名称\${index}\`,
                      value: \`\${ptype}_\${index}\`
                    })
                  })
                  demo1.cachePnameList.push({ ptype, pnameList })
                }
              }
              demo1.pnameList = pnameList
            }

            const ptypeChangeEvent = ({ row }: any) => {
              // 类型切换时更新级联的下拉数据
              row.attr4 = ''
              updatePnameList(row)
            }

            const editActivedEvent: VxeTableEvents.EditActived = ({ row }) => {
              updatePnameList(row)
            }

            return {
              xTable,
              demo1,
              formatProjectType,
              insertEvent,
              formatPanmeLabel,
              ptypeChangeEvent,
              editActivedEvent
            }
          }
        })
        `
      ]
    }
  }
})
</script>
