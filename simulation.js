document.addEventListener('DOMContentLoaded', function () {
    var simulationLink = document.getElementById('simulationLink');
    var simulationContainer = document.getElementById('simulationContainer');
    var datePickerContainer = document.getElementById('datePickerContainer');
    var contractTypeRadioButtons = document.querySelectorAll('input[name="contractType"]');
    const starRating = document.getElementById('starRating');
    const ratingInput = document.getElementById('rating');

    
    simulationLink.addEventListener('click', function () {
        simulationContainer.style.display = 'block';
        simulateProfessionals();
    });
    contractTypeRadioButtons.forEach(function (button) {
        button.addEventListener('change', function () {
            toggleDatePickers();
        });
    });
 // Adiciona eventos de clique às estrelas para selecionar a classificação
 starRating.addEventListener('click', function (e) {
    if (e.target.classList.contains('star')) {
        const rating = e.target.getAttribute('data-rating');
        ratingInput.value = rating;

        // Remove a classe 'selected' de todas as estrelas
        document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));

        // Adiciona a classe 'selected' à estrela clicada e a todas as estrelas anteriores
        e.target.classList.add('selected');
        let prev = e.target.previousElementSibling;
        while (prev) {
            prev.classList.add('selected');
            prev = prev.previousElementSibling;
        }
    }
});

    function toggleDatePickers() {
        // Modificado para percorrer todos os botões de opção "contractType"
        contractTypeRadioButtons.forEach(function (button) {
            datePickerContainer.style.display = button.value === 'specificDate' ? 'block' : 'none';
        });
    }

    function simulateProfessionals() {
        var serviceType = prompt('What service are you looking for? (Security, Receptionist, Cleaning)');
        var simulationResult = document.createElement('p');
        simulationContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior

        if (serviceType === 'Security') {
            handleSecuritySimulation(simulationResult);
        } else if (serviceType === 'Receptionist') {
            handleReceptionistSimulation(simulationResult);
        } else if (serviceType === 'Cleaning') {
            handleCleaningSimulation(simulationResult);
        } else {
            simulationResult.textContent = 'Please select one of the services available';
        }

        simulationContainer.appendChild(simulationResult);
        simulationContainer.style.display = 'block';
    }

    function handleSecuritySimulation(simulationResult) {
        var numberOfPeople = parseInt(prompt('How many people are expected in your event/company?'));

        if (isNaN(numberOfPeople)) {
            simulationResult.textContent = 'Please enter a valid number';
        } else {
            if (numberOfPeople < 15) {
                simulationResult.textContent = 'We suggest: 1 Security';
            } else if (numberOfPeople >= 15 && numberOfPeople <= 50) {
                simulationResult.textContent = 'We suggest: 4 Security';
            } else {
                simulationResult.textContent = 'Get in touch with our team';
            }
        }
    }

    function handleReceptionistSimulation(simulationResult) {
        var numberOfPeople = parseInt(prompt('How many people are expected in your event/company?'));

        if (isNaN(numberOfPeople)) {
            simulationResult.textContent = 'Please enter a valid number';
        } else {
            if (numberOfPeople >= 1 && numberOfPeople <= 50) {
                simulationResult.textContent = 'We suggest: 1 Receptionist';
            } else if (numberOfPeople > 50 && numberOfPeople <= 100) {
                simulationResult.textContent = 'We suggest: 2 Receptionists';
            } else if (numberOfPeople > 100 && numberOfPeople <= 200) {
                simulationResult.textContent = 'We suggest: 4 Receptionists';
            } else {
                simulationResult.textContent = 'Get in touch with our team';
            }
        }
    }

    function handleCleaningSimulation(simulationResult) {
        var numberOfPeople = parseInt(prompt('How many people are expected in your event/company?'));

        if (isNaN(numberOfPeople)) {
            simulationResult.textContent = 'Please enter a valid number';
        } else {
            if (numberOfPeople >= 1 && numberOfPeople <= 20) {
                simulationResult.textContent = 'We suggest: 1 Cleaner';
            } else if (numberOfPeople > 20 && numberOfPeople <= 40) {
                simulationResult.textContent = 'We suggest: 2 Cleaners';
            } else if (numberOfPeople > 40 && numberOfPeople <= 70) {
                simulationResult.textContent = 'We suggest: 4 Cleaners';
            } else {
                simulationResult.textContent = 'Get in touch with our team';
            }
        }
    }
});
