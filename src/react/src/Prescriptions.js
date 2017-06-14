import React, { Component } from 'react';
import { bonds } from 'oo7-parity';
import { Bond } from 'oo7';
import { Rspan } from 'oo7-react';
import { InputBond } from 'parity-reactive-ui';
import PrescriptionABI from './contracts/prescription';
import PrescribedEvents from './event/PrescribedEvents';
import Accounts from './account/Accounts';
import PrescItem from './prescription/PrescItem';

class Prescriptions extends Component {
  constructor() {
    super();
    this.prescription = bonds.makeContract('0x14Cd83FCeA686FF64121573a141AA9da20d64491', PrescriptionABI);
    this.prescribed = this.prescription.Prescribed();

    this.patientId = new Bond();
    this.account = new Bond();
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
        <Rspan>{this.prescription.getPrescriptions(this.account, this.patientId)}</Rspan>
        <PrescItem prescriptions={this.prescription.getPrescriptions(this.account, this.patientId)} />

        <br/>
        <br/>
        <PrescribedEvents events={this.prescribed} />
      </div>
    );
  }
}

export default Prescriptions;
