import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 支持页面jsx的写法
import vueJsx from '@vitejs/plugin-vue-jsx';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()]
})
