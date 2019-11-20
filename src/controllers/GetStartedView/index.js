import React, {useState} from 'react';
import {Text, View, SafeAreaView, TextInput} from 'react-native';
import Routes from '../../routes/Routes';
import MapView from 'react-native-maps';
import WordButton from '../../components/WordButton';
import BackgroundView from '../../components/BackgroundView';
import ManageKeyboardScrollView from '../../helpers/ManageKeyboardScrollView';
import Geolocation from '@react-native-community/geolocation';

import styles from './styles';
import ImageButton from '../../components/ImageButton';

export default class GetStartedView extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    region: null,
    lastLat: null,
    lastLong: null,
    currentLocation: '',
    name: '',
  };

  componentDidMount() {
    Geolocation.getCurrentPosition(position => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 1.5,
        longitudeDelta: 0.00421 * 1.5,
      };
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    console.log(e.nativeEvent.coordinate.longitude);
    let region = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5,
    };
    this.onRegionChange(region, region.latitude, region.longitude);
  }

  onRegionChange(region, lastLat, lastLong) {
    const location =
      'latitude ' + region.latitude + '\n' + 'longitude' + region.longitude;
    this.setState({
      /*region: region,
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong,*/
      currentLocation: location,
    });
  }

  infoButtonAction() {
    const location = this.state.currentLocation;
    const name = this.state.name;
    this.props.navigation.navigate(Routes.InfoView, {
      location: location,
      name: name,
    });
  }

  /*locationFeatch({region}) {
    const myLat = region.latitude;
    const myLon = region.longitude;
    const myApiKey = 'AIzaSyDcnau9h6WMA_kFpt8jhlR9ha-8ibdPzhs';
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        myLat +
        ',' +
        myLon +
        '&key=' +
        myApiKey,
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(
          'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
        );
      });
  }*/

  render() {
    let coordinate = null;
    if (this.state.region) {
      coordinate = {
        latitude: this.state.region.latitude,
        longitude: this.state.region.longitude,
      };
    }

    return (
      <BackgroundView>
        <SafeAreaView style={styles.container}>
          <View style={styles.nabTopView}>
            <Text style={styles.instructionText}>{'Map Screen'}</Text>
          </View>
          <ManageKeyboardScrollView
            keyboardShouldPersistTaps={'always'}
            contentContainerStyle={styles.keyboardAvoidView}>
            <View>
              <View style={styles.topView}>
                <MapView
                  provider={'google'}
                  style={styles.map}
                  region={this.state.region}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  followUserLocation={true}
                  onRegionChange={this.onRegionChange.bind(this)}
                  onPress={this.onMapPress.bind(this)}>
                  {coordinate && (
                    <MapView.Marker
                      title={this.state.lastLong + ' / ' + this.state.lastLat}
                      coordinate={coordinate}></MapView.Marker>
                  )}
                </MapView>
              </View>
              <View style={styles.secondView}>
                <TextInput
                  underlineColorAndroid={'transparent'}
                  placeholder={'Current Location'}
                  autoCapitalize={'sentences'}
                  returnKeyType={'next'}
                  autoCorrect={false}
                  editable={false}
                  style={styles.inputViewStyle}
                  //onChangeText={text => this.setState({email: text})}
                  onSubmitEditing={event => {}}
                  value={this.state.currentLocation}
                />

                <TextInput
                  underlineColorAndroid={'transparent'}
                  placeholder={'Name'}
                  autoCapitalize={'sentences'}
                  returnKeyType={'next'}
                  autoCorrect={false}
                  style={styles.inputViewStyle}
                  onChangeText={text => this.setState({name: text})}
                  value={this.state.name}
                />
                <WordButton
                  title={'Next'}
                  styles={styles.startButton}
                  textStyles={styles.startButtonText}
                  onTouch={() => {
                    this.infoButtonAction();
                  }}
                />
              </View>
            </View>
          </ManageKeyboardScrollView>
        </SafeAreaView>
      </BackgroundView>
    );
  }
}
