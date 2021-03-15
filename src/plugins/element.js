import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import {
    Button,
    Container,
    Drawer,
    Table,
    Pagination,
    TableColumn,
    Header,
    Footer,
    Aside,
    Main,
    Radio,
    MessageBox,
    Input
} from 'element-ui'
import { Notification,Message } from 'element-ui';
Vue.use(Input)
Vue.use(Container)
Vue.use(Button)
Vue.use(Drawer)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(TableColumn)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Radio)
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
