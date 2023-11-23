import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList} from "react-native";
  import {RFValue} from "react-native-responsive-fontsize"
  import enteriment from "./enteriment" 
   
import Font from "expo-font";
import SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }
}

 

