import {View} from '@fower/taro';
import PropTypes from 'prop-types';
import Taro from '@tarojs/taro';
import './index.scss';

Taro.options.html.transformElement = (el) => {
  if (el.nodeName === 'image') {
    el.setAttribute('mode', 'widthFix');
  }
  return el;
};

const RichText = ({children, ...props}) => (
  <View className="mx-rich-text" {...props} dangerouslySetInnerHTML={{__html: children}}/>
);

RichText.propTypes = {
  children: PropTypes.node,
};

export default RichText;
