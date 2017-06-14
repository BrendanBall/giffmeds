import React from 'react';
import { AccountIcon } from 'parity-reactive-ui';

const Event = ({ event }) => (
  <div>
    <AccountIcon address={event.prescriber} />
    {` prescribed ${event.prescription} to patient with id ${event.patientId}`}
    <br />
  </div>
);

export default Event;

