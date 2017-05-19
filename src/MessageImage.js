import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

export default class MessageImage extends React.Component {
  render() {
    if(this.props.currentMessage.imageLink){
      return (
        <View style={[styles.container, this.props.containerStyle]}>
          <TouchableOpacity onPress={() => {
            if(this.props._onImageLinkPress)
              this.props._onImageLinkPress(this.props)
          } }>
            <Image
              {...this.props.imageProps}
              style={[styles.image, this.props.imageStyle]}
              source={{uri: this.props.currentMessage.image}}
            />
          </TouchableOpacity>
        </View>
      );
    }else{
      return (
        <View style={[styles.container, this.props.containerStyle]}>
          <Image
            {...this.props.imageProps}
            style={[styles.image, this.props.imageStyle]}
            source={{uri: this.props.currentMessage.image}}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
};

MessageImage.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: React.PropTypes.object,
};
