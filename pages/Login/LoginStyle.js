import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
      marginHorizontal: 20,
      marginTop: 60,
    },
    signInText: {
      fontSize: 26,
      color: 'white',
      marginBottom: 10,
    },
    welcomeText: {
      fontSize: 14,
      color: 'white',
      marginBottom: 10,
    },
    tabContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      backgroundColor: "#e3f2fd",
      justifyContent: 'space-around',
      padding: 10,
      borderRadius: 40,
      marginTop: 0,
    },
    textChange: {
      textAlign: 'center',
      color: '#9C51FD',
      fontSize: 16
    },
    activeTabText: {
      color: 'white',
    },
    tab: {
      padding: 10,
      width: '50%',
      borderRadius: 40,
    },
    activeTab: {
      backgroundColor: '#9C51FD',
    },
    input: {
      width: '100%',
      height: 52,
      borderRadius: 13,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: '#e3f2fd',
      marginTop: 10,
    },
    label: {
      marginTop: 20,
      color: 'white',
    },
    forgotPassword: {
      fontSize: 12,
      color: 'white',
      marginBottom: 10,
    },
    signInButton: {
      backgroundColor: 'white',
      paddingVertical: 10,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 20
    },
    signInButtonText: {
      color: '#9C51FD',
      fontSize: 16,
    },
    image: {
      height: 600,
      width: 400,
      alignSelf: 'center',
      marginTop: -135,
      marginBottom: -120
    },
    mediaIcons: {
      alignSelf: 'center',
      marginTop: 10,
      flexDirection : "row",
      gap : 22,
    },
    icons: {
      width : 48,
      height: 48,
    },
    optionsText: {
      textAlign : "center",
      paddingVertical : 10,
      color : "white",
      fontSize : 14,
      marginBottom : 0,
      marginTop: 7
    },
    switch :{
      flexDirection : "row",
      gap : 5,
      alignItems : "center",
      marginTop:10
      
    },
    rememberText : {
      fontSize: 14,
      color: 'white'
    },
    forgetText : {
      marginLeft: 130,
      fontSize : 13,
      color : "#ffff",
      marginTop: 26,
      fontWeight:"bold"
    },
    rememberMe : {
      flexDirection: 'row',
      gap: 59
    }

});

export default styles;
