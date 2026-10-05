// 1. Функция для отрисовки всех карточек при загрузке страницы
function renderMonuments() {
    const grid = document.getElementById('monuments-grid'); // Находим сетку в HTML
    
    // Перебираем массив monuments из файла data.js
    monuments.forEach(monument => {
        // Создаем HTML-код для одной карточки
        const card = `
            <div onclick="openRiddle(${monument.id})" class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer group overflow-hidden">
                <div class="overflow-hidden">
                    <img src="${monument.macroImg}" class="w-full h-64 object-cover group-hover:scale-110 transition duration-500">
                </div>
                <div class="p-4 text-center">
                    <p class="text-stone-500 italic">"${monument.status}"</p>
                </div>
            </div>
        `;
        grid.innerHTML += card; // Добавляем созданную карточку в сетку
    });
}

// 2. Функция открытия модального окна (экран загадки)
function openRiddle(id) {
    // Находим в массиве памятник с соответствующим id
    const monument = monuments.find(m => m.id === id);
    
    // Заполняем данные в окне
    document.getElementById('modal-macro-img').src = monument.macroImg; // Ставим макро-фото
    document.getElementById('modal-hint').innerText = monument.hint; // Ставим подсказку
    
    // Подготавливаем данные для второго экрана (профиля), чтобы они уже были там
    document.getElementById('modal-full-img').src = monument.fullImg;
    document.getElementById('modal-name').innerText = monument.name;
    document.getElementById('modal-bio').innerText = monument.bio;
    document.getElementById('modal-link').href = monument.coords;

    // Показываем окно и сбрасываем его на первый экран (загадку)
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('riddle-screen').classList.remove('hidden');
    document.getElementById('profile-screen').classList.add('hidden');
}

// 3. Функция переключения с загадки на профиль
function revealProfile() {
    // Скрываем экран загадки
    document.getElementById('riddle-screen').classList.add('hidden');
    // Показываем экран профиля
    document.getElementById('profile-screen').classList.remove('hidden');
}

// 4. Функция закрытия окна
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Запускаем отрисовку памятников сразу после загрузки страницы
window.onload = renderMonuments;
