import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import "./style.css"
import { globalStore } from "./pinaGlobal/global"

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)

// 🔄 restore login state after refresh
const store = globalStore(pinia)
store.initAuth()

app.mount("#app")


// import { createApp } from "vue"
// import App from "./App.vue"
// import router from "./router"
// import { createPinia } from "pinia"
// import "./style.css"


// createApp(App).use(router).use(createPinia()).mount("#app")