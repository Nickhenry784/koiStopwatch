import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

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
  buyImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  turnText: {
    fontFamily: 'REGISTER',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  backText: {
    position: 'absolute',
    paddingTop: 20,
    left: '5%',
    fontSize: 30,
    fontFamily: 'REGISTER',
    fontWeight: 'bold',
    color: 'white',
  },
  homeView: {
    marginTop: 80,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  koicricleImage: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    resizeMode: 'contain',
  },
  bottleImage: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.1,
    resizeMode: 'contain',
  },
  koi1Image: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    resizeMode: 'contain',
  },
  koi2Image: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    resizeMode: 'contain',
  },
  playImage: {
    marginTop: windowHeight * 0.1,
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
    resizeMode: 'contain',
  },
  popupImage: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.3,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timePickerView: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelPickerText: {
    fontFamily: 'REGISTER',
    fontWeight: 'bold',
    fontSize: windowWidth > 600 ? 50 : 30,
    color: 'white',
  },
  inputStyle: {
    width: windowWidth > 600 ? 150 : 60,
    height: windowWidth > 600 ? 150 : 60,
    textAlign: 'center',
    fontFamily: 'REGISTER',
    fontWeight: 'bold',
    fontSize: windowWidth > 600 ? 50 : 30,
    color: 'white',
  },
  okImage: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
    resizeMode: 'contain',
  },
  timeLabelText: {
    fontSize: windowWidth > 600 ? 50 : 30,
    fontFamily: 'REGISTER',
    fontWeight: 'bold',
    color: 'white',
  },
  stopImage: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
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
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    backgroundColor: '#676767',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
