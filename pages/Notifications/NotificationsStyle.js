import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
        fontSize : 30,
        textTransform : "uppercase",
        textAlign: "center",
        paddingVertical : 40,
        color : "#ffff"
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        backgroundColor: '#8D3FE6',
        position: 'absolute',
        bottom: 0,
        width: '110%',
        height: '9%',
      },
      tabIconActive: {
        color: '#490092',
      },
})
export default styles