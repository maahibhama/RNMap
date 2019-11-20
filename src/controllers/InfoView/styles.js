import {StyleSheet} from 'react-native';
import {Color} from '../../helpers/Colors';
import {AppFont} from '../../helpers/Fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStyle from '../../helpers/AppStyle';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  instructionText: {
    flex: 1,
    textAlign: 'center',
    fontSize: AppFont.titleExtraLargeBold.size,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.themeBackground,
    marginRight: 40,
  },
  back: {
    tintColor: Color.themeBackground,
  },
  middleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  caredView: {
    padding: 10,
    width: '80%',
    justifyContent: 'space-around',
    aspectRatio: 1,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  itemText: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: AppFont.titleLarge.size,
    fontFamily: AppFont.titleLarge.name,
    fontWeight: AppFont.titleLarge.weight,
    color: Color.themeBackground,
  },
  qaContainer: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  baseQAText: {
    fontSize: 20,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.black
  },
  questionText: {
    padding: 10,
    flex: 1,
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: 'red',
  },
  answerText: {
    padding: 10,
    flex: 1,
    fontSize: 20,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: 'orange',
  },
});
