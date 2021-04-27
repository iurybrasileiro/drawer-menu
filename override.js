import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

import { fontSizePercentage } from './src/utils';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: fontSizePercentage(16),
    fontFamily: 'Rubik-Regular',
  },
});

const override = () => {
  const oldTextRender = Text.render;
  Text.render = (...args) => {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
      allowFontScaling: false,
    });
  };

  const oldTextInputRender = TextInput.render;
  TextInput.render = (...args) => {
    const origin = oldTextInputRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
      allowFontScaling: false,
    });
  };
};

export default override;
