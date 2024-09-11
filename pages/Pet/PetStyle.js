import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 16,
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
      header: {
        top: -35,
        width: 550,
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#490092',
    },
    headerText: {
        fontSize: 40,
        color: 'white',
        marginTop: 30
    },

  rectangleText: {
      fontSize: 18,
      color: 'black',
  },
  rectangle: {
    height: 150,
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Opacidade baixa
    borderRadius: 10,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    flexDirection: 'row', // Organizar a imagem e o texto em linha
    alignItems: 'center',
    padding: 10,
    position: 'relative', // Necessário para posicionar o ícone no canto superior esquerdo
},
topLeftIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
},
petImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 20
},
petName: {
  fontSize: 50,
  color: 'white',
  textAlign: 'center',
  flex: 1,
  marginLeft: -30
},
addButton: {
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 110,
  borderRadius: 999,
  width: 250,
  height: 60,
  backgroundColor: 'white',
},
addText:{
  fontSize: 30,
  color: '#490092',
}
})
export default styles