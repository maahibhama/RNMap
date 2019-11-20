import {StyleSheet} from 'react-native';
import {Color} from '../../helpers/Colors';
import {AppFont} from '../../helpers/Fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStyle from '../../helpers/AppStyle';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  nabTopView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructionText:{
    flex: 1,
    textAlign: 'center',
    fontSize: AppFont.titleExtraLargeBold.size,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.themeBackground
  },
  topView: {
    height: 300,
    padding: 10,
  },
  map: {
    height: '100%',
    width: '100%',
  },
  secondView: {
    
  },
  startButton: {
    marginHorizontal: '10%',
    marginTop: 35,
    backgroundColor: 'lightgreen',
  },
  startButtonText: {
    fontSize: AppFont.titleExtraLargeBold.size,
    color: Color.brightText,
  },
  inputViewStyle: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingLeft: 10,
    height: 55,
    backgroundColor: Color.offWhiteBackground,
    padding: 0,
    fontSize: AppFont.title.size,
    fontFamily: AppFont.title.name,
    fontWeight: AppFont.title.weight,
    ...AppStyle.shadow
  },
});
