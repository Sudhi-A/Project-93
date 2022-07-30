import  React,{Component} from 'react';
import { Text, 
    View,
     StyleSheet, 
     Image,
     TouchableOpacity,
    TextInput,
    Button }
        from 'react-native';
import { Card } from 'react-native-paper';
import { CreateSwitchNavigator, CreateAppContainer } from "react-navigation";

export default class DisplayTask extends Component{
    render(){
        const Task =this.props.navigation.navigate.getParam('Task')
        const Taskdescription =this.props.navigation.navigate.getParam('Taskdescription')

        return(
            <View style={styles.container}>
                <Card style={styles.card}> </Card>
                    <Card style={styles.card2}>
                    ▢{Task} </Card>
                   
                    <Card style={styles.card2}>
                    ▢ {Taskdescription}</Card>
                <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Home',{task:task,Taskdescription:Taskdescription})}>
                    Go Back
                </TouchableOpacity>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
  backgroundColor:"#7FB5FF"
    },
    btn:{
    borderWidth:2,
    borderRadius:10,
    maginBottom:4,
    },
    card:{
    padding:50,
    height:window.innerHeight-20,
    justifyContent:"space-around",
    borderRadius:20,
    margin:10,
    backgroundColor:"#E8F9FD",
    color:"#0AA1DD",
    alingItems:"center"
    },
    card2:{
        width:window.innerWidth-40,
        height:80,
        margin:10,
        
    }
})