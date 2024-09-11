import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    color: '#fff',
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
  section: {
    paddingVertical: 12,
  },
  sectionBody: {
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 12,
  },
  profile: {
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 9999,
    marginRight: 12,
    borderWidth: 2,
    borderColor: 'white'
  },
  profileBody: {
    flexDirection: 'column', 
    marginRight: 'auto',
  },
  profileContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  profileName: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 15
  },
  profileIcon: {
    marginLeft: 30,
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    marginLeft: 15
  },
  rectangleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
},
rectangle: {
    width: 400,
    height: 250,
    margin: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center'
},
rectangleTitle: {
  fontSize: 30,
  fontWeight: 'bold',
  color: 'white',
  marginTop: 20,
  marginBottom: 20,
},
rectangleImage: {
  width: 140,
  height: 140,
},
tabIconActive: {
  color: '#490092',
},
});

export default styles;