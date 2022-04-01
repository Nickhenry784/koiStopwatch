import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const meatItemStyle = (x, y) =>
  StyleSheet.create({
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 20,
    position: 'absolute',
    top: x,
    left: y,
  });

export const appStyle = StyleSheet.create({
  buyButton: {
    width: 80,
    height: 50,
    position: 'absolute',
    top: '2%',
    left: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  buyImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  turnText: {
    fontFamily: 'knitting-pattern',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  backText: {
    position: 'absolute',
    paddingTop: 20,
    left: '5%',
    fontSize: 30,
    fontFamily: 'knitting-pattern',
    fontWeight: 'bold',
    color: 'red',
  },
  homeView: {
    width: '100%',
    height: '100%',
  },
  centerView: {
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  itemView: {
    width: '100%',
    height: 200,
  },
  cookImage: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
  clockImage: {
    width: 150,
    height: 300,
    resizeMode: 'contain',
  },
  timeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
  },

  stopImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  land: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  children: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    elevation: 3,
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    top: '10%',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    color: 'red',
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
