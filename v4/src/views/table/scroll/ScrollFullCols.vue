<template>
  <div>
    <p class="tip">
      虚拟滚动渲染，左右固定列<br>
      大数据不建议使用双向绑定的 <table-api-link name="data"/> 属性，建议使用 <table-api-link prop="loadData"/>/<table-api-link prop="loadColumn"/> 函数<br>
      对于多选 type=<table-column-api-link prop="checkbox"/> 当数据量海量时应该绑定 <table-api-link prop="checkField"/> 属性渲染速度更快<br>
      <span class="green">（性能优化：横向虚拟滚动由列宽决定性能，每一列的列宽越大就越流畅；纵向虚拟滚动由行高决定性能，每一行的高度越高就越流畅）</span>
    </p>

    <vxe-grid ref="xGrid" v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-button @click="loadColumnAndData(50, 20)">50列20条</vxe-button>
        <vxe-button @click="loadColumnAndData(100, 50)">100列50条</vxe-button>
        <vxe-button @click="loadColumnAndData(200, 100)">200列100条</vxe-button>
        <vxe-button @click="loadColumnAndData(1000, 5000)">1k列5k条</vxe-button>
        <vxe-button @click="loadColumnAndData(5000, 10000)">5k列1w条</vxe-button>
        <vxe-button @click="loadColumnAndData(10000, 100000)">1w列10w条</vxe-button>
        <vxe-button @click="loadColumnAndData(50000, 200000)">5w列20w条</vxe-button>
        <vxe-button @click="loadColumnAndData(100000, 50000)">10w列5w条</vxe-button>
        <vxe-button @click="$refs.xGrid.setAllCheckboxRow(true)">所有选中</vxe-button>
        <vxe-button @click="$refs.xGrid.clearCheckboxRow()">清除选中</vxe-button>
        <vxe-button @click="getSelectEvent">获取选中</vxe-button>
      </template>
    </vxe-grid>

    <pre>
      <pre-code>
        | Arrow Up ↑ | 匀速向上滚动数据 |
        | Arrow Down ↓ | 匀速向下滚动数据 |
        | Arrow Left ← | 匀速向左滚动数据 |
        | Arrow Right → | 匀速向右滚动数据 |
        | Page Up | 向上翻页滚动 |
        | Page Down | 向下翻页滚动 |
        | Spacebar | 翻页滚动 |
        | Home | 滚动到顶部 |
        | End | 滚动到底部 |
      </pre-code>
    </pre>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, ref } from 'vue'
import { VXETable, VxeGridInstance, VxeGridProps } from 'vxe-table'

const columnList: any[] = []
const dataList: any[] = []

export default defineComponent({
  setup () {
    const gridOptions = reactive({
      border: true,
      showOverflow: true,
      showHeaderOverflow: true,
      height: 600,
      loading: false,
      rowConfig: {
        useKey: true,
        isHover: true,
        isCurrent: true
      },
      columnConfig: {
        resizable: true
      },
      toolbarConfig: {
        slots: {
          buttons: 'toolbar_buttons'
        }
      },
      checkboxConfig: {
        checkField: 'checked',
        labelField: 'nickname'
      },
      scrollY: {
        enabled: true
      },
      scrollX: {
        enabled: true
      }
    } as VxeGridProps)

    const xGrid = ref<VxeGridInstance>()

    const mockColumns = (colSize: number): Promise<any[]> => {
      return new Promise(resolve => {
        setTimeout(() => {
          const currSize = columnList.length
          if (currSize < colSize) {
            for (let i = currSize; i < colSize; i++) {
              columnList.push({
                field: 'attr' + i,
                title: i === 0 ? '' : 'Attr' + i,
                width: i === 0 ? 60 : 140,
                type: i === 0 ? 'checkbox' : null,
                fixed: i < 1 ? 'left' : null
              })
            }
          }
          // 模拟数据
          const result = JSON.parse(JSON.stringify(columnList.slice(0, colSize)))
          resolve(result)
        }, 100)
      })
    }

    const mockList = (rowSize: number): Promise<any[]> => {
      return new Promise(resolve => {
        setTimeout(() => {
          const currSize = dataList.length
          if (currSize < rowSize) {
            for (let i = currSize; i < rowSize; i++) {
              dataList.push({
                checked: false,
                attr0: 'attr0_row_' + i,
                attr1: 'attr1_row_' + i,
                attr2: 'attr2_row_' + i,
                attr3: 'attr3_row_' + i,
                attr4: 'attr3_row_' + i,
                attr5: 'attr3_row_' + i,
                attr10: 'attr10_row_' + i,
                attr11: 'attr11_row_' + i,
                attr12: 'attr12_row_' + i,
                attr13: 'attr12_row_' + i,
                attr14: 'attr12_row_' + i,
                attr50: 'attr50_row_' + i,
                attr51: 'attr51_row_' + i,
                attr52: 'attr52_row_' + i,
                attr53: 'attr53_row_' + i,
                attr54: 'attr54_row_' + i,
                attr100: 'attr100_row_' + i,
                attr101: 'attr101_row_' + i,
                attr102: 'attr102_row_' + i,
                attr103: 'attr103_row_' + i,
                attr105: 'attr105_row_' + i,
                attr104: 'attr104_row_' + i,
                attr106: 'attr106_row_' + i,
                attr107: 'attr107_row_' + i,
                attr400: 'attr100_row_' + i,
                attr401: 'attr401_row_' + i,
                attr402: 'attr402_row_' + i,
                attr403: 'attr403_row_' + i,
                attr404: 'attr404_row_' + i,
                attr405: 'attr405_row_' + i,
                attr406: 'attr405_row_' + i,
                attr407: 'attr405_row_' + i,
                attr1000: 'attr100_row_' + i,
                attr1001: 'attr1001_row_' + i,
                attr1002: 'attr1002_row_' + i,
                attr1003: 'attr1003_row_' + i,
                attr1004: 'attr1004_row_' + i,
                attr1005: 'attr1005_row_' + i,
                attr1006: 'attr1005_row_' + i,
                attr1007: 'attr1005_row_' + i,
                attr10005: 'attr10005_row_' + i,
                attr10006: 'attr10005_row_' + i,
                attr10007: 'attr10005_row_' + i,
                attr150005: 'attr100005_row_' + i,
                attr150006: 'attr100005_row_' + i,
                attr150007: 'attr100005_row_' + i
              })
            }
          }
          // 模拟数据
          const result = JSON.parse(JSON.stringify(dataList.slice(0, rowSize)))
          resolve(result)
        }, 100)
      })
    }

    const loadColumnAndData = (colSize: number, rowSize: number) => {
      gridOptions.loading = true
      Promise.all([
        mockColumns(colSize),
        mockList(rowSize)
      ]).then(rest => {
        const columns = rest[0]
        const data = rest[1]
        const startTime = Date.now()
        const $grid = xGrid.value
        // 使用函数式加载
        if ($grid) {
          Promise.all([
            $grid.reloadColumn(columns),
            $grid.reloadData(data)
          ]).then(() => {
            VXETable.modal.message({ content: `渲染 ${colSize} 列 ${rowSize} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
            gridOptions.loading = false
          })
        } else {
          gridOptions.loading = false
        }
      })
    }

    const getSelectEvent = () => {
      const $grid = xGrid.value
      if ($grid) {
        const selectRecords = $grid.getCheckboxRecords()
        VXETable.modal.alert(`${selectRecords.length}`)
      }
    }

    nextTick(() => {
      loadColumnAndData(20, 10)
    })

    return {
      xGrid,
      gridOptions,
      loadColumnAndData,
      getSelectEvent,
      demoCodes: [
        `
        <vxe-grid ref="xGrid" v-bind="gridOptions">
          <template #toolbar_buttons>
            <vxe-button @click="loadColumnAndData(50, 20)">50列20条</vxe-button>
            <vxe-button @click="loadColumnAndData(100, 50)">100列50条</vxe-button>
            <vxe-button @click="loadColumnAndData(200, 100)">200列100条</vxe-button>
            <vxe-button @click="loadColumnAndData(1000, 5000)">1k列5k条</vxe-button>
            <vxe-button @click="loadColumnAndData(5000, 10000)">5k列1w条</vxe-button>
            <vxe-button @click="loadColumnAndData(10000, 100000)">1w列10w条</vxe-button>
            <vxe-button @click="loadColumnAndData(50000, 200000)">5w列20w条</vxe-button>
            <vxe-button @click="loadColumnAndData(100000, 50000)">10w列5w条</vxe-button>
            <vxe-button @click="$refs.xGrid.setAllCheckboxRow(true)">所有选中</vxe-button>
            <vxe-button @click="$refs.xGrid.clearCheckboxRow()">清除选中</vxe-button>
            <vxe-button @click="getSelectEvent">获取选中</vxe-button>
          </template>
        </vxe-grid>
        `,
        `
        import { defineComponent, nextTick, reactive, ref } from 'vue'
        import { VXETable, VxeGridInstance, VxeGridProps } from 'vxe-table'

        const columnList: any[] = []
        const dataList: any[] = []

        export default defineComponent({
          setup () {
            const gridOptions = reactive({
              border: true,
              showOverflow: true,
              showHeaderOverflow: true,
              height: 600,
              loading: false,
              rowConfig: {
                useKey: true,
                isHover: true,
                isCurrent: true
              },
              columnConfig: {
                resizable: true
              },
              toolbarConfig: {
                slots: {
                  buttons: 'toolbar_buttons'
                }
              },
              checkboxConfig: {
                checkField: 'checked',
                labelField: 'nickname'
              }
            } as VxeGridProps)

            const xGrid = ref<VxeGridInstance>()

            const mockColumns = (colSize: number): Promise<any[]> => {
              return new Promise(resolve => {
                setTimeout(() => {
                  const currSize = columnList.length
                  if (currSize < colSize) {
                    for (let i = currSize; i < colSize; i++) {
                      columnList.push({
                        field: 'attr' + i,
                        title: i === 0 ? '' : 'Attr' + i,
                        width: i === 0 ? 60 : 140,
                        type: i === 0 ? 'checkbox' : null,
                        fixed: i < 1 ? 'left' : null
                      })
                    }
                  }
                  // 模拟数据
                  const result = JSON.parse(JSON.stringify(columnList.slice(0, colSize)))
                  resolve(result)
                }, 100)
              })
            }

            const mockList = (rowSize: number): Promise<any[]> => {
              return new Promise(resolve => {
                setTimeout(() => {
                  const currSize = dataList.length
                  if (currSize < rowSize) {
                    for (let i = currSize; i < rowSize; i++) {
                      dataList.push({
                        checked: false,
                        attr0: 'attr0_row_' + i,
                        attr1: 'attr1_row_' + i,
                        attr2: 'attr2_row_' + i,
                        attr3: 'attr3_row_' + i,
                        attr4: 'attr3_row_' + i,
                        attr5: 'attr3_row_' + i,
                        attr10: 'attr10_row_' + i,
                        attr11: 'attr11_row_' + i,
                        attr12: 'attr12_row_' + i,
                        attr13: 'attr12_row_' + i,
                        attr14: 'attr12_row_' + i,
                        attr50: 'attr50_row_' + i,
                        attr51: 'attr51_row_' + i,
                        attr52: 'attr52_row_' + i,
                        attr53: 'attr53_row_' + i,
                        attr54: 'attr54_row_' + i,
                        attr100: 'attr100_row_' + i,
                        attr101: 'attr101_row_' + i,
                        attr102: 'attr102_row_' + i,
                        attr103: 'attr103_row_' + i,
                        attr105: 'attr105_row_' + i,
                        attr104: 'attr104_row_' + i,
                        attr106: 'attr106_row_' + i,
                        attr107: 'attr107_row_' + i,
                        attr400: 'attr100_row_' + i,
                        attr401: 'attr401_row_' + i,
                        attr402: 'attr402_row_' + i,
                        attr403: 'attr403_row_' + i,
                        attr404: 'attr404_row_' + i,
                        attr405: 'attr405_row_' + i,
                        attr406: 'attr405_row_' + i,
                        attr407: 'attr405_row_' + i,
                        attr1000: 'attr100_row_' + i,
                        attr1001: 'attr1001_row_' + i,
                        attr1002: 'attr1002_row_' + i,
                        attr1003: 'attr1003_row_' + i,
                        attr1004: 'attr1004_row_' + i,
                        attr1005: 'attr1005_row_' + i,
                        attr1006: 'attr1005_row_' + i,
                        attr1007: 'attr1005_row_' + i,
                        attr10005: 'attr10005_row_' + i,
                        attr10006: 'attr10005_row_' + i,
                        attr10007: 'attr10005_row_' + i,
                        attr150005: 'attr100005_row_' + i,
                        attr150006: 'attr100005_row_' + i,
                        attr150007: 'attr100005_row_' + i
                      })
                    }
                  }
                  // 模拟数据
                  const result = JSON.parse(JSON.stringify(dataList.slice(0, rowSize)))
                  resolve(result)
                }, 100)
              })
            }

            const loadColumnAndData = (colSize: number, rowSize: number) => {
              gridOptions.loading = true
              Promise.all([
                mockColumns(colSize),
                mockList(rowSize)
              ]).then(rest => {
                const columns = rest[0]
                const data = rest[1]
                const startTime = Date.now()
                const $grid = xGrid.value
                // 使用函数式加载
                if ($grid) {
                  Promise.all([
                    $grid.reloadColumn(columns),
                    $grid.reloadData(data)
                  ]).then(() => {
                    VXETable.modal.message({ content: \`渲染 \${colSize} 列 \${rowSize} 行，用时 \${Date.now() - startTime}毫秒\`, status: 'info' })
                    gridOptions.loading = false
                  })
                } else {
                  gridOptions.loading = false
                }
              })
            }

            const getSelectEvent = () => {
              const $grid = xGrid.value
              const selectRecords = $grid.getCheckboxRecords()
              VXETable.modal.alert(\`\${selectRecords.length}\`)
            }

            nextTick(() => {
              loadColumnAndData(20, 10)
            })

            return {
              xGrid,
              gridOptions,
              loadColumnAndData,
              getSelectEvent
            }
          }
        }
        `
      ]
    }
  }
})
</script>
