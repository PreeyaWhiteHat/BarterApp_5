import React, { Component} from 'react';

export default class MyHeader extends Component{
  render(){
  return(
    <Header
    leftComponent = {<Icon name='bars' type='font-awesome' color='#0000ff' onPress={() => this.props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: this.props.title, style: { color: '#00d8ff', fontSize:20,fontWeight:"bold", } }}      
      backgroundColor = "#00fcd2"
    />
  );
}
}