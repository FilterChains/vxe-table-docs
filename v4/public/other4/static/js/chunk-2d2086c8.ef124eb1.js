(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086c8"],{a575:function(e,n,t){"use strict";t.r(n);var l=t("7a23");const s=Object(l["createElementVNode"])("p",{class:"tip"},[Object(l["createTextVNode"])(" 内置打印模块：可以非常简单将任何视图直接输出打印，可以通过 print-config.content 或者 print-config.beforePrintMethod 自定义内容模板"),Object(l["createElementVNode"])("br"),Object(l["createElementVNode"])("span",{class:"red"},"（注：打印的样式及模板自行实现，该示例仅供参考）")],-1),a={class:"demo-code"},i=Object(l["createElementVNode"])("p",{class:"tip"},[Object(l["createTextVNode"])("打印条形码：先用第三方 "),Object(l["createElementVNode"])("a",{class:"link",href:"https://www.npmjs.com/package/jsbarcode",target:"_blank"},"jsbarcode"),Object(l["createTextVNode"])(" 库生成条形码，再用打印模块输出打印")],-1),c={class:"demo-code"},p=Object(l["createElementVNode"])("p",{class:"tip"},[Object(l["createTextVNode"])("打印二维码：先用第三方 "),Object(l["createElementVNode"])("a",{class:"link",href:"https://www.npmjs.com/package/qrcode",target:"_blank"},"qrcode"),Object(l["createTextVNode"])(" 库生成二维码，再用打印模块输出打印")],-1),o={class:"demo-code"},d=Object(l["createElementVNode"])("p",{class:"tip"},"打印自定义模板",-1),r={class:"demo-code"};function m(e,n,t,m,b,x){const v=Object(l["resolveComponent"])("vxe-button"),f=Object(l["resolveComponent"])("vxe-toolbar"),h=Object(l["resolveComponent"])("vxe-column"),y=Object(l["resolveComponent"])("vxe-table"),g=Object(l["resolveComponent"])("pre-code");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[s,Object(l["createVNode"])(f,{ref:"xToolbar1",print:""},{buttons:Object(l["withCtx"])(()=>[Object(l["createVNode"])(v,{onClick:e.printEvent1},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("打印表格")]),_:1},8,["onClick"])]),_:1},512),Object(l["createVNode"])(y,{border:"",ref:"xTable1",height:"300","print-config":e.demo1.tablePrint,data:e.demo1.tableData},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(h,{type:"checkbox",width:"60"}),Object(l["createVNode"])(h,{type:"seq",width:"60"}),Object(l["createVNode"])(h,{field:"name",title:"Name"}),Object(l["createVNode"])(h,{field:"role",title:"Role"}),Object(l["createVNode"])(h,{field:"age",title:"Age"}),Object(l["createVNode"])(h,{field:"address",title:"Address"})]),_:1},8,["print-config","data"]),Object(l["createElementVNode"])("p",a,Object(l["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(l["createElementVNode"])("pre",null,[Object(l["createTextVNode"])("      "),Object(l["createVNode"])(g,{class:"xml"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[0]),1)]),_:1}),Object(l["createTextVNode"])("\n      "),Object(l["createVNode"])(g,{class:"typescript"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[1]),1)]),_:1}),Object(l["createTextVNode"])("\n    ")]),i,Object(l["createVNode"])(f,null,{buttons:Object(l["withCtx"])(()=>[Object(l["createVNode"])(v,{onClick:e.printEvent2},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("打印条形码")]),_:1},8,["onClick"])]),_:1}),Object(l["createElementVNode"])("p",c,Object(l["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(l["createElementVNode"])("pre",null,[Object(l["createTextVNode"])("      "),Object(l["createVNode"])(g,{class:"xml"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[2]),1)]),_:1}),Object(l["createTextVNode"])("\n      "),Object(l["createVNode"])(g,{class:"typescript"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[3]),1)]),_:1}),Object(l["createTextVNode"])("\n    ")]),p,Object(l["createVNode"])(f,null,{buttons:Object(l["withCtx"])(()=>[Object(l["createVNode"])(v,{onClick:e.printEvent3},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("打印二维码")]),_:1},8,["onClick"])]),_:1}),Object(l["createElementVNode"])("p",o,Object(l["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(l["createElementVNode"])("pre",null,[Object(l["createTextVNode"])("      "),Object(l["createVNode"])(g,{class:"xml"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[4]),1)]),_:1}),Object(l["createTextVNode"])("\n      "),Object(l["createVNode"])(g,{class:"typescript"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[5]),1)]),_:1}),Object(l["createTextVNode"])("\n    ")]),d,Object(l["createVNode"])(f,null,{buttons:Object(l["withCtx"])(()=>[Object(l["createVNode"])(v,{onClick:e.printEvent4},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("打印自定义模板")]),_:1},8,["onClick"])]),_:1}),Object(l["createElementVNode"])("p",r,Object(l["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(l["createElementVNode"])("pre",null,[Object(l["createTextVNode"])("      "),Object(l["createVNode"])(g,{class:"xml"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[6]),1)]),_:1}),Object(l["createTextVNode"])("\n      "),Object(l["createVNode"])(g,{class:"typescript"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.demoCodes[7]),1)]),_:1}),Object(l["createTextVNode"])("\n    ")])])}t("14d9");var b=t("55db"),x=t("736c"),v=t.n(x),f=t("07cf"),h=t.n(f),y=Object(l["defineComponent"])({setup(){const e="\n    .title {\n      text-align: center;\n    }\n    .my-list-row {\n      display: inline-block;\n      width: 100%;\n    }\n    .my-list-col {\n      float: left;\n      width: 33.33%;\n      height: 28px;\n      line-height: 28px;\n    }\n    .my-top,\n    .my-bottom {\n      font-size: 12px;\n    }\n    .my-top {\n      margin-bottom: 5px;\n    }\n    .my-bottom {\n      margin-top: 30px;\n      text-align: right;\n    }\n    ",n='\n    <h1 class="title">出货单据</h1>\n    <div class="my-top">\n      <div class="my-list-row">\n        <div class="my-list-col">商品名称：vxe-table</div>\n        <div class="my-list-col">发货单号：X2665847132654</div>\n        <div class="my-list-col">发货日期：2020-09-20</div>\n      </div>\n      <div class="my-list-row">\n        <div class="my-list-col">收货姓名：小徐</div>\n        <div class="my-list-col">收货地址：火星第七区18号001</div>\n        <div class="my-list-col">联系电话：10086</div>\n      </div>\n    </div>\n    ',t='\n    <div class="my-bottom">\n      <div class="my-list-row">\n        <div class="my-list-col"></div>\n        <div class="my-list-col">创建人：小徐</div>\n        <div class="my-list-col">创建日期：2020-09-20</div>\n      </div>\n    </div>\n    ',s=Object(l["ref"])({}),a=Object(l["ref"])({}),i=Object(l["reactive"])({tablePrint:{sheetName:"打印表格",style:e,beforePrintMethod:({content:e})=>n+e+t},tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Shanghai"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Beijing"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shenzhen"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"test abc"}]});Object(l["nextTick"])(()=>{const e=s.value,n=a.value;e.connect(n)});const c=()=>{const l=s.value;l.print({sheetName:"打印表格",style:e,columns:[{type:"seq"},{field:"name"},{field:"role"},{field:"address"}],beforePrintMethod:({content:e})=>n+e+t})},p=[{name:"某年xx1",price:340,code:"1201545742000"},{name:"vue 开发指南",price:99,code:"1271545042006"},{name:"test abc",price:288,code:"1001545847781"},{name:"vue 高级用法",price:188,code:"1201511842009"},{name:"某某xx2",price:860,code:"1201543242003"},{name:"js 从入门到精通",price:99,code:"1201775849605"},{name:"vxe-table pro test abc",price:888,code:"1201775112606"},{name:"js 进阶宝典",price:166,code:"1201775849608"}],o=()=>{const e="\n      .barcode {\n        display: inline-block;\n        width: 50%;\n        height: 240px;\n        float: left;\n        text-align: center;\n      }\n      ",n=[];p.forEach(e=>{const t=document.createElement("img");h()(t,e.code,{lineColor:"#000",width:2,height:80,displayValue:!0});const l=`\n        <div class="barcode">\n          <p>${e.name}</p>\n          ${t.outerHTML}\n          <p>统一售价：￥${e.price}</p>\n        </div>\n        `;n.push(l)}),b["a"].print({sheetName:"打印条形码模板",style:e,content:n.join("")})},d=()=>{const e="\n      .title,\n      .qrcode {\n        text-align: center;\n      }\n      ";v.a.toDataURL("https://gitee.com/xuliangzhan_admin/vxe-table").then(n=>{const t=`\n        <p class="title">扫一扫二维码</p>\n        <div class="qrcode">\n          <img src="${n}">\n          <div style="margin-top: 15px;">如果对您有帮助，点击右上角捐赠打赏我们一杯咖啡！</div>\n        </div>\n        `;b["a"].print({sheetName:"打印二维码模板",style:e,content:t})})},r=()=>{const e="\n      .page-1 {\n        height: 1000px;\n      }\n      .page-2 {\n        padding: 15px 0;\n      }\n      .fill-row {\n        display: block;\n        font-size: 14px;\n        height: 36px;\n      }\n      .fill-span {\n        display: inline-block;\n        font-size: 14px;\n        height: 36px;\n      }\n      .fill-title {\n        display: inline-block;\n        vertical-align: middle;\n      }\n      .fill-empty,\n      .fill-part {\n        display: inline-block;\n        vertical-align: bottom;\n        border-bottom: 1px solid #000;\n      }\n      .number {\n        width: 250px;\n        margin-top: 40px;\n      }\n      .number .fill-empty {\n        width: 160px;\n      }\n      .title {\n        text-align: center;\n        margin: 80px 0;\n      }\n      .info-a,\n      .info-b {\n        margin: 0 auto;\n        width: 400px;\n        text-align: right;\n      }\n      .info-a .fill-row,\n      .info-b .fill-row {\n        height: 48px;\n      }\n      .info-a .fill-empty,\n      .info-b .fill-empty {\n        width: 200px;\n      }\n      .info-b {\n        margin-top: 80px;\n      }\n      .list-desc {\n        padding-left: 15px;\n      }\n      ",n='\n      <div class="page-1">\n        <div class="fill-row number">\n          <span class="fill-title">编号：</span>\n          <span class="fill-empty"></span>\n        </div>\n        <h1 class="title">劳动合同书</h1>\n        <div class="info-a">\n          <div class="fill-row">\n            <span class="fill-title">甲方（用人单位名称）名称：</span>\n            <span class="fill-empty"></span>\n          </div>\n          <div class="fill-row">\n            <span class="fill-title">住址：</span>\n            <span class="fill-empty"></span>\n          </div>\n          <div class="fill-row">\n            <span class="fill-title">法定代表人（委托代理人）：</span>\n            <span class="fill-empty"></span>\n          </div>\n        </div>\n        <div class="info-b">\n          <div class="fill-row">\n            <span class="fill-title">乙方（劳动者）姓名：</span>\n            <span class="fill-empty"></span>\n          </div>\n          <div class="fill-row">\n            <span class="fill-title">性别：</span>\n            <span class="fill-empty"></span>\n          </div>\n          <div class="fill-row">\n            <span class="fill-title">住址：</span>\n            <span class="fill-empty"></span>\n          </div>\n          <div class="fill-row">\n            <span class="fill-title">居民身份证号：</span>\n            <span class="fill-empty"></span>\n          </div>\n          <div class="fill-row">\n            <span class="fill-title">联系电话：</span>\n            <span class="fill-empty"></span>\n          </div>\n        </div>\n      </div>\n\n      <div class="page-2">\n        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲乙双方根据《中国人民共和国劳动合同法》等法律、法规、规章的规定，在平等、自愿、协商一致的基础上，同意订立本劳动合同，共同遵守本合同所列条款。</p>\n        <h2>一：合同类型的期限</h2>\n        <div class="list-desc">\n          <p>第一条 甲、乙双方选择以下第<span class="fill-part" style="width: 100px"></span>等形式确定本合同期限：</p>\n          <div class="list-desc">\n            <p>1、固定期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日止。</p>\n            <p>2、无固定期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日止</p>\n            <p>3、以完成一定的工作（任务）为期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至工作（任务）完成时即行终止。</p>\n            <p>双方约定的试用期限<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日只，期限为<span class="fill-part" style="width: 40px"></span>月</p>\n          </div>\n        </div>\n        <h2>二：工作内容和工作地点</h2>\n        <div class="list-desc">...省略</div>\n        <h2>三：工作时间和休息休假</h2>\n        <div class="list-desc">...省略</div>\n        <div style="margin-top: 15px;">如果对您有帮助，点击右上角捐赠打赏我们一杯咖啡！</div>\n      </div>\n      ';b["a"].print({sheetName:"打印自定义模板模板",style:e,content:n})};return{xTable1:s,xToolbar1:a,demo1:i,printEvent1:c,printEvent2:o,printEvent3:d,printEvent4:r,demoCodes:['\n        <vxe-toolbar print>\n          <template #buttons>\n            <vxe-button @click="printEvent1">打印表格</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          ref="xTable1"\n          height="300"\n          :print-config="demo1.tablePrint"\n          :data="demo1.tableData">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="role" title="Role"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref, nextTick } from 'vue'\n        import { VxeTableInstance, VxeTablePropTypes, VxeToolbarInstance } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            // 打印样式\n            const printStyle = `\n            .title {\n              text-align: center;\n            }\n            .my-list-row {\n              display: inline-block;\n              width: 100%;\n            }\n            .my-list-col {\n              float: left;\n              width: 33.33%;\n              height: 28px;\n              line-height: 28px;\n            }\n            .my-top,\n            .my-bottom {\n              font-size: 12px;\n            }\n            .my-top {\n              margin-bottom: 5px;\n            }\n            .my-bottom {\n              margin-top: 30px;\n              text-align: right;\n            }\n            `\n\n            // 打印顶部内容模板\n            const topHtml = `\n            <h1 class=\"title\">出货单据</h1>\n            <div class=\"my-top\">\n              <div class=\"my-list-row\">\n                <div class=\"my-list-col\">商品名称：vxe-table</div>\n                <div class=\"my-list-col\">发货单号：X2665847132654</div>\n                <div class=\"my-list-col\">发货日期：2020-09-20</div>\n              </div>\n              <div class=\"my-list-row\">\n                <div class=\"my-list-col\">收货姓名：小徐</div>\n                <div class=\"my-list-col\">收货地址：火星第七区18号001</div>\n                <div class=\"my-list-col\">联系电话：10086</div>\n              </div>\n            </div>\n            `\n\n            // 打印底部内容模板\n            const bottomHtml = `\n            <div class=\"my-bottom\">\n              <div class=\"my-list-row\">\n                <div class=\"my-list-col\"></div>\n                <div class=\"my-list-col\">创建人：小徐</div>\n                <div class=\"my-list-col\">创建日期：2020-09-20</div>\n              </div>\n            </div>\n            `\n\n            const xTable1 = ref({} as VxeTableInstance)\n            const xToolbar1 = ref({} as VxeToolbarInstance)\n\n            const demo1 = reactive({\n              tablePrint: {\n                sheetName: '打印表格',\n                style: printStyle,\n                beforePrintMethod: ({ content }) => {\n                  return topHtml + content + bottomHtml\n                }\n              } as VxeTablePropTypes.PrintConfig,\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Beijing' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shenzhen' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            })\n\n            nextTick(() => {\n              // 将表格和工具栏进行关联\n              const $table = xTable1.value\n              const $toolbar = xToolbar1.value\n              $table.connect($toolbar)\n            })\n\n            const printEvent1 = () => {\n              const $table = xTable1.value\n              $table.print({\n                sheetName: '打印表格',\n                style: printStyle,\n                columns: [\n                  { type: 'seq' },\n                  { field: 'name' },\n                  { field: 'role' },\n                  { field: 'address' }\n                ],\n                beforePrintMethod: ({ content }) => {\n                  // 拦截打印之前，返回自定义的 html 内容\n                  return topHtml + content + bottomHtml\n                }\n              })\n            }\n\n            return {\n              xTable1,\n              demo1,\n              printEvent1\n            }\n          }\n        })\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="printEvent2">打印条形码</vxe-button>\n          </template>\n        </vxe-toolbar>\n        ',"\n        import { defineComponent } from 'vue'\n        import { VXETable } from 'vxe-table'\n        import jsbarcode from 'jsbarcode'\n\n        export default defineComponent({\n          setup () {\n            const codeList = [\n              { name: '某年xx1', price: 340, code: '1201545742000' },\n              { name: 'vue 开发指南', price: 99, code: '1271545042006' },\n              { name: 'test abc', price: 288, code: '1001545847781' },\n              { name: 'vue 高级用法', price: 188, code: '1201511842009' },\n              { name: '某某xx2', price: 860, code: '1201543242003' },\n              { name: 'js 从入门到精通', price: 99, code: '1201775849605' },\n              { name: 'vxe-table pro test abc', price: 888, code: '1201775112606' },\n              { name: 'js 进阶宝典', price: 166, code: '1201775849608' }\n            ]\n            const printEvent2 = () => {\n              // 打印样式\n              const printStyle = `\n              .barcode {\n                display: inline-block;\n                width: 50%;\n                height: 240px;\n                float: left;\n                text-align: center;\n              }\n              `\n              // 打印模板\n              const printTmpls: string[] = []\n              codeList.forEach(item => {\n                const img = document.createElement('img')\n                // 生成条形码\n                jsbarcode(img, item.code, {\n                  lineColor: '#000',\n                  width: 2,\n                  height: 80,\n                  displayValue: true\n                })\n                const tmpl = `\n                <div class=\"barcode\">\n                  <p>${item.name}</p>\n                  ${img.outerHTML}\n                  <p>统一售价：￥${item.price}</p>\n                </div>\n                `\n                printTmpls.push(tmpl)\n              })\n              VXETable.print({\n                sheetName: '打印条形码模板',\n                style: printStyle,\n                content: printTmpls.join('')\n              })\n            }\n\n            return {\n              printEvent2\n            }\n          }\n        })\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="printEvent3">打印二维码</vxe-button>\n          </template>\n        </vxe-toolbar>\n        ',"\n        import { defineComponent } from 'vue'\n        import { VXETable } from 'vxe-table'\n        import QRCode from 'qrcode'\n\n        export default defineComponent({\n          setup () {\n            const printEvent3 = () => {\n              // 打印样式\n              const printStyle = `\n              .title,\n              .qrcode {\n                text-align: center;\n              }\n              `\n              // 生成二维码\n              QRCode.toDataURL('https://gitee.com/xuliangzhan_admin/vxe-table').then(url => {\n                // 打印模板\n                const printTmpl = `\n                <p class=\"title\">扫一扫二维码</p>\n                <div class=\"qrcode\">\n                  <img src=\"${url}\">\n                  <div style=\"margin-top: 15px;\">如果对您有帮助，点击右上角捐赠打赏我们一杯咖啡！</div>\n                </div>\n                `\n                VXETable.print({\n                  sheetName: '打印二维码模板',\n                  style: printStyle,\n                  content: printTmpl\n                })\n              })\n            }\n\n            return {\n              printEvent3\n            }\n          }\n        })\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="printEvent4">打印自定义模板</vxe-button>\n          </template>\n        </vxe-toolbar>\n        ','\n        import { defineComponent } from \'vue\'\n        import { VXETable, VxeTableInstance } from \'vxe-table\'\n\n        export default defineComponent({\n          setup () {\n            const printEvent4 = () => {\n              // 打印样式\n              const printStyle = `\n              .page-1 {\n                height: 1000px;\n              }\n              .page-2 {\n                padding: 15px 0;\n              }\n              .fill-row {\n                display: block;\n                font-size: 14px;\n                height: 36px;\n              }\n              .fill-span {\n                display: inline-block;\n                font-size: 14px;\n                height: 36px;\n              }\n              .fill-title {\n                display: inline-block;\n                vertical-align: middle;\n              }\n              .fill-empty,\n              .fill-part {\n                display: inline-block;\n                vertical-align: bottom;\n                border-bottom: 1px solid #000;\n              }\n              .number {\n                width: 250px;\n                margin-top: 40px;\n              }\n              .number .fill-empty {\n                width: 160px;\n              }\n              .title {\n                text-align: center;\n                margin: 80px 0;\n              }\n              .info-a,\n              .info-b {\n                margin: 0 auto;\n                width: 400px;\n                text-align: right;\n              }\n              .info-a .fill-row,\n              .info-b .fill-row {\n                height: 48px;\n              }\n              .info-a .fill-empty,\n              .info-b .fill-empty {\n                width: 200px;\n              }\n              .info-b {\n                margin-top: 80px;\n              }\n              .list-desc {\n                padding-left: 15px;\n              }\n              `\n              // 打印模板\n              const printTmpl = `\n              <div class="page-1">\n                <div class="fill-row number">\n                  <span class="fill-title">编号：</span>\n                  <span class="fill-empty"></span>\n                </div>\n                <h1 class="title">劳动合同书</h1>\n                <div class="info-a">\n                  <div class="fill-row">\n                    <span class="fill-title">甲方（用人单位名称）名称：</span>\n                    <span class="fill-empty"></span>\n                  </div>\n                  <div class="fill-row">\n                    <span class="fill-title">住址：</span>\n                    <span class="fill-empty"></span>\n                  </div>\n                  <div class="fill-row">\n                    <span class="fill-title">法定代表人（委托代理人）：</span>\n                    <span class="fill-empty"></span>\n                  </div>\n                </div>\n                <div class="info-b">\n                  <div class="fill-row">\n                    <span class="fill-title">乙方（劳动者）姓名：</span>\n                    <span class="fill-empty"></span>\n                  </div>\n                  <div class="fill-row">\n                    <span class="fill-title">性别：</span>\n                    <span class="fill-empty"></span>\n                  </div>\n                  <div class="fill-row">\n                    <span class="fill-title">住址：</span>\n                    <span class="fill-empty"></span>\n                  </div>\n                  <div class="fill-row">\n                    <span class="fill-title">居民身份证号：</span>\n                    <span class="fill-empty"></span>\n                  </div>\n                  <div class="fill-row">\n                    <span class="fill-title">联系电话：</span>\n                    <span class="fill-empty"></span>\n                  </div>\n                </div>\n              </div>\n\n              <div class="page-2">\n                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲乙双方根据《中国人民共和国劳动合同法》等法律、法规、规章的规定，在平等、自愿、协商一致的基础上，同意订立本劳动合同，共同遵守本合同所列条款。</p>\n                <h2>一：合同类型的期限</h2>\n                <div class="list-desc">\n                  <p>第一条 甲、乙双方选择以下第<span class="fill-part" style="width: 100px"></span>等形式确定本合同期限：</p>\n                  <div class="list-desc">\n                    <p>1、固定期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日止。</p>\n                    <p>2、无固定期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日止</p>\n                    <p>3、以完成一定的工作（任务）为期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至工作（任务）完成时即行终止。</p>\n                    <p>双方约定的试用期限<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日只，期限为<span class="fill-part" style="width: 40px"></span>月</p>\n                  </div>\n                </div>\n                <h2>二：工作内容和工作地点</h2>\n                <div class="list-desc">...省略</div>\n                <h2>三：工作时间和休息休假</h2>\n                <div class="list-desc">...省略</div>\n                <div style="margin-top: 15px;">如果对您有帮助，点击右上角捐赠打赏我们一杯咖啡！</div>\n              </div>\n              `\n              VXETable.print({\n                sheetName: \'打印自定义模板模板\',\n                style: printStyle,\n                content: printTmpl\n              })\n            }\n\n            return {\n              printEvent4\n            }\n          }\n        })\n        ']}}}),g=t("6b0d"),w=t.n(g);const j=w()(y,[["render",m]]);n["default"]=j}}]);