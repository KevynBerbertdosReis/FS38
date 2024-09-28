const inputCep = document.getElementById('cep');
const inputLogradouro = document.getElementById('logradouro')
const inputBairro = document.getElementById('bairro')
const inputEstado = document.getElementById('estado')
const inputLocalidade = document.getElementById('localidade')

inputCep.addEventListener('keyup', async (event) => {
    const cep = event.target.value;


    if (cep.length === 8) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const responseJson = await response.json();
            const {
                logradouro,
                bairro,
                estado,
                localidade
            } = responseJson
            inputLogradouro.value = logradouro
            inputBairro.value = bairro
            inputEstado.value = estado
            inputLocalidade.value = localidade

            console.log('foi sucesso');
            } catch {
                document.getElementById('feedback').innerText = 'deu erro'
            } finally{
                    console.log('vai ser executado de qualquer jeito');
            }
    }

})