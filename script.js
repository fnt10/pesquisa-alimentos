// Banco de dados de alimentos
const foodData = [
    { name: 'Arroz', calories: 130, fat: 0.3, carbs: 28 },
    { name: 'Feijão', calories: 130, fat: 0.6, carbs: 24 },
    { name: 'Banana', calories: 89, fat: 0.3, carbs: 23 },
    { name: 'Maçã', calories: 52, fat: 0.2, carbs: 14 },
    { name: 'Peito de Frango', calories: 165, fat: 3.6, carbs: 0 },
    { name: 'Ovo', calories: 68, fat: 4.8, carbs: 0.6 },
    { name: 'Batata', calories: 77, fat: 0.1, carbs: 17 },
    { name: 'Queijo', calories: 402, fat: 33, carbs: 1.3 }
];

// Definição do debounce para evitar múltiplas chamadas
let debounceTimeout;
function debounceSearch() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        searchFood();
    }, 300);
}

// Função de pesquisa básica
function searchFood() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (searchQuery === '') return;

    const filteredFoods = foodData.filter(food =>
        food.name.toLowerCase().includes(searchQuery)
    );

    if (filteredFoods.length > 0) {
        filteredFoods.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');

            // Input para o peso do alimento
            foodItem.innerHTML = `
                <h3>${food.name}</h3>
                <label>Informe o peso (g):</label>
                <input type="number" class="food-weight" data-name="${food.name}" min="1" placeholder="100" value="100">
                <p><strong>Calorias:</strong> <span class="calories">${food.calories}</span> kcal</p>
                <p><strong>Gorduras:</strong> <span class="fat">${food.fat}</span> g</p>
                <p><strong>Carboidratos:</strong> <span class="carbs">${food.carbs}</span> g</p>
            `;
            resultDiv.appendChild(foodItem);
        });

        // Adiciona eventos para calcular os valores nutricionais com base no peso informado
        document.querySelectorAll('.food-weight').forEach(input => {
            input.addEventListener('input', updateNutrition);
        });
    } else {
        resultDiv.innerHTML = '<p>Nenhum alimento encontrado.</p>';
    }
}

// Função para recalcular os valores nutricionais com base no peso informado
function updateNutrition(event) {
    const weight = parseFloat(event.target.value) || 100;
    const foodName = event.target.getAttribute('data-name');
    
    const food = foodData.find(f => f.name === foodName);
    
    if (food) {
        const parentDiv = event.target.parentElement;
        parentDiv.querySelector('.calories').textContent = ((food.calories * weight) / 100).toFixed(2);
        parentDiv.querySelector('.fat').textContent = ((food.fat * weight) / 100).toFixed(2);
        parentDiv.querySelector('.carbs').textContent = ((food.carbs * weight) / 100).toFixed(2);
    }
}
