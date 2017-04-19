import Wrapper from '../Wrapper'
import Page1 from '../Page1'
import Page2 from '../Page2'

export default {
  path: '/module2',
  name: 'Module2',
  component: Wrapper,
  children: [
    {
      path: 'page1',
      name: 'Module2Page1',
      component: Page1
    },
    {
      path: 'page2',
      name: 'Module2Page2',
      component: Page2
    }
  ]
}
