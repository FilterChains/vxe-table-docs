<template>
  <div>
    <p class="tip">树形结构，增删改查</p>

    <vxe-toolbar :refresh="{query: reload}" export print custom>
      <template #buttons>
        <vxe-button @click="insertEvent">新增</vxe-button>
        <vxe-button @click="getInsertEvent">获取新增</vxe-button>
        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      resizable
      show-overflow
      keep-source
      ref="xTable"
      :row-config="{keyField: 'id'}"
      :print-config="{}"
      :export-config="{}"
      :loading="loading"
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="size" title="Size" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.size" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="type" title="Type" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.type" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date" type="date" transfer></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="500">
        <template #default="{ row }">
          <vxe-button type="text" status="primary" @click="insertRow(row, 'current')">插入节点</vxe-button>
          <vxe-button type="text" status="primary" @click="insertRow(row, 'top')">顶部插入节点</vxe-button>
          <vxe-button type="text" status="primary" @click="insertRow(row, 'bottom')">尾部插入子节点</vxe-button>
          <vxe-button type="text" status="primary" @click="removeRow(row)">删除节点</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'

export default {
  data () {
    return {
      loading: false,
      tableData: [],
      demoCodes: [
        `
        <vxe-toolbar :refresh="{query: reload}" export print custom>
          <template #buttons>
            <vxe-button @click="insertEvent">新增</vxe-button>
            <vxe-button @click="getInsertEvent">获取新增</vxe-button>
            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          resizable
          show-overflow
          keep-source
          ref="xTable"
          row-id="id"
          :print-config="{}"
          :export-config="{}"
          :loading="loading"
          :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
          :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
          :data="tableData">
          <vxe-column type="checkbox" width="60"></vxe-column>
          <vxe-column field="name" title="Name" tree-node></vxe-column>
          <vxe-column field="size" title="Size" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.size" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="type" title="Type" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.type" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="date" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.date" type="date" transfer></vxe-input>
            </template>
          </vxe-column>
          <vxe-column title="操作" width="500">
            <template #default="{ row }">
              <vxe-button type="text" status="primary" @click="insertRow(row, 'current')">插入节点</vxe-button>
              <vxe-button type="text" status="primary" @click="insertRow(row, 'top')">顶部插入节点</vxe-button>
              <vxe-button type="text" status="primary" @click="insertRow(row, 'bottom')">尾部插入子节点</vxe-button>
              <vxe-button type="text" status="primary" @click="removeRow(row)">删除节点</vxe-button>
            </template>
          </vxe-column>
        </vxe-table>
        `,
        `
        import XEUtils from 'xe-utils'
        import VXETable from 'vxe-table'
        
        export default {
          data () {
            return {
              loading: false,
              tableData: []
            }
          },
          created () {
            this.findList()
          },
          methods: {
            findList () {
              this.loading = true
              return new Promise(resolve => {
                setTimeout(() => {
                  this.tableData = [
                    { id: 10000, parentId: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
                    { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
                    { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
                    { id: 20045, parentId: 24300, name: 'vxe-table test abc4', type: 'html', size: 600, date: '2021-04-01' },
                    { id: 10053, parentId: 24300, name: 'vxe-table test abc96', type: 'avi', size: null, date: '2021-04-01' },
                    { id: 24330, parentId: 10053, name: 'vxe-table test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                    { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                    { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                    { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
                    { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                    { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                    { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                    { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                    { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                    { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                    { id: 24555, parentId: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-01' },
                    { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                    { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
                  ]
                  this.loading = false
                  resolve()
                }, 300)
              })
            },
            insertEvent () {
              const $table = this.$refs.xTable
              const newRow = {
                name: '新数据',
                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
              }
              $table.insert(newRow).then(({ row }) => $table.setActiveRow(row))
            },
            async insertRow (currRow, locat) {
              const $table = this.$refs.xTable
              // 如果 null 则插入到目标节点顶部
              // 如果 -1 则插入到目标节点底部
              // 如果 row 则有插入到效的目标节点该行的位置
              if (locat === 'current') {
                const record = {
                  name: '新数据',
                  id: Date.now(),
                  parentId: currRow.parentId, // 父节点必须与当前行一致
                  date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
                }
                const { row: newRow } = await $table.insertAt(record, currRow)
                await $table.setActiveRow(newRow) // 插入子节点
              } else if (locat === 'top') {
                const record = {
                  name: '新数据',
                  id: Date.now(),
                  parentId: currRow.id, // 需要指定父节点，自动插入该节点中
                  date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
                }
                const { row: newRow } = await $table.insert(record)
                await $table.setTreeExpand(currRow, true) // 将父节点展开
                await $table.setActiveRow(newRow) // 插入子节点
              } else if (locat === 'bottom') {
                const record = {
                  name: '新数据',
                  id: Date.now(),
                  parentId: currRow.id, // 需要指定父节点，自动插入该节点中
                  date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
                }
                const { row: newRow } = await $table.insertAt(record, -1)
                await $table.setTreeExpand(currRow, true) // 将父节点展开
                await $table.setActiveRow(newRow) // 插入子节点
              }
            },
            async removeRow (row) {
              const $table = this.$refs.xTable
              await $table.remove(row)
            },
            reload () {
              const $table = this.$refs.xTable
              // 清除所有状态
              $table.clearAll()
              return this.findList()
            },
            getInsertEvent () {
              const $table = this.$refs.xTable
              const insertRecords = $table.getInsertRecords()
              VXETable.modal.alert(insertRecords.length)
            },
            getRemoveEvent () {
              const $table = this.$refs.xTable
              const removeRecords = $table.getRemoveRecords()
              VXETable.modal.alert(removeRecords.length)
            },
            getUpdateEvent () {
              const $table = this.$refs.xTable
              const updateRecords = $table.getUpdateRecords()
              VXETable.modal.alert(updateRecords.length)
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.findList()
  },
  methods: {
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          this.tableData = [
            { id: 10000, parentId: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
            { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
            { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
            { id: 20045, parentId: 24300, name: 'vxe-table test abc4', type: 'html', size: 600, date: '2021-04-01' },
            { id: 10053, parentId: 24300, name: 'vxe-table test abc96', type: 'avi', size: null, date: '2021-04-01' },
            { id: 24330, parentId: 10053, name: 'vxe-table test abc5', type: 'txt', size: 25, date: '2021-10-01' },
            { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
            { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
            { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 24555, parentId: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-01' },
            { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
          ]
          this.loading = false
          resolve()
        }, 300)
      })
    },
    insertEvent () {
      const $table = this.$refs.xTable
      const newRow = {
        name: '新数据',
        date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
      }
      $table.insert(newRow).then(({ row }) => $table.setActiveRow(row))
    },
    async insertRow (currRow, locat) {
      const $table = this.$refs.xTable
      // 如果 null 则插入到目标节点顶部
      // 如果 -1 则插入到目标节点底部
      // 如果 row 则有插入到效的目标节点该行的位置
      if (locat === 'current') {
        const record = {
          name: '新数据',
          id: Date.now(),
          parentId: currRow.parentId, // 父节点必须与当前行一致
          date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
        const { row: newRow } = await $table.insertAt(record, currRow)
        await $table.setActiveRow(newRow) // 插入子节点
      } else if (locat === 'top') {
        const record = {
          name: '新数据',
          id: Date.now(),
          parentId: currRow.id, // 需要指定父节点，自动插入该节点中
          date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
        const { row: newRow } = await $table.insert(record)
        await $table.setTreeExpand(currRow, true) // 将父节点展开
        await $table.setActiveRow(newRow) // 插入子节点
      } else if (locat === 'bottom') {
        const record = {
          name: '新数据',
          id: Date.now(),
          parentId: currRow.id, // 需要指定父节点，自动插入该节点中
          date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
        const { row: newRow } = await $table.insertAt(record, -1)
        await $table.setTreeExpand(currRow, true) // 将父节点展开
        await $table.setActiveRow(newRow) // 插入子节点
      }
    },
    async removeRow (row) {
      const $table = this.$refs.xTable
      await $table.remove(row)
    },
    reload () {
      const $table = this.$refs.xTable
      // 清除所有状态
      $table.clearAll()
      return this.findList()
    },
    getInsertEvent () {
      const $table = this.$refs.xTable
      const insertRecords = $table.getInsertRecords()
      VXETable.modal.alert(insertRecords.length)
    },
    getRemoveEvent () {
      const $table = this.$refs.xTable
      const removeRecords = $table.getRemoveRecords()
      VXETable.modal.alert(removeRecords.length)
    },
    getUpdateEvent () {
      const $table = this.$refs.xTable
      const updateRecords = $table.getUpdateRecords()
      VXETable.modal.alert(updateRecords.length)
    }
  }
}
</script>
