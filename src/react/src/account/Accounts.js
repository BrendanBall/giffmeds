import React from 'react';
import { bonds } from 'oo7-parity';
import { Rspan } from 'oo7-react';
import { ReactiveComponent } from 'oo7-react';
import { AccountIcon } from 'parity-reactive-ui';

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
            <AccountIcon address={address} />&nbsp;
            <b><Rspan>{bonds.accountsInfo[address].name}</Rspan></b>&nbsp;
            <span>{address}</span>&nbsp;
          </div>)}
      </div>
    );
  }
}

