import React from 'react';
import { hexToAscii } from 'oo7-parity';
import { ReactiveComponent } from 'oo7-react';

const textify = (hex) => {
  return hexToAscii(hex.replace(/0+$/g, ''))
}

export default class PrescItem extends ReactiveComponent {
  constructor() {
    super(['prescriptions']);
  }

  render() {
    if (!this.state.prescriptions) {
      return <div> loading prescriptions...</div>
    }

    return (
      <div>
        {this.state.prescriptions.map((item, i) => textify(item))}
      </div>
    );
  }
}

