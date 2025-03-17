// Banco de dados de alimentos (embutido no código)
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

// Definindo o tempo de debounce para aguardar o usuário parar de digitar
let debounceTimeout;

// Função de pesquisa com debounce
function debounceSearch() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    // Limpar resultados antigos
    resultDiv.innerHTML = '';

    // Se a pesquisa estiver vazia, não mostrar nada
    if (searchQuery === '') {
        return;
    }

    // Limpar o timeout anterior (se houver) e iniciar um novo
    clearTimeout(debounceTimeout);

    // Aguardar 500ms após o último caractere digitado para realizar a pesquisa
    debounceTimeout = setTimeout(() => {
        searchFood(searchQuery);
    }, 500);
}

// Função de execução da pesquisa
function searchFood(searchQuery) {
    const resultDiv = document.getElementById('result');

    // Filtrar alimentos com base na pesquisa
    const filteredFoods = foodData.filter(food => food.name.toLowerCase().includes(searchQuery));

    // Mostrar resultados
    if (filteredFoods.length > 0) {
        filteredFoods.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');
            foodItem.innerHTML = `
                <h3>${food.name}</h3>
                <p><strong>Calorias:</strong> ${food.calories} kcal</p>
                <p><strong>Gorduras:</strong> ${food.fat} g</p>
                <p><strong>Carboidratos:</strong> ${food.carbs} g</p>
            `;
            resultDiv.appendChild(foodItem);
        });
    } else {
        resultDiv.innerHTML = '<p>Nenhum alimento encontrado.</p>';
    }
}
