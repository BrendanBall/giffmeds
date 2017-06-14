import React from 'react';
import { ReactiveComponent } from 'oo7-react';
import { AccountLabel } from 'parity-reactive-ui';

export default class Accounts extends ReactiveComponent {
  constructor() {
    super(['accounts']);
  }

  render() {
    if (!this.state.accounts) {
      return <div> loading accounts... </div>
    }

    return (
      <div>
        {this.state.accounts.map((address, i) => <div key={`prescription-event-${i}`}>
            <AccountLabel address={address} />&nbsp;
            <span>{address}</span>
          </div>)}
      </div>
    );
  }
}

