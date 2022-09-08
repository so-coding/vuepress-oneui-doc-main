import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import OneUI from 'one-ui-element/lib/index'
import 'one-ui-element/lib/style.css'
export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(OneUI)

  }
}