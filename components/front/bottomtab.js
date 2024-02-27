import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from '../../screens/signup';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
}