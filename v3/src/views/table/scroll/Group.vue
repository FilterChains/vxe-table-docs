<template>
  <div>
    <p class="tip">分组表头（同时支持横向,纵向的虚拟滚动）</p>

    <vxe-table
      border
      resizable
      show-overflow
      ref="xTable"
      height="500"
      :scroll-x="{gt: 0}"
      :loading="loading">
      <vxe-column type="seq" title="序号" width="100"></vxe-column>
      <vxe-column field="name1" title="Name" width="200" sortable></vxe-column>
      <vxe-column field="name2" title="Name" width="100" sortable></vxe-column>
      <vxe-colgroup title="基本信息">
        <vxe-column field="name" title="Name" width="100" sortable></vxe-column>
        <vxe-column field="age" title="Age" width="200"></vxe-column>
        <vxe-column field="sex" title="Sex" width="100"></vxe-column>
        <vxe-column field="sex2" title="Sex" width="200"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="updateTime1" title="UpdateTime" width="200"></vxe-column>
      <vxe-colgroup title="详细信息">
        <vxe-colgroup title="分组">
          <vxe-column field="rate" title="Rate" width="150"></vxe-column>
          <vxe-column field="region" title="Region" width="200"></vxe-column>
          <vxe-column field="region1" title="Region" width="200"></vxe-column>
          <vxe-column field="region2" title="Region" width="150"></vxe-column>
          <vxe-column field="region3" title="Region" width="200"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="其他">
          <vxe-column field="time" title="Time" width="200" sortable></vxe-column>
          <vxe-column field="address" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address1" title="Address" width="300" show-overflow></vxe-column>
          <vxe-column field="address2" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address3" title="Address" width="150" show-overflow></vxe-column>
          <vxe-column field="address4" title="Address" width="150" show-overflow></vxe-column>
          <vxe-column field="address5" title="Address" width="300" show-overflow></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-colgroup title="详细信息2">
        <vxe-colgroup title="分组">
          <vxe-column field="rate2" title="Rate" width="150"></vxe-column>
          <vxe-column field="region22" title="Region" width="200"></vxe-column>
          <vxe-column field="region21" title="Region" width="200"></vxe-column>
          <vxe-column field="region22" title="Region" width="150"></vxe-column>
          <vxe-column field="region23" title="Region" width="200"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="其他2">
          <vxe-column field="time22" title="Time" width="200" sortable></vxe-column>
          <vxe-column field="address2" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address21" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address22" title="Address" width="150" show-overflow></vxe-column>
          <vxe-column field="address23" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address24" title="Address" width="150" show-overflow></vxe-column>
          <vxe-column field="address25" title="Address" width="100" show-overflow></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-column field="updateTime" title="UpdateTime" width="100"></vxe-column>
      <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      demoCodes: [
        `
        <vxe-table
          border
          resizable
          show-overflow
          ref="xTable"
          height="500"
          :scroll-x="{gt: 0}"
          :loading="loading">
          <vxe-column type="seq" title="序号" width="100"></vxe-column>
          <vxe-column field="name1" title="Name" width="200" sortable></vxe-column>
          <vxe-column field="name2" title="Name" width="100" sortable></vxe-column>
          <vxe-colgroup title="基本信息">
            <vxe-column field="name" title="Name" width="100" sortable></vxe-column>
            <vxe-column field="age" title="Age" width="200"></vxe-column>
            <vxe-column field="sex" title="Sex" width="100"></vxe-column>
            <vxe-column field="sex2" title="Sex" width="200"></vxe-column>
          </vxe-colgroup>
          <vxe-column field="updateTime1" title="UpdateTime" width="200"></vxe-column>
          <vxe-colgroup title="详细信息">
            <vxe-colgroup title="分组">
              <vxe-column field="rate" title="Rate" width="150"></vxe-column>
              <vxe-column field="region" title="Region" width="200"></vxe-column>
              <vxe-column field="region1" title="Region" width="200"></vxe-column>
              <vxe-column field="region2" title="Region" width="150"></vxe-column>
              <vxe-column field="region3" title="Region" width="200"></vxe-column>
            </vxe-colgroup>
            <vxe-colgroup title="其他">
              <vxe-column field="time" title="Time" width="200" sortable></vxe-column>
              <vxe-column field="address" title="Address" width="100" show-overflow></vxe-column>
              <vxe-column field="address1" title="Address" width="300" show-overflow></vxe-column>
              <vxe-column field="address2" title="Address" width="100" show-overflow></vxe-column>
              <vxe-column field="address3" title="Address" width="150" show-overflow></vxe-column>
              <vxe-column field="address4" title="Address" width="150" show-overflow></vxe-column>
              <vxe-column field="address5" title="Address" width="300" show-overflow></vxe-column>
            </vxe-colgroup>
          </vxe-colgroup>
          <vxe-colgroup title="详细信息2">
            <vxe-colgroup title="分组">
              <vxe-column field="rate2" title="Rate" width="150"></vxe-column>
              <vxe-column field="region22" title="Region" width="200"></vxe-column>
              <vxe-column field="region21" title="Region" width="200"></vxe-column>
              <vxe-column field="region22" title="Region" width="150"></vxe-column>
              <vxe-column field="region23" title="Region" width="200"></vxe-column>
            </vxe-colgroup>
            <vxe-colgroup title="其他2">
              <vxe-column field="time22" title="Time" width="200" sortable></vxe-column>
              <vxe-column field="address2" title="Address" width="100" show-overflow></vxe-column>
              <vxe-column field="address21" title="Address" width="100" show-overflow></vxe-column>
              <vxe-column field="address22" title="Address" width="150" show-overflow></vxe-column>
              <vxe-column field="address23" title="Address" width="100" show-overflow></vxe-column>
              <vxe-column field="address24" title="Address" width="150" show-overflow></vxe-column>
              <vxe-column field="address25" title="Address" width="100" show-overflow></vxe-column>
            </vxe-colgroup>
          </vxe-colgroup>
          <vxe-column field="updateTime" title="UpdateTime" width="100"></vxe-column>
          <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false
            }
          },
          mounted () {
            this.loading = true
            this.$nextTick(() => {
              const $table = this.$refs.xTable
              this.mockList(1000).then(data => {
                this.loading = false
                if ($table) {
                  $table.loadData(data)
                }
              })
            })
          },
          methods: {
            mockList (size) {
              return new Promise(resolve => {
                const list = []
                for (let index = 0; index < size; index++) {
                  list.push({
                    name: \`名称\${index}\`,
                    sex: '0',
                    num: 123,
                    age: 18,
                    num2: 234,
                    rate: 3,
                    address: 'shenzhen'
                  })
                }
                resolve(list)
              })
            }
          }
        }
        `
      ]
    }
  },
  mounted () {
    this.loading = true
    this.$nextTick(() => {
      const $table = this.$refs.xTable
      this.mockList(1000).then(data => {
        this.loading = false
        if ($table) {
          $table.loadData(data)
        }
      })
    })
  },
  methods: {
    mockList (size) {
      return new Promise(resolve => {
        const list = []
        for (let index = 0; index < size; index++) {
          list.push({
            name: `名称${index}`,
            sex: '0',
            num: 123,
            age: 18,
            num2: 234,
            rate: 3,
            address: 'shenzhen'
          })
        }
        resolve(list)
      })
    }
  }
}
</script>
