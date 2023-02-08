//  Importa a biblioteca
import validator from 'validator';

// Seleciona, pelos ids, cada parte da pagina
const textArea = document.getElementById('value');
const optionSelector = document.getElementById('option');
const validateBtn = document.getElementById('button');
const answer = document.getElementById('answer');

validateBtn.addEventListener('click', (event) => {
    // preventDefault() pro botao nao recarregar a pagina ao ser clicado
    event.preventDefault();
    // aqui seleciona acada opcao usando um objeto e chamando suas chaves
    const options = {
        cpf: validator.isTaxID(textArea.value, 'pt-BR'),
        hexColor: validator.isHexColor(textArea.value),
        email: validator.isEmail(textArea.value),
        uuid: validator.isUUID(textArea.value),
        url: validator.isURL(textArea.value),
    };
    // o objeto 'options' tem as chaves com o mesmo nome das 'values' do seletor no html. assim podemois elecionar a chave de acordo com o valor do html.
    answer.innerHTML = `A validacao retornou ${options[optionSelector.value]}`;
});
