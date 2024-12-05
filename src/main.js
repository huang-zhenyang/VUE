import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 Element Plus 的样式

// 创建 Vue 应用实例
const app = createApp(App);

// 使用 Element Plus
app.use(ElementPlus);

// 挂载 Vue 应用
app.mount('#app');