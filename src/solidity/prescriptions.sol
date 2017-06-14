pragma solidity ^0.4.11;

contract killable {
    /* Define variable owner of the type address*/
    address owner;

    /* this function is executed at initialization and sets the owner of the contract */
    function mortal() { owner = msg.sender; }

    /* Function to recover the funds on the contract */
    function kill() { if (msg.sender == owner) selfdestruct(owner); }
}

contract Prescription is killable {
   // The keyword "public" makes those variables
   // readable from outside.
   mapping (address => mapping (string => string[])) prescriptions;

   // Events allow light clients to react on changes efficiently.
   event Prescribed(address prescriber, string patientId, string prescription);

   function prescribe(string patientId, string prescription) {
        prescriptions[msg.sender][patientId].push(prescription);
        Prescribed(msg.sender, patientId, prescription);
    }

   function getPrescriptions(address prescriber, string patientId, uint index) constant returns (string) {
        if (prescriptions[prescriber][patientId].length <= index) {
            return "Error: There is no prescription at this index";
        }
        return prescriptions[prescriber][patientId][index];
    }

    function getPrescriptionCount(address prescriber, string patientId) constant returns (uint) {
        return prescriptions[prescriber][patientId].length;
    }
}
