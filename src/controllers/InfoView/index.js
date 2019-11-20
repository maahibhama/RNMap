import React, {useState} from 'react';
import {FlatList, View, SafeAreaView, Text} from 'react-native';

import BackgroundView from '../../components/BackgroundView';
import {Icons} from '../../helpers/Assets';
import ImageButton from '../../components/ImageButton';

import styles from './styles';

export default function InfoView(props) {
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState(() => {
    return setLocationValue();
  });

  const [name, setName] = useState(() => {
    return setNameValue();
  });

  function setLocationValue() {
    const {state} = props.navigation;
    if(state.params && state.params.location != null) {
      return state.params.location
    }
    return "";
  }

  function setNameValue() {
    const {state} = props.navigation;
    if (state.params && state.params.name != null) {
      return state.params.name
    }
    return "";
  }

  return (
    <BackgroundView>
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <ImageButton
            source={Icons.back}
            imageStyles={styles.back}
            onTouch={() => {
              backButtonAction({navigtion: props.navigation});
            }}
          />
          <Text style={styles.instructionText}>{'Card Screen'}</Text>
        </View>
        <View style={styles.middleView}>
          <View style={styles.caredView}>
            <Text style={styles.baseQAText}>{'Current Location '}</Text>
            <Text style={styles.questionText}>{location}</Text>
            <Text style={styles.baseQAText}>{'Name'}</Text>
            <Text style={styles.answerText}>{name}</Text>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundView>
  );
}

InfoView.navigationOptions = {
  header: null,
};

const backButtonAction = ({navigtion}) => {
  navigtion.goBack();
};
