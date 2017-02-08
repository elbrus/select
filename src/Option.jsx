import React from 'react';

export default class Option extends React.Component {
  static propTypes = {
    value: React.PropTypes.node,
  };

  static isSelectOption = true;
}
