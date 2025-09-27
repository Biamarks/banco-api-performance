import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';

export const options = {
  interation: 1,
};

export default function() {
  const token = obterToken()

  const url = 'http://localhost:3000/transferencias'

  const payload = JSON.stringify({
    contaOrigen: 1,
    contaDestino: 2,
    valor: 11,
    token: ""
  })
  
  const params = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }

  let res = http.get(url, payooad,params);
  
 check(res, {
  "status is 201": (res) => res.status === 200
 });

  sleep(1);
}
