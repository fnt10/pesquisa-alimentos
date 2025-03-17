// Banco de dados de alimentos
const foodData = [
    { name: 'Arroz', calories: 130, fat: 0.3, carbs: 28, minerals: { ferro: '0.2mg', magnésio: '12mg', potássio: '35mg' } },
    { name: 'Feijão', calories: 130, fat: 0.6, carbs: 24, minerals: { ferro: '2.5mg', magnésio: '50mg', potássio: '250mg' } },
    { name: 'Banana', calories: 89, fat: 0.3, carbs: 23, minerals: { potássio: '358mg', magnésio: '27mg', vitaminaC: '8.7mg' } },
    { name: 'Maçã', calories: 52, fat: 0.2, carbs: 14, minerals: { potássio: '107mg', vitaminaC: '4.6mg', cálcio: '6mg' } },
    { name: 'Peito de Frango', calories: 165, fat: 3.6, carbs: 0, minerals: { ferro: '0.9mg', zinco: '1mg', magnésio: '30mg' } },
    { name: 'Ovo', calories: 68, fat: 4.8, carbs: 0.6, minerals: { ferro: '1.2mg', cálcio: '50mg', zinco: '1.3mg' } },
    { name: 'Batata', calories: 77, fat: 0.1, carbs: 17, minerals: { potássio: '429mg', magnésio: '23mg', ferro: '0.8mg' } },
    { name: 'Queijo Mussarela', calories: 402, fat: 33, carbs: 1.3, minerals: { cálcio: '721mg', ferro: '0.7mg', fósforo: '512mg' } },
    { name: 'Salmão', calories: 206, fat: 13, carbs: 0, minerals: { ômega3: '2.2g', magnésio: '37mg', potássio: '363mg' } },
    { name: 'Espinafre', calories: 23, fat: 0.4, carbs: 3.6, minerals: { ferro: '2.7mg', cálcio: '99mg', magnésio: '79mg' } },
    { name: 'Aveia', calories: 389, fat: 6.9, carbs: 66, minerals: { ferro: '4.7mg', magnésio: '177mg', zinco: '3.6mg' } },
    { name: 'Amêndoas', calories: 579, fat: 49, carbs: 22, minerals: { magnésio: '268mg', ferro: '3.7mg', cálcio: '264mg' } },
    { name: 'Tomate', calories: 18, fat: 0.2, carbs: 3.9, minerals: { potássio: '237mg', cálcio: '18mg', magnésio: '11mg' } },
    { name: 'Abacaxi', calories: 50, fat: 0.1, carbs: 13, minerals: { potássio: '180mg', magnésio: '12mg', cálcio: '13mg' } },
    { name: 'Cenoura', calories: 41, fat: 0.2, carbs: 10, minerals: { potássio: '320mg', cálcio: '33mg', magnésio: '12mg' } },
    { name: 'Brócolis', calories: 34, fat: 0.4, carbs: 7, minerals: { cálcio: '47mg', ferro: '0.7mg', magnésio: '21mg' } },
    { name: 'Abóbora', calories: 26, fat: 0.1, carbs: 6.5, minerals: { potássio: '340mg', magnésio: '15mg', ferro: '0.5mg' } },
    { name: 'Alface', calories: 5, fat: 0.1, carbs: 1, minerals: { cálcio: '18mg', ferro: '0.3mg', potássio: '194mg' } },
    { name: 'Alho', calories: 149, fat: 0.5, carbs: 33, minerals: { cálcio: '181mg', ferro: '1.7mg', potássio: '401mg' } },
    { name: 'Manga', calories: 60, fat: 0.4, carbs: 15, minerals: { potássio: '168mg', cálcio: '11mg', magnésio: '18mg' } },
    { name: 'Laranja', calories: 43, fat: 0.1, carbs: 11, minerals: { potássio: '181mg', cálcio: '40mg', vitaminaC: '53.2mg' } },
    { name: 'Manteiga', calories: 717, fat: 81, carbs: 0.1, minerals: { cálcio: '24mg', fósforo: '19mg' } },
    { name: 'Peixe (Tilápia)', calories: 128, fat: 2.7, carbs: 0, minerals: { ferro: '0.8mg', magnésio: '30mg', potássio: '380mg' } },
    { name: 'Lentilha', calories: 116, fat: 0.4, carbs: 20, minerals: { ferro: '3.6mg', cálcio: '19mg', magnésio: '36mg' } },
    { name: 'Chia', calories: 486, fat: 30, carbs: 42, minerals: { magnésio: '335mg', ferro: '7.7mg', cálcio: '631mg' } },
    { name: 'Couve', calories: 33, fat: 0.6, carbs: 6.7, minerals: { cálcio: '150mg', ferro: '1.5mg', magnésio: '29mg' } },
    { name: 'Pera', calories: 57, fat: 0.1, carbs: 15, minerals: { potássio: '116mg', cálcio: '9mg', magnésio: '8mg' } },
    { name: 'Acelga', calories: 19, fat: 0.2, carbs: 3.7, minerals: { cálcio: '51mg', ferro: '0.8mg', potássio: '249mg' } },
    { name: 'Beterraba', calories: 43, fat: 0.2, carbs: 10, minerals: { potássio: '305mg', cálcio: '16mg', ferro: '0.8mg' } },
    { name: 'Pepino', calories: 16, fat: 0.1, carbs: 3.6, minerals: { cálcio: '16mg', ferro: '0.3mg', potássio: '147mg' } },
    { name: 'Pistache', calories: 562, fat: 45, carbs: 28, minerals: { magnésio: '158mg', ferro: '3.9mg', cálcio: '105mg' } },
    { name: 'Coco', calories: 354, fat: 33, carbs: 15, minerals: { magnésio: '29mg', ferro: '2.4mg', cálcio: '14mg' } },
    { name: 'Sardinha', calories: 208, fat: 11, carbs: 0, minerals: { ferro: '2.5mg', cálcio: '320mg', magnésio: '30mg' } },
    { name: 'Tangerina', calories: 53, fat: 0.3, carbs: 13, minerals: { potássio: '166mg', cálcio: '30mg', vitaminaC: '33.9mg' } },
    { name: 'Morango', calories: 32, fat: 0.3, carbs: 7.7, minerals: { potássio: '153mg', cálcio: '16mg', vitaminaC: '58.8mg' } },
    { name: 'Jaca', calories: 95, fat: 0.6, carbs: 23.5, minerals: { potássio: '303mg', magnésio: '29mg', cálcio: '24mg' } },
    { name: 'Cacau', calories: 228, fat: 14, carbs: 58, minerals: { ferro: '13.9mg', magnésio: '272mg', cálcio: '56mg' } },
    { name: 'Mandioca', calories: 160, fat: 0.3, carbs: 38, minerals: { cálcio: '30mg', potássio: '331mg', magnésio: '37mg' } },
    { name: 'Milho', calories: 96, fat: 1.5, carbs: 21, minerals: { ferro: '0.4mg', magnésio: '37mg', potássio: '235mg' } },
    { name: 'Amendoim', calories: 567, fat: 49, carbs: 16, minerals: { magnésio: '168mg', ferro: '4.6mg', cálcio: '92mg' } },
    { name: 'Açaí', calories: 70, fat: 4, carbs: 12, minerals: { ferro: '0.6mg', cálcio: '30mg', magnésio: '30mg' } },
    { name: 'Pão Integral', calories: 265, fat: 4.2, carbs: 41, minerals: { ferro: '3.5mg', magnésio: '60mg', potássio: '200mg' } },
    { name: 'Mussarela', calories: 280, fat: 22, carbs: 1.4, minerals: { cálcio: '500mg', fósforo: '350mg', potássio: '180mg' } },
    { name: 'Abóbora (Cabotiá)', calories: 42, fat: 0.1, carbs: 11, minerals: { potássio: '340mg', magnésio: '20mg', cálcio: '20mg' } },
    { name: 'Caqui', calories: 70, fat: 0.2, carbs: 18, minerals: { potássio: '160mg', cálcio: '8mg', magnésio: '10mg' } },
    { name: 'Carne Moída', calories: 250, fat: 20, carbs: 0, minerals: { ferro: '3mg', zinco: '4mg', fósforo: '210mg' } },
    { name: 'Carne de Sol', calories: 270, fat: 22, carbs: 0, minerals: { ferro: '3.5mg', fósforo: '300mg', potássio: '290mg' } },
    { name: 'Queijo Minas Frescal', calories: 280, fat: 21, carbs: 3.5, minerals: { cálcio: '650mg', fósforo: '200mg', potássio: '250mg' } },
    { name: 'Cabelinho de Milho', calories: 55, fat: 1.5, carbs: 9, minerals: { potássio: '105mg', magnésio: '20mg', cálcio: '13mg' } },
    { name: 'Whey Protein', calories: 120, fat: 2.5, carbs: 3, protein: 24 },
    { name: 'Pão de Forma', calories: 80, fat: 1, carbs: 15 },
    { name: 'Leite', calories: 60, fat: 3.3, carbs: 4.8, protein: 3.2 },
    { name: 'Requeijão', calories: 291, fat: 22, carbs: 6.3 },
    { name: 'Pão Francês', calories: 135, fat: 1.5, carbs: 25 }
];

        // Função de pesquisa
        document.getElementById("searchInput").addEventListener("input", function() {
            const searchQuery = this.value.toLowerCase();
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';

            // Verifica se o nome do alimento está completo e se possui pelo menos 3 caracteres
            if (searchQuery.length >= 3) {
                const matchedFood = foodData.find(food => food.name.toLowerCase() === searchQuery);

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
                    `;
                    resultDiv.appendChild(foodItem);

                    // Adiciona eventos para calcular os valores nutricionais conforme o peso
                    document.querySelectorAll('.food-weight').forEach(input => {
                        input.addEventListener('input', updateNutrition);
                    });
                } else {
                    resultDiv.innerHTML = '<p>Nenhum alimento encontrado.</p>';
                }
            }
        });

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
            }
        }

