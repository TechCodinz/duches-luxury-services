import { Tabs } from "expo-router";
import { StatusBar, Text, View } from "react-native";

const lime="#D8FF45";
const dim="#74746F";

function TabIcon({label,focused}:{label:string;focused:boolean}){
  return <View style={{alignItems:"center",justifyContent:"center",minWidth:34}}><Text style={{color:focused?lime:dim,fontSize:11,fontWeight:"900",letterSpacing:1}}>{label}</Text></View>;
}

export default function Layout(){return <><StatusBar barStyle="light-content" backgroundColor="#090909"/><Tabs screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:"#0A0A0A",borderTopColor:"#242424",height:78,paddingTop:10,paddingBottom:12},tabBarActiveTintColor:lime,tabBarInactiveTintColor:dim,tabBarLabelStyle:{fontSize:9,fontWeight:"800",letterSpacing:1,textTransform:"uppercase"}}}>
<Tabs.Screen name="index" options={{title:"Today",tabBarIcon:({focused})=><TabIcon label="01" focused={focused}/>}}/>
<Tabs.Screen name="progress" options={{title:"Progress",tabBarIcon:({focused})=><TabIcon label="02" focused={focused}/>}}/>
<Tabs.Screen name="community" options={{title:"Community",tabBarIcon:({focused})=><TabIcon label="03" focused={focused}/>}}/>
<Tabs.Screen name="profile" options={{title:"Me",tabBarIcon:({focused})=><TabIcon label="04" focused={focused}/>}}/>
</Tabs></>}
