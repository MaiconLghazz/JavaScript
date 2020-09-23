class Estado_c {

    constructor () {
        this.API_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    }

    getAll() {

        const request = new XMLHttpRequest();

        request.open("GET", this.API_URL, false);

        let result = [];

        request.onreadystatechange = () => {

            if(request.readyState != 4 || request.status !== 200) {
                return;
            }
            result = JSON.parse(request.responseText);
        };

        request.send();

        return result;
    }

    getCidade(uf) {

        const urlCidade = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
        const request = new XMLHttpRequest();

        request.open("GET", urlCidade, false);

        let result = [];

        request.onreadystatechange = () => {
            result = JSON.parse(request.responseText);
        }

        request.send();

        return result;
    }
}
