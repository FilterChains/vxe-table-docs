<template>
  <div>
    <h2>{{ $t('app.aside.nav.install') }}</h2>
    <p class="tip">
      推荐使用 npm 的方式安装，它能更好地和 <a class="link" href="https://webpack.js.org/">webpack</a>、<a class="link" href="https://vitejs.dev/">vite</a> 等打包工具配合使用。<br>
      依赖库： <a class="link" href="https://vxetable.cn/xe-utils" target="_blank">xe-utils</a>&nbsp;&nbsp;<a class="link" href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D">vue 3.2+</a><br>
    </p>
    <pre>
      <pre-code class="shell">
        npm install xe-utils vxe-table
      </pre-code>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <h2>CDN</h2>
    <p class="tip">
      可以通过 <a class="link" href="https://unpkg.com/vxe-table/">unpkg</a> 或 <a class="link" href="https://cdn.jsdelivr.net/npm/vxe-table/">cdnjs</a> 获取到最新版本的资源，并在页面上引入即可<br>
      <span class="red">（注：不建议将不受信任的CDN地址用于生产，因为该连接随时都可能会失效，导致项目挂掉，使用CDN方式记得锁定版本号，锁定版本的方法请查看 <a class="link" href="https://unpkg.com/">unpkg.com</a>）</span>
    </p>
    <pre>
      <pre-code class="xml">
        &lt;!-- 引入样式 --&gt;
        &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table/lib/style.css"&gt;
        &lt;!-- 引入vue --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
        &lt;!-- 引入组件 --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table"&gt;&lt;/script&gt;
      </pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      demoCodes: [
        `
        import { App, createApp } = 'vue'
        import VXETable from 'vxe-table'
        import 'vxe-table/lib/style.css'

        function useTable (app: App) {
          app.use(VXETable)
        }

        createApp(App).use(useTable).mount('#app')
        `
      ]
    }
  }
})
</script>
