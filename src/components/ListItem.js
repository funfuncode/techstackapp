import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { selectLibrary } from '../actions';

class ListItem extends Component {

  renderSlideDownSection = () => {
    if(this.props.selectedLibId !== null && this.props.selectedLibId === this.props.library.id){
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

const mapStateToProps = (state) => {
  return {
    selectedLibId: state.selectedLibId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectLibrary: (id) => dispatch(selectLibrary(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
