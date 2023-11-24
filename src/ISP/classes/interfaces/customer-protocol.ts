/*eslint-disable*/

/*
 * Protocolo antigo que forçava a implementação de métodos que não eram utilizados

export interface CustomerProtocol {
  firsName: string,
  lastName: string,
  cpf: string,
  cnpj: string,
}
*/

export interface IndividualCustomerProtocol {
  firstName: string,
  lastName: string,
  cpf: string,
}

export interface EnterpriseCustomerProtocol {
  name: string,
  cnpj: string,
}
