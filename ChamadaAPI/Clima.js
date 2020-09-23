class ClimaService{

    getClima(uf, cidade) {
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${cidade},${uf},BR&appid=709ae624955f32d6ace0ed57d0725775&lang=pt`;
        
        const request = new XMLHttpRequest();
        request.open("GET", url, false);

        var response = {};

        request.onreadystatechange = () => {
            response = JSON.parse(request.responseText);
        }
        
            request.send();

            return response;
        
    }
}