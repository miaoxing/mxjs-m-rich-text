import RichText from '..';
import {render} from '@testing-library/react';

describe('RichText', () => {
  test('basic', () => {
    const result = render(<RichText>test</RichText>);
    expect(result.container).toMatchSnapshot();
  });

  test('html', () => {
    const content = '<p>123</p><p><img src="test"/></p>';
    const result = render(<RichText>{content}</RichText>);
    expect(result.container).toMatchSnapshot();
  });
});
