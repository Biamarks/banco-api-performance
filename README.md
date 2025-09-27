# banco-api-performance

## Descrição
Este repositório contém scripts e configurações para realizar testes de performance em APIs utilizando a ferramenta [k6](https://k6.io/). O objetivo é garantir que as APIs atendam aos requisitos de desempenho e escalabilidade.

## Estrutura do Projeto

- **config/**: Arquivos de configuração utilizados nos testes.
- **fixtures/**: Dados de entrada para os testes.
- **helpers/**: Funções auxiliares para os scripts de teste.
- **tests/**: Scripts de teste de performance.
- **utils/**: Utilitários e configurações adicionais.

## Ferramentas Utilizadas

- [k6](https://k6.io/): Ferramenta para testes de carga e performance.
- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.

## Como Executar os Testes

1. Certifique-se de que o [k6](https://k6.io/docs/getting-started/installation/) está instalado.
2. Navegue até o diretório do projeto:
   ```bash
   cd banco-api-performance
   ```
3. Execute um script de teste:
   ```bash
   k6 run tests/login.test.js
   ```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
