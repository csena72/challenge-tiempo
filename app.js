flatpickr("#fecha", {
    locale: "es",
    dateFormat: "m-d-Y",
    minDate: "today",
    maxDate: new Date().fp_incr(5),
    onChange: function(selectedDates, dateStr, instance) {
        const convertedDate = selectedDates[0].toISOString().split('T')[0];
        fetchTemperatureForDate(convertedDate);
    }
});

function fetchTemperatureForDate(selectedDate) {
    const apiKey = 'f36e2314242fc6168b56fd8558d1bdf6';
    const city = 'Buenos Aires';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},AR&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {

        const filteredData = data.list.filter(item => item.dt_txt.includes(selectedDate));
        
        const temperatures = filteredData.map(item => item.main.temp_max);

        const tempMaxAvg = temperatures.length > 0 
            ? temperatures.reduce((acc, temp) => acc + temp, 0) / temperatures.length 
            : 0;

        document.getElementById('tempMaxima').textContent = tempMaxAvg.toFixed(2);

        const tempDetalles = document.getElementById('tempDetalles');
        const tempBodyOfTable = document.getElementById('tempBodyOfTable');
        tempBodyOfTable.innerHTML = '';

        if (filteredData.length > 0) {
            tempDetalles.classList.remove('hidden');
            
            filteredData.forEach(item => {
                const row = document.createElement('tr');
                const timeOfDay = item.dt_txt.split(' ')[1];
                row.innerHTML = `
                    <td class="border border-gray-300 px-4 py-2">${timeOfDay}</td>
                    <td class="border border-gray-300 px-4 py-2">${item.main.temp_max}°C</td>
                `;
                tempBodyOfTable.appendChild(row);
            });
        } else {
            tempDetalles.classList.add('hidden');
        }
      })
      .catch(error => console.error('Error al obtener los datos:', error));
}

document.getElementById('limpiarBtn').addEventListener('click', function() {
    document.getElementById('tempMaxima').textContent = '--';
    const tempBodyOfTable = document.getElementById('tempBodyOfTable');
    tempBodyOfTable.innerHTML = '';
    document.getElementById('tempDetalles').classList.add('hidden');
});