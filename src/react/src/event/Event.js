import React from 'react';
import { AccountLabel } from 'parity-reactive-ui';

const Event = ({ event }) => (
  <div>
    <AccountLabel address={event.prescriber} />
    {` prescribed ${event.prescription} to patient with id ${event.patientId}`}
    <br />
  </div>
);

export default Event;

