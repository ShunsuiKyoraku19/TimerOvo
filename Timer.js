const iniciarBtn = document.getElementById('iniciar');
        const contadorDisplay = document.getElementById('contador');
        const tempoSelect = document.getElementById('tempo');
        let intervalo;

        iniciarBtn.addEventListener('click', () => {
            let tempoSelecionado = parseInt(tempoSelect.value) * 60; // converter minutos para segundos
            clearInterval(intervalo);
            iniciarContagem(tempoSelecionado);
        });

const resetarBtn = document.getElementById('parar');
        resetarBtn.addEventListener('click', resetarContador);        

        function iniciarContagem(segundos) {
            intervalo = setInterval(() => {
                if (segundos <= 0) {
                    clearInterval(intervalo);
                    alert('Ovo pronto!');
                    contadorDisplay.textContent = '00:00';
                    return;
                }
                segundos--;
                const minutos = Math.floor(segundos / 60);
                const segundosRestantes = segundos % 60;
                contadorDisplay.textContent = `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
            }, 1000);
        }
        function resetarContador() {
            clearInterval(intervalo);
            contadorDisplay.textContent = '00:00';
        }