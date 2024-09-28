const select = document.getElementById('regioes');


select.onchange = (event) => buscarEstados(event.target.value)


function buscarRegioes() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
        .then((Response) => Response.json())
        .then((Response) => {
            for (let i = 0; i < Response.length; i++) {
                const regiao = Response[i];

                select.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`
            }
        })
};

const selectEstados = document.getElementById('estados');
function buscarEstados(idRegiao) {
    fetch(selectEstados.innerHTML = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idRegiao}/estados`)
        .then((Response) => Response.json())
        .then((Response) => {
            for (let i = 0; i < Response.length; i++) {
                const estado = Response[i];

                selectEstados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`

            }
        })
};

const selectMunicipios = document.getElementById('municipios');
selectEstados.onchange = (event) => buscarMunicipios(event.target.value)
function buscarMunicipios(idEstado) {
    fetch(selectMunicipios.innerHTML = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
        .then((Response) => Response.json())
        .then((Response) => {
            for (let i = 0; i < Response.length; i++) {
                const municipios = Response[i];

                selectMunicipios.innerHTML += `<option value="${municipios.id}">${municipios.nome}</option>`
            }
        })
};

buscarRegioes()