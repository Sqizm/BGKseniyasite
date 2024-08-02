// Collapsible block
document.querySelectorAll('.collapsible-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Проверяем наличие следующего элемента
        if (content) {
            // Переключаем видимость
            const isOpen = content.classList.toggle('open');
            content.style.display = isOpen ? 'block' : 'none'; // Выключаем display перед изменением высоты

            // Устанавливаем высоту для анимации
            if (isOpen) {
                content.style.height = content.scrollHeight + 'px';
            } else {
                content.style.height = '0';
            }
        }
    });
});

//Modal
const adultModal = document.getElementById("adultModal");
const childModal = document.getElementById("childModal");
const compatibilityModal = document.getElementById("compatibilityModal");
const profVectorModal = document.getElementById("profVectorModal");
const expressConsulModal = document.getElementById("expressConsulModal");

const adultBtn = document.getElementById("adultBtn");
const childBtn = document.getElementById("childBtn");
const compatibilityBtn = document.getElementById("compatibilityBtn");
const profVectorBtn = document.getElementById("profVectorBtn");
const expressConsulBtn = document.getElementById("expressConsulBtn");

const closeAdults = adultModal.getElementsByClassName("close")[0];
const closeChilds = childModal.getElementsByClassName("close")[0];
const closeCompatibility = compatibilityModal.getElementsByClassName("close")[0];
const closeProfVector = profVectorModal.getElementsByClassName("close")[0];
const closeExpressConsul = expressConsulModal.getElementsByClassName("close")[0];

// Открытие модального окна для взрослых
adultBtn.onclick = function() {
    adultModal.style.display = "block";
}

// Открытие модального окна для детей
childBtn.onclick = function() {
    childModal.style.display = "block";
}

// Открытие модального окна для анализа совместимости
compatibilityBtn.onclick = function() {
    compatibilityModal.style.display = "block";
}

// Открытие модального окна для проф вектора
profVectorBtn.onclick = function() {
    profVectorModal.style.display = "block";
}

// Открытие модального окна для экспресс конусль.
expressConsulBtn.onclick = function() {
    expressConsulModal.style.display = "block";
}

// Закрытие модального окна для взрослых
closeAdults.onclick = function() {
    adultModal.style.display = "none";
}

// Закрытие модального окна для детей
closeChilds.onclick = function() {
    childModal.style.display = "none";
}

// Закрытие модального окна для анализа совместимости
closeCompatibility.onclick = function() {
    compatibilityModal.style.display = "none";
}

// Закрытие модального окна для проф вектора
closeProfVector.onclick = function() {
    profVectorModal.style.display = "none";
}

// Закрытие модального окна для проф вектора
closeExpressConsul.onclick = function() {
    expressConsulModal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target === adultModal) {
        adultModal.style.display = "none";
    }
    if (event.target === childModal) {
        childModal.style.display = "none";
    }
    if (event.target === compatibilityModal) {
        compatibilityModal.style.display = "none";
    }
    if (event.target === profVectorModal) {
        profVectorModal.style.display = "none";
    }
    if (event.target === expressConsulModal) {
        expressConsulModal.style.display = "none";
    }
}

// Navbar for mobile
const toggleNav = document.querySelector('.toggle-nav');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a[data-nav]');
const body = document.body;

toggleNav.addEventListener('click', () => {
    toggleNav.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleNav.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

body.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) {
        toggleNav.classList.remove('active');
        navMenu.classList.remove('active');
    }
});