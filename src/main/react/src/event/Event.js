import React from 'react';

const Event = ({ event }) => (
  <div>
    {`${event.prescriber} prescribed ${event.prescription} to patient with id ${event.patientId}`}
    <br />
  </div>
);

export default Event;

