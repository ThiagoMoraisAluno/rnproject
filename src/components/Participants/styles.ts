import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#1f1e25',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginBottom:10
    },
    name:{
        color:'#fff',
        flex:1,
        fontSize:16,
        marginLeft:16
    },
    buttonText:{
        color:'#fff',
        fontSize:24
    },
    button:{
        height:56,
        width:56,
        backgroundColor:'#e23c44',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
})