import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import GetStartedView from '../controllers/GetStartedView'
import InfoView from '../controllers/InfoView';

import Routes from './Routes'

const AppNavigator = createStackNavigator(
  {
    [Routes.GetStartedView]: GetStartedView,
    [Routes.InfoView]: InfoView
  },
  {
    initialRouteName: Routes.GetStartedView
  }
)

export default createAppContainer(AppNavigator)
