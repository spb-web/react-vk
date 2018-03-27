import React from 'react';
import PropTypes from 'prop-types';

export class Post extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    ownerId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    hash: PropTypes.string.isRequired,
    options: PropTypes.shape({
      width: PropTypes.number,
    }),
  };

  state = {}

  getElementId() {
    return 'vk_post_'+ Date.now().toString(32) + Math.random().toString(32)
  }

  mount() {
    const {
      vk, ownerId, postId, hash, options,
      elementId = this.getElementId()
    } = this.props;

    this.setState({ elementId })

    vk.Widgets.Post(elementId, ownerId, postId, hash, options);
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.state;

    return <div id={elementId} />;
  }
}
