const translations = {
    es: {
        greeting: "Hola, soy",
        role: "Desarrollador Web &",
        subrole: "Especialista WordPress",
        bio: "Transformo ideas en experiencias digitales modernas y funcionales. Especializado en crear sitios web de alto rendimiento con enfoque en diseño, SEO y experiencia de usuario.",
        viewProjects: "Ver Proyectos",
        viewExperience: "Mi Experiencia",
        experienceTitle: "Experiencia Laboral",
        projectsTitle: "Proyectos Personales",
        contactTitle: "Contáctame",
        contactText: "¿Tienes un proyecto en mente? ¡Hablemos!",
        navHome: "Inicio",
        navExperience: "Experiencia",
        navProjects: "Proyectos",
        navContact: "Contacto"
    },
    en: {
        greeting: "Hi, I'm",
        role: "Web Developer &",
        subrole: "WordPress Specialist",
        bio: "I transform ideas into modern and functional digital experiences. Specialized in creating high-performance websites with a focus on design, SEO, and user experience.",
        viewProjects: "View Projects",
        viewExperience: "My Experience",
        experienceTitle: "Work Experience",
        projectsTitle: "Personal Projects",
        contactTitle: "Contact Me",
        contactText: "Have a project in mind? Let's talk!",
        navHome: "Home",
        navExperience: "Experience",
        navProjects: "Projects",
        navContact: "Contact"
    }
};

const experienceData = [
    {
        company: "EWED",
        role: { es: "Desarrollador WordPress", en: "WordPress Developer" },
        period: { es: "Septiembre 2025 - Presente", en: "September 2025 - Present" },
        description: {
            es: "Desarrollo y mantenimiento de sitios web corporativos y e-commerce utilizando WordPress. Implementación de diseños personalizados y optimización de rendimiento.",
            en: "Development and maintenance of corporate and e-commerce websites using WordPress. Implementation of custom designs and performance optimization."
        },
        projects: [
            { name: "Cerco Vivo", url: "https://cercovivo.cl/" },
            { name: "Wow Multibarras", url: "https://wowmultibarras.com/" },
            { name: "Cortinas TJ", url: "https://cortinastj.cl/" },
            { name: "Quebrada Lodge Papudo", url: "https://quebradalodgepapudo.cl/" },
            { name: "Arpideco", url: "https://arpideco.cl/" }
        ]
    },
    {
        company: "Magnova Agency",
        role: { es: "Frontend & Desarrollador Web", en: "Frontend & Web Developer" },
        period: { es: "Enero 2025 - Agosto 2025", en: "January 2025 - August 2025" },
        description: {
            es: "Desarrollo de sitios web en WordPress y optimización SEO. Colaboración directa con clientes para definir requerimientos y entregar soluciones a medida.",
            en: "WordPress website development and SEO optimization. Direct collaboration with clients to define requirements and deliver custom solutions."
        },
        projects: [
            { name: "Magnova Agency", url: "https://magnovaagency.com/" },
            { name: "My Home Punta Cana", url: "https://www.myhomepuntacana.com/" },
            { name: "Punta Cana Consulting Group", url: "https://puntacanaconsultinggroup.com/" }
        ]
    },
    {
        company: "Lotería De Hoy",
        role: { es: "Diseñador y Maquetador de Email Marketing", en: "Email Marketing Designer & Developer" },
        period: { es: "Enero 2024 - Marzo 2024", en: "January 2024 - March 2024" },
        description: {
            es: "Diseño visual en Figma y maquetación HTML de plantillas de email marketing responsive.",
            en: "Visual design in Figma and HTML coding of responsive email marketing templates."
        },
        projects: []
    }
];

const projectsData = [
    {
        title: "Monitor Dólar Venezuela",
        type: "Web App",
        description: {
            es: "Aplicación web para monitorear el precio del dólar en Venezuela en tiempo real. Diseño moderno y funcional con Next.js y Tailwind CSS.",
            en: "Web application to monitor the dollar price in Venezuela in real time. Modern and functional design with Next.js and Tailwind CSS."
        },
        links: [
            { text: { es: "Ver Proyecto", en: "View Project" }, url: "https://monitor-dolar-venezuela-yxsa.vercel.app/" }
        ]
    },
    {
        title: "TuMobiliaria",
        type: "Web App",
        description: {
            es: "Plataforma web moderna para búsqueda y gestión de propiedades inmobiliarias. Desarrollado con Vue 3, Vite y Tailwind CSS.",
            en: "Modern web platform for real estate property search and management. Developed with Vue 3, Vite and Tailwind CSS."
        },
        links: [
            { text: { es: "Ver Proyecto", en: "View Project" }, url: "https://tumobiliaria.vercel.app/" }
        ]
    },
    {
        title: "Luxury Motors Portfolio",
        type: "Web App",
        description: {
            es: "Sitio web moderno para concesionario de autos de lujo con visualizador 3D interactivo, slider de vehículos destacados, y sistema de cotización. Desarrollado con React, Three.js y Tailwind CSS.",
            en: "Modern website for luxury car dealership with interactive 3D viewer, featured vehicles slider, and quote system. Developed with React, Three.js and Tailwind CSS."
        },
        links: [
            { text: { es: "Ver Prototipo", en: "View Prototype" }, url: "https://luxury-motors-portfolio.vercel.app/" }
        ]
    },
    {
        title: "Tic-Tac-Toe Imbatible",
        type: "Web App",
        description: {
            es: "Juego de Tic-Tac-Toe con algoritmo Minimax para una IA invencible. Desarrollado con HTML, CSS y JavaScript puro.",
            en: "Tic-Tac-Toe game with Minimax algorithm for an invincible AI. Developed with pure HTML, CSS, and JavaScript."
        },
        links: [
            { text: { es: "Ver Código", en: "View Code" }, url: "https://github.com/Willians45/TicTacToe?tab=readme-ov-file" }
        ]
    },
    {
        title: "Appbook Prototype",
        type: "UI/UX Design",
        description: {
            es: "Diseño y prototipado de alta fidelidad para una aplicación de lectura de libros.",
            en: "High-fidelity design and prototyping for a book reading application."
        },
        links: [
            { text: { es: "Ver Prototipo", en: "View Prototype" }, url: "https://www.figma.com/proto/fAAaZBi3dD2VfXtUJjeYLd/Book-App?node-id=9-293&t=0g6LZawC0UK6Etos-1&starting-point-node-id=1%3A2" }
        ]
    },
    {
        title: "Landing Page Concept",
        type: "UI/UX Design",
        description: {
            es: "Diseño moderno de landing page con versiones desktop y mobile.",
            en: "Modern landing page design with desktop and mobile versions."
        },
        links: [
            { text: { es: "Ver Prototipo", en: "View Prototype" }, url: "https://www.figma.com/proto/shwi79n67Ij4UENyZq1yrz/Landing---K?node-id=47-146&node-type=CANVAS&t=F6kSmbeP88hkFZRr-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" }
        ]
    },
    {
        title: "Email Template",
        type: "Email Design",
        description: {
            es: "Plantilla de email marketing moderna y responsive.",
            en: "Modern and responsive email marketing template."
        },
        links: [
            { text: { es: "Ver Diseño", en: "View Design" }, url: "https://drive.google.com/drive/folders/1mu4Ng-KQ4cHrGvXvA8-QVJcrpjGPgzlQ" }
        ]
    }
];

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `lang-${lang}`) btn.classList.add('active');
    });

    // Update static text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Nav Text
    const navItems = document.querySelectorAll('.nav-links li span');
    navItems[0].textContent = translations[lang].navHome;
    navItems[1].textContent = translations[lang].navExperience;
    navItems[2].textContent = translations[lang].navProjects;
    navItems[3].textContent = translations[lang].navContact;

    // Re-render dynamic content
    renderExperience();
    renderProjects();
}

function renderExperience() {
    const container = document.getElementById('experience-list');
    container.innerHTML = experienceData.map(item => `
        <div class="timeline-item">
            <span class="timeline-date">${item.period[currentLang]}</span>
            <h3 class="timeline-role">${item.role[currentLang]}</h3>
            <h4 class="timeline-company">${item.company}</h4>
            <p class="timeline-desc">${item.description[currentLang]}</p>
            <div class="project-links">
                ${item.projects.map(proj => `
                    <a href="${proj.url}" target="_blank" class="project-tag">
                        <i class="fa-solid fa-link"></i> ${proj.name}
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-list');
    container.innerHTML = projectsData.map(item => `
        <div class="project-card">
            <div class="project-type">${item.type}</div>
            <h3 class="project-title">${item.title}</h3>
            <p class="project-desc">${item.description[currentLang]}</p>
            <div class="card-links">
                ${item.links.map(link => `
                    <a href="${link.url}" target="_blank" class="card-link">
                        ${link.text[currentLang]} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function switchTab(tabId) {
    // Update Nav
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
        if (li.dataset.tab === tabId) {
            li.classList.add('active');
        }
    });

    // Update Content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// Theme Handling
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');

    const icon = document.querySelector('.mobile-menu-btn i');
    if (sidebar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
        const icon = document.querySelector('.mobile-menu-btn i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('es'); // Default to Spanish

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Add click listeners to nav items
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.addEventListener('click', () => {
            switchTab(li.dataset.tab);
        });
    });
});
