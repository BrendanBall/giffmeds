import React from 'react';
import { reverse } from 'lodash';
import { ReactiveComponent } from 'oo7-react';
import Event from './Event';

export default class PrescribedEvent extends ReactiveComponent {
  constructor() {
    super(['events']);
  }

  render() {
    if (!this.state.events) {
      return <div> loading events... </div>
    }

    return (
      <div>
        {this.state.events.map((e, i) => <Event key={`prescription-event-${i}`} event={e} />)}
      </div>
    );
  }
}

