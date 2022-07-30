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
import {RFValue} from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';


export default class CreateTask extends Component{
    constructor(){
        super()
        this.state={
            task:[],
            taskdescription:[]
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.txt}>
                        New Task
                    </Text>
                    <Text style={styles.txt}>
                        Task Name
                    </Text>
                    <TextInput style={styles.inputfont}
                    onChangeText ={task =>{this.setState(task)}}
                    >
                    </TextInput>
                    <Text style={styles.txt}> Task Description</Text>
                    <TextInput style={styles.inputfont} 
                    onChangeText ={taskdescription =>{this.setState(taskdescription)}}
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.btn} 
                    onPress= {()=>this.props.navigation.navigate('displaytask',{task:this.state.task,
                        taskdescription:this.state.taskdescription})}>
                           Save 
                        </TouchableOpacity>
                </Card>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
  container:{
  flex:1,
  backgroundColor:"#7FB5FF"
  },
btn:{
    color:"#2155CD",
    width:40,
    Height:30,
    borderColor:"#001D6E",
    borderWidth:2,
    borderRadius:10,
    alingSelf:"center",
    justifyContent:"center",
    alingItems:"center",
    magin:20,
},
txt:{
    color:"#001D6E",
    fontFamily:"Cursive",
    fontSize:20,
    maginLeft:5,
    marginBottom:30,
},
inputfont:{
    height:RFValue(40),
    borderWidth:3,
    borderRadius:10,
    paddingLeft:RFValue(10),
    color:"#001D6E"
},
card:{
    padding:5,
    height:window.innerHeight-20,
    justifyContent:"space-around",
    borderRadius:20,
    margin:10,
    backgroundColor:"#0AA1DD"
}
});