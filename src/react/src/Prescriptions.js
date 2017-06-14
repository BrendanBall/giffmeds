import React, { Component } from 'react';
import { bonds } from 'oo7-parity';
import { Bond } from 'oo7';
import { Rspan } from 'oo7-react';
import { InputBond, AccountIcon } from 'parity-reactive-ui';
import PrescriptionABI from './contracts/prescription';
import PrescribedEvents from './event/PrescribedEvents';
import Accounts from './account/Accounts';

class Prescriptions extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.prescription = bonds.makeContract('0x17E0fE7138dC4eAb0DCaDd7825e5c600681C828a', PrescriptionABI);
    this.prescribed = this.prescription.Prescribed();

    this.patientId = new Bond();
    this.account = new Bond();
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(event) {
    this.setState({ index: event.target.value });
  }

  render() {
    return (
      <div>
        <Accounts accounts={bonds.accounts} />
        <br/>
        <br/>
        Account:&nbsp;
        <InputBond bond={this.account} placeholder="Throw something in here"/>
        <br/>
        Patient Id:&nbsp;
        <InputBond bond={this.patientId} placeholder="Throw something in here"/>
        <br/>
        <Rspan>{this.prescription.getPrescriptions(this.account, this.patientId, this.state.index)}</Rspan>
        <br/>
        <input type="range" min="0" max="5" value={this.state.index} onChange={this.handleSliderChange} />

        <br/>
        <br/>
        <PrescribedEvents events={this.prescribed} />
      </div>
    );
  }
}

export default Prescriptions;
