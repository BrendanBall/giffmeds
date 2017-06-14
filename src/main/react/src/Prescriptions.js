import React, { Component } from 'react';
import { bonds } from 'oo7-parity';
import { Bond } from 'oo7';
import { Rspan } from 'oo7-react';
import { InputBond } from 'parity-reactive-ui';
import PrescriptionABI from './contracts/prescription';
import PrescribedEvents from './event/PrescribedEvents';

class Bonds extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
    this.prescription = bonds.makeContract('0x17E0fE7138dC4eAb0DCaDd7825e5c600681C828a', PrescriptionABI);
    this.prescribed = this.prescription.Prescribed();

    this.patientId = new Bond();
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(event) {
    this.setState({ index: event.target.value });
  }

  render() {
    return (
      <div>
        Patient Id:&nbsp;
        <InputBond bond={this.patientId} placeholder="Throw something in here"/>
        <br/>
        <Rspan>{this.prescription.getPrescriptions('0x00cC75B1A50588971c755b42b3376E8CfB9BdBc2', this.patientId, this.state.index)}</Rspan>
        <br/>
        <input type="range" min="0" max="5" value={this.state.index} onChange={this.handleSliderChange} />

        <br/>
        <br/>
        <PrescribedEvents events={this.prescribed} />
      </div>
    );
  }
}

export default Bonds;

