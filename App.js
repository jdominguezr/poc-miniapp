/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {

  View,
  Button,
} from 'react-native';
import {AboutusMiniapp} from 'aboutus-miniapp/App'
import { LoginMiniapp } from 'login-miniapp/App'
export default class PocMiniapp extends Component {


  constructor(props){
    super(props)
    this.state = {
        selectedTab: ''
    }
}

setTab = (tab) => {
  console.log(tab);
  this.setState({selectedTab: tab})
}

selectedTab = () => {
  console.log(this.state.selectedTab);
    switch(this.state.selectedTab){
      case 'AboutUs':
        return <AboutusMiniapp />
      case 'Login':
        return <LoginMiniapp />
      case 'EmptyView':
        return <View />
      default:
        return <View />
    }
            
}


render() {
 console.log(this.setTab);
    return(
      <View>
        <Button title="Login" onPress={() => this.setTab('Login')}/>
        <Button title="About Us" onPress={() => this.setTab('AboutUs')}/>
        <Button title="Empty View" onPress={() => this.setTab('EmptyView')}/>
        {this.selectedTab()}
      </View>
    )
  }  
}
