import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

export default class MessageImage extends React.Component {
  render() {
    let images = this.props.currentMessage.image
    if('string' === typeof images) images = [images]
    if(!(images instanceof Array)) return null
    return (
      <View>
      {
        images.map((image, pos) => (
          <View key={`img_${pos}`} style={[styles.container, this.props.containerStyle]}>
            <TouchableOpacity onPress={() => {
              if(this.props._onImageLinkPress)
                this.props._onImageLinkPress(this.props, image)
            } }>
              <Image
                {...this.props.imageProps}
                style={[styles.image, this.props.imageStyle]}
                source={{uri: image}}
              />
            </TouchableOpacity>
          </View>
        ))
      }
      </View>
    )
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
