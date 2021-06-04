import {View} from '@fower/taro';
import PropTypes from 'prop-types';
import './index.scss';

// TODO 默认图片 mode 为 scaleToFill，图片过小时，会被拉伸变形

const RichText = ({children, ...props}) => (
  <View className="mx-rich-text" {...props} dangerouslySetInnerHTML={{__html: children}}/>
);

RichText.propTypes = {
  children: PropTypes.node,
};

export default RichText;
