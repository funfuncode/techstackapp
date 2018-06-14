import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, UIManager } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { selectLibrary } from '../actions';

class ListItem extends Component {

  componentWillUpdate(){
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  renderSlideDownSection = () => {
    if(this.props.expanded){
      return (
        <CardSection>
          <Text>
            {this.props.library.description}
          </Text>
        </CardSection>
      );
    }
    return null;
  }

  render(){

    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={ () => this.props.onSelectLibrary(this.props.library.id) }>
        <View>
          <CardSection>
            <Text>{this.props.library.title}</Text>
          </CardSection>
          { this.renderSlideDownSection() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
};

const mapStateToProps = (state, ownProps) => {

  return {
    expanded: state.selectedLibId === ownProps.library.id
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectLibrary: (id) => dispatch(selectLibrary(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
