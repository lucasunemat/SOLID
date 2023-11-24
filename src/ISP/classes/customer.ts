/*eslint-disable*/

import { IndividualCustomerProtocol } from "./interfaces/customer-protocol";
import { EnterpriseCustomerProtocol } from "./interfaces/customer-protocol";

/**
import { CustomerProtocol } from "./interfaces/customer-protocol";

 * Primeira classe de exemplo

export class IndividualCustomer implements CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string; //customer protocol me forçou a isso

  constructor (firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf
  }
}
*/

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string; //empresa tem outra forma de identificação para empresa
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
