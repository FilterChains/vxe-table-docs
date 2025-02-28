<template>
  <div>
    <p class="tip">
      表格不支持拖动功能；简单示例： <a class="link" href="https://www.npmjs.com/package/sortablejs" target="_blank">sortablejs</a> 等库实现行拖动<br>
      <a class="link" href="https://www.npmjs.com/package/vxe-table" target="_blank">vxe-table</a> 作为表格组件，可以很容易跟其他优秀的组件库互相集成，以下为简单示例可供参考。<br>
      由于直接操作了 Dom 节点，需要与 Vue 的数据同步，必须设置 rrow-config.useKey，并且自行根据 vue 的规则自行实现数据同步<br>
      <span class="red">（注：该示例仅供参考，具体请自行实现）</span>
    </p>

    <vxe-table
      border
      ref="xTable1"
      class="sortable-row-demo"
      :row-config="{useKey: true}"
      :scroll-y="{enabled: false}"
      :data="demo1.tableData">
      <vxe-column width="60">
        <template #default>
          <span class="drag-btn">
            <i class="vxe-icon-edit"></i>
          </span>
        </template>
        <template #header>
          <vxe-tooltip v-model="demo1.showHelpTip" content="按住后可以上下拖动排序！" enterable>
            <i class="vxe-icon-question-circle-fill" @click="demo1.showHelpTip = !demo1.showHelpTip"></i>
          </vxe-tooltip>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
      <pre-code class="css">{{ demoCodes[2] }}</pre-code>
    </pre>

    <p class="tip">
      简单示例：<br>
      <span class="red">（注：该示例仅供参考，具体请自行实现）</span>
    </p>

    <vxe-grid ref="xGrid2" v-bind="gridOptions2">
      <template #dragBtn>
        <span class="drag-btn">
          <i class="vxe-icon-edit"></i>
        </span>
      </template>
      <template #dragTip>
        <vxe-tooltip v-model="demo2.showHelpTip" content="按住后可以上下拖动排序！" enterable>
          <i class="vxe-icon-question-circle-fill" @click="demo2.showHelpTip = !demo2.showHelpTip"></i>
        </vxe-tooltip>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[3] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[4] }}</pre-code>
      <pre-code class="css">{{ demoCodes[5] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onUnmounted, nextTick } from 'vue'
import { VXETable, VxeGridInstance, VxeGridProps, VxeTableInstance } from 'vxe-table'
import XEUtils from 'xe-utils'
import Sortable from 'sortablejs'

export default defineComponent({
  setup () {
    const xTable1 = ref({} as VxeTableInstance)

    const demo1 = reactive({
      showHelpTip: false,
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
      ]
    })

    let sortable1: any

    const rowDrop = () => {
      const $table = xTable1.value
      sortable1 = Sortable.create($table.$el.querySelector('.body--wrapper>.vxe-table--body tbody'), {
        handle: '.drag-btn',
        onEnd: (sortableEvent) => {
          const newIndex = sortableEvent.newIndex as number
          const oldIndex = sortableEvent.oldIndex as number
          const currRow = demo1.tableData.splice(oldIndex, 1)[0]
          demo1.tableData.splice(newIndex, 0, currRow)
        }
      })
    }

    const demo2 = reactive({
      showHelpTip: false
    })

    const xGrid2 = ref({} as VxeGridInstance)

    const gridOptions2 = reactive({
      border: true,
      class: 'sortable-tree-demo',
      rowConfig: {
        useKey: true
      },
      scrollY: {
        enabled: false
      },
      treeConfig: {
        children: 'children'
      },
      columns: [
        { width: 60, slots: { default: 'dragBtn', header: 'dragTip' } },
        { field: 'name', title: 'Name', treeNode: true },
        { field: 'size', title: 'Size' },
        { field: 'type', title: 'Type' },
        { field: 'date', title: 'Date' }
      ],
      data: [
        { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        {
          id: 1005,
          name: 'Test2',
          type: 'mp4',
          size: null,
          date: '2021-04-01',
          children: [
            { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
            { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
            {
              id: 10053,
              name: 'test abc96',
              type: 'avi',
              size: null,
              date: '2021-04-01',
              children: [
                { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
              ]
            }
          ]
        },
        { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
        { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
      ]
    } as VxeGridProps)

    let sortable2: any

    const treeDrop = () => {
      const $grid = xGrid2.value
      sortable2 = Sortable.create($grid.$el.querySelector('.body--wrapper>.vxe-table--body tbody') as HTMLElement, {
        handle: '.drag-btn',
        onEnd: (sortableEvent) => {
          const targetTrElem = sortableEvent.item
          const oldIndex = sortableEvent.oldIndex as number
          const options = { children: 'children' }
          const wrapperElem = targetTrElem.parentNode as HTMLElement
          const prevTrElem = targetTrElem.previousElementSibling as HTMLElement
          const tableTreeData = gridOptions2.data as any[]
          const targetRowNode = $grid.getRowNode(targetTrElem)
          if (!targetRowNode) {
            return
          }
          const selfRow = targetRowNode.item
          const selfNode = XEUtils.findTree(tableTreeData, row => row === selfRow, options)
          if (prevTrElem) {
            // 移动到节点
            const prevRowNode = $grid.getRowNode(prevTrElem)
            if (!prevRowNode) {
              return
            }
            const prevRow = prevRowNode.item
            const prevNode = XEUtils.findTree(tableTreeData, row => row === prevRow, options)
            if (XEUtils.findTree(selfRow[options.children], row => prevRow === row, options)) {
              // 错误的移动
              const oldTrElem = wrapperElem.children[oldIndex]
              wrapperElem.insertBefore(targetTrElem, oldTrElem)
              return VXETable.modal.message({ content: '不允许自己给自己拖动！', status: 'error' })
            }
            const currRow = selfNode.items.splice(selfNode.index, 1)[0]
            if ($grid.isTreeExpandByRow(prevRow)) {
              // 移动到当前的子节点
              prevRow[options.children].splice(0, 0, currRow)
            } else {
              // 移动到相邻节点
              prevNode.items.splice(prevNode.index + (selfNode.index < prevNode.index ? 0 : 1), 0, currRow)
            }
          } else {
            // 移动到第一行
            const currRow = selfNode.items.splice(selfNode.index, 1)[0]
            tableTreeData.unshift(currRow)
          }
          // 如果变动了树层级，需要刷新数据
          gridOptions2.data = [...tableTreeData]
        }
      })
    }

    let initTime: any
    nextTick(() => {
      // 加载完成之后在绑定拖动事件
      initTime = setTimeout(() => {
        rowDrop()
        treeDrop()
      }, 500)
    })

    onUnmounted(() => {
      clearTimeout(initTime)
      if (sortable1) {
        sortable1.destroy()
      }
      if (sortable2) {
        sortable2.destroy()
      }
    })

    return {
      xTable1,
      demo1,
      rowDrop,
      xGrid2,
      demo2,
      gridOptions2,
      treeDrop,
      demoCodes: [
        `
        <vxe-table
          border
          ref="xTable1"
          class="sortable-row-demo"
          :row-config="{useKey: true}"
          :scroll-y="{enabled: false}"
          :data="demo1.tableData">
          <vxe-column width="60">
            <template #default>
              <span class="drag-btn">
                <i class="vxe-icon-edit"></i>
              </span>
            </template>
            <template #header>
              <vxe-tooltip v-model="demo1.showHelpTip" content="按住后可以上下拖动排序！" enterable>
                <i class="vxe-icon-question-circle-fill" @click="demo1.showHelpTip = !demo1.showHelpTip"></i>
              </vxe-tooltip>
            </template>
          </vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column field="address" title="Address" show-overflow></vxe-column>
        </vxe-table>
        `,
        `
        import { defineComponent, reactive, ref, onUnmounted, nextTick } from 'vue'
        import { VXETable, VxeGridInstance, VxeGridProps, VxeTableInstance } from 'vxe-table'
        import XEUtils from 'xe-utils'
        import Sortable from 'sortablejs'

        export default defineComponent({
          setup () {
            const xTable1 = ref({} as VxeTableInstance)

            const demo1 = reactive({
              showHelpTip: false,
              tableData: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
              ]
            })

            let sortable1: any

            const rowDrop = () => {
              const $table = xTable1.value
              sortable1 = Sortable.create($table.$el.querySelector('.body--wrapper>.vxe-table--body tbody'), {
                handle: '.drag-btn',
                onEnd: (sortableEvent) => {
                  const newIndex = sortableEvent.newIndex as number
                  const oldIndex = sortableEvent.oldIndex as number
                  const currRow = demo1.tableData.splice(oldIndex, 1)[0]
                  demo1.tableData.splice(newIndex, 0, currRow)
                }
              })
            }

            let initTime: any
            nextTick(() => {
              // 加载完成之后在绑定拖动事件
              initTime = setTimeout(() => {
                rowDrop()
              }, 500)
            })

            onUnmounted(() => {
              clearTimeout(initTime)
              if (sortable1) {
                sortable1.destroy()
              }
            })

            return {
              xTable1,
              demo1,
              rowDrop
            }
          }
        })
        `,
        `
        .sortable-row-demo .drag-btn {
          cursor: move;
          font-size: 12px;
        }
        .sortable-row-demo .vxe-body--row.sortable-ghost,
        .sortable-row-demo .vxe-body--row.sortable-chosen {
          background-color: #dfecfb;
        }
        `,
        `
        <vxe-grid ref="xGrid2" v-bind="gridOptions2">
          <template #dragBtn>
            <span class="drag-btn">
              <i class="vxe-icon-edit"></i>
            </span>
          </template>
          <template #dragTip>
            <vxe-tooltip v-model="demo2.showHelpTip" content="按住后可以上下拖动排序！" enterable>
              <i class="vxe-icon-question-circle-fill" @click="demo2.showHelpTip = !demo2.showHelpTip"></i>
            </vxe-tooltip>
          </template>
        </vxe-grid>
        `,
        `
        import { defineComponent, reactive, ref, onUnmounted, nextTick } from 'vue'
        import { VXETable, VxeGridInstance, VxeGridProps, VxeTableInstance } from 'vxe-table'
        import XEUtils from 'xe-utils'
        import Sortable from 'sortablejs'

        export default defineComponent({
          setup () {
            const demo2 = reactive({
              showHelpTip: false
            })

            const xGrid2 = ref({} as VxeGridInstance)

            const gridOptions2 = reactive({
              border: true,
              class: 'sortable-tree-demo',
              rowConfig: {
                useKey: true
              },
              scrollY: {
                enabled: false
              },
              treeConfig: {
                children: 'children'
              },
              columns: [
                { width: 60, slots: { default: 'dragBtn', header: 'dragTip' } },
                { field: 'name', title: 'Name', treeNode: true },
                { field: 'size', title: 'Size' },
                { field: 'type', title: 'Type' },
                { field: 'date', title: 'Date' }
              ],
              data: [
                { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
                {
                  id: 1005,
                  name: 'Test2',
                  type: 'mp4',
                  size: null,
                  date: '2021-04-01',
                  children: [
                    { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
                    { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
                    {
                      id: 10053,
                      name: 'test abc96',
                      type: 'avi',
                      size: null,
                      date: '2021-04-01',
                      children: [
                        { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                        { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                        { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
                      ]
                    }
                  ]
                },
                { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
                { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
              ]
            } as VxeGridProps)

            let sortable2: any

            const treeDrop = () => {
              const $grid = xGrid2.value
              sortable2 = Sortable.create($grid.$el.querySelector('.body--wrapper>.vxe-table--body tbody') as HTMLElement, {
                handle: '.drag-btn',
                onEnd: (sortableEvent) => {
                  const targetTrElem = sortableEvent.item
                  const oldIndex = sortableEvent.oldIndex as number
                  const options = { children: 'children' }
                  const wrapperElem = targetTrElem.parentNode as HTMLElement
                  const prevTrElem = targetTrElem.previousElementSibling as HTMLElement
                  const tableTreeData = gridOptions2.data as any[]
                  const targetRowNode = $grid.getRowNode(targetTrElem)
                  if (!targetRowNode) {
                    return
                  }
                  const selfRow = targetRowNode.item
                  const selfNode = XEUtils.findTree(tableTreeData, row => row === selfRow, options)
                  if (prevTrElem) {
                    // 移动到节点
                    const prevRowNode = $grid.getRowNode(prevTrElem)
                    if (!prevRowNode) {
                      return
                    }
                    const prevRow = prevRowNode.item
                    const prevNode = XEUtils.findTree(tableTreeData, row => row === prevRow, options)
                    if (XEUtils.findTree(selfRow[options.children], row => prevRow === row, options)) {
                      // 错误的移动
                      const oldTrElem = wrapperElem.children[oldIndex]
                      wrapperElem.insertBefore(targetTrElem, oldTrElem)
                      return VXETable.modal.message({ content: '不允许自己给自己拖动！', status: 'error' })
                    }
                    const currRow = selfNode.items.splice(selfNode.index, 1)[0]
                    if ($grid.isTreeExpandByRow(prevRow)) {
                      // 移动到当前的子节点
                      prevRow[options.children].splice(0, 0, currRow)
                    } else {
                      // 移动到相邻节点
                      prevNode.items.splice(prevNode.index + (selfNode.index < prevNode.index ? 0 : 1), 0, currRow)
                    }
                  } else {
                    // 移动到第一行
                    const currRow = selfNode.items.splice(selfNode.index, 1)[0]
                    tableTreeData.unshift(currRow)
                  }
                  // 如果变动了树层级，需要刷新数据
                  gridOptions2.data = [...tableTreeData]
                }
              })
            }

            let initTime: any
            nextTick(() => {
              // 加载完成之后在绑定拖动事件
              initTime = setTimeout(() => {
                rowDrop()
              }, 500)
            })

            onUnmounted(() => {
              clearTimeout(initTime)
              if (sortable2) {
                sortable2.destroy()
              }
            })

            return {
              xGrid2,
              demo2,
              gridOptions2,
              treeDrop
            }
          }
        })
        `,
        `
        .sortable-tree-demo .drag-btn {
          cursor: move;
          font-size: 12px;
        }
        .sortable-tree-demo .vxe-body--row.sortable-ghost,
        .sortable-tree-demo .vxe-body--row.sortable-chosen {
          background-color: #dfecfb;
        }
        `
      ]
    }
  }
})
</script>

<style lang="scss">
.sortable-row-demo .drag-btn {
  cursor: move;
  font-size: 12px;
}
.sortable-row-demo .vxe-body--row.sortable-ghost,
.sortable-row-demo .vxe-body--row.sortable-chosen {
  background-color: #dfecfb;
}

.sortable-tree-demo .drag-btn {
  cursor: move;
  font-size: 12px;
}
.sortable-tree-demo .vxe-body--row.sortable-ghost,
.sortable-tree-demo .vxe-body--row.sortable-chosen {
  background-color: #dfecfb;
}
</style>
