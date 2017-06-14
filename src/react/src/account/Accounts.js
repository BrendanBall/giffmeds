import React from 'react';
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
        {this.state.accounts.map((a, i) => <div>
            <AccountIcon key={`prescription-event-${i}`} address={a} />
            {a}
          </div>)}
      </div>
    );
  }
}

