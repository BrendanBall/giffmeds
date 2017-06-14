import React from 'react';
import { hexToAscii } from 'oo7-parity';
import { AccountLabel } from 'parity-reactive-ui';

const textify = (hex) => {
  return hexToAscii(hex.replace(/0+$/g, ''))
}

const Event = ({ event }) => (
  <div>
    <AccountLabel address={event.prescriber} />
    {` prescribed ${textify(event.prescription)} to patient with id ${textify(event.patientId)} (${event.prescriber})`}
    <br />
  </div>
);

export default Event;

