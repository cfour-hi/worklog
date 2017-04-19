import Wrapper from '../Wrapper'
import Page1 from '../Page1'
import Page2 from '../Page2'

export default {
  path: '/module1',
  name: 'Module1',
  component: Wrapper,
  children: [
    {
      path: 'page1',
      name: 'Module1Page1',
      component: Page1
    },
    {
      path: 'page2',
      name: 'Module1Page2',
      component: Page2
    }
  ]
}
