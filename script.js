// Banco de dados de alimentos
const foodData = [
    { name: 'Arroz', calories: 130, fat: 0.3, carbs: 28, protein: 2.7, },
    { name: 'Feijão', calories: 130, fat: 0.6, carbs: 24, protein: 8.7, },
    { name: 'Banana', calories: 89, fat: 0.3, carbs: 23, protein: 1.1, },
    { name: 'Maçã', calories: 52, fat: 0.2, carbs: 14, protein: 0.3, },
    { name: 'Peito de Frango', calories: 165, fat: 3.6, carbs: 0, protein: 31, },
    { name: 'Ovo', calories: 68, fat: 4.8, carbs: 0.6, protein: 5.5, },
    { name: 'Batata', calories: 77, fat: 0.1, carbs: 17, protein: 2, },
    { name: 'Queijo Mussarela', calories: 402, fat: 33, carbs: 1.3, protein: 25, },
    { name: 'Salmão', calories: 206, fat: 13, carbs: 0, protein: 22, },
    { name: 'Espinafre', calories: 23, fat: 0.4, carbs: 3.6, protein: 2.9, },
    { name: 'Aveia', calories: 389, fat: 6.9, carbs: 66, protein: 16.9, },
    { name: 'Amêndoas', calories: 579, fat: 49, carbs: 22, protein: 21 },
    { name: 'Tomate', calories: 18, fat: 0.2, carbs: 3.9, protein: 0.9, },
    { name: 'Whey', calories: 120, fat: 2.5, carbs: 3, protein: 24 },
    { name: 'Leite', calories: 60, fat: 3.3, carbs: 4.8, protein: 3.2 },
    { name: 'Requeijão', calories: 291, fat: 22, carbs: 6.3, protein: 10 },
    { name: 'Pão Francês', calories: 135, fat: 1.5, carbs: 25, protein: 4 },
    { name: 'Pão Integral', calories: 265, fat: 4.2, carbs: 41, protein: 9 },
    { name: 'Mussarela', calories: 280, fat: 22, carbs: 1.4, protein: 20 },
    { name: 'Carne Moída', calories: 250, fat: 20, carbs: 0, protein: 26 },
    { name: 'Carne de Sol', calories: 270, fat: 22, carbs: 0, protein: 27 },
    { name: 'Queijo Minas Frescal', calories: 280, fat: 21, carbs: 3.5, protein: 18 },
    { name: 'Peixe (Tilápia)', calories: 128, fat: 2.7, carbs: 0, protein: 26 },
    { name: 'Lentilha', calories: 116, fat: 0.4, carbs: 20, protein: 9 },
    { name: 'Chia', calories: 486, fat: 30, carbs: 42, protein: 17 },
    { name: 'Pera', calories: 57, fat: 0.1, carbs: 15, protein: 0.4 },
    { name: 'Tangerina', calories: 53, fat: 0.3, carbs: 13, protein: 0.8 },
    { name: 'Morango', calories: 32, fat: 0.3, carbs: 7.7, protein: 0.7 },
    { name: 'Jaca', calories: 95, fat: 0.6, carbs: 23.5, protein: 1.7 },
    { name: 'Cacau', calories: 228, fat: 14, carbs: 58, protein: 19.6 },
    { name: 'Mandioca', calories: 160, fat: 0.3, carbs: 38, protein: 1.4 },
    { name: 'Milho', calories: 96, fat: 1.5, carbs: 21, protein: 3.4 },
    { name: 'Amendoim', calories: 567, fat: 49, carbs: 16, protein: 25 },
    { name: 'Açaí', calories: 70, fat: 4, carbs: 12, protein: 1.5 },
    { name: 'Pão de Francês', calories: 80, fat: 1, carbs: 15, protein: 2.7 },
    { name: 'Mayse Whey', calories: 149, fat: 2.1, carbs: 7.5, protein: 32 },
];

document.getElementById("searchInput").addEventListener("input", function() {
    const searchQuery = this.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    // Verifica se há pelo menos 3 caracteres digitados
    if (searchQuery.length >= 3) {
        const matchedFood = foodData.find(food => 
            food.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === searchQuery
        );

        if (matchedFood) {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');

            // Campos para peso e resultados nutricionais
            foodItem.innerHTML = `
                <h3>${matchedFood.name}</h3>
                <label>Peso (g):</label>
                <input type="number" class="food-weight" data-name="${matchedFood.name}" min="1" placeholder="100" value="100">
                
                <p><strong>Calorias:</strong> <span class="calories">${matchedFood.calories}</span> kcal</p>
                <p><strong>Gorduras:</strong> <span class="fat">${matchedFood.fat}</span> g</p>
                <p><strong>Carboidratos:</strong> <span class="carbs">${matchedFood.carbs}</span> g</p>
                <p><strong>Proteinas:</strong> <span class="protein">${matchedFood.carbs}</span> g</p>
            `;
            resultDiv.appendChild(foodItem);

            // Adiciona eventos para calcular os valores nutricionais conforme o peso
            document.querySelector('.food-weight').addEventListener('input', updateNutrition);
        } else {
            resultDiv.innerHTML = '<p>Nenhum alimento encontrado.</p>';
        }
    }

    // Atualiza os valores nutricionais com base no peso informado
    function updateNutrition(event) {
        const weight = parseFloat(event.target.value) || 100;
        const foodName = event.target.getAttribute('data-name');
        const food = foodData.find(f => f.name === foodName);

        if (food) {
            const parentDiv = event.target.parentElement;
            parentDiv.querySelector('.calories').textContent = ((food.calories * weight) / 100).toFixed(2);
            parentDiv.querySelector('.fat').textContent = ((food.fat * weight) / 100).toFixed(2);
            parentDiv.querySelector('.carbs').textContent = ((food.carbs * weight) / 100).toFixed(2);
            parentDiv.querySelector('.protein').textContent = ((food.protein * weight) /100).toFixed(2);
        }
    }
});


