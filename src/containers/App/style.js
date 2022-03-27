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
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  bottleImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  koi1Image: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  koi2Image: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  playImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  popupImage: {
    width: 320,
    height: 200,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timePickerView: {
    width: 100,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 50,
    marginTop: 30,
  },
  labelPickerText: {
    fontFamily: 'REGISTER',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  inputStyle: {
    width: 60,
    height: 60,
    padding: 10,
    textAlign: 'center',
    fontFamily: 'REGISTER',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  okImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  timeLabelText: {
    fontSize: 30,
    fontFamily: 'REGISTER',
    fontWeight: 'bold',
    color: 'white',
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
    color: 'white',
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
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
