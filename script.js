const translations = {
    es: {
        greeting: "Hola, soy",
        role: "Desarrollador Web &",
        subrole: "Especialista WordPress",
        bio: "Transformo ideas en experiencias digitales modernas y funcionales. Especializado en crear sitios web de alto rendimiento con enfoque en diseño, SEO y experiencia de usuario.",
        viewProjects: "Ver Proyectos",
        viewExperience: "Mi Experiencia",
        experienceTitle: "Experiencia",
        projectsTitle: "Proyectos",
        contactTitle: "Contáctame",
        contactText: "¿Tienes un proyecto en mente? ¡Hablemos!",
        navHome: "Inicio",
        navExperience: "Experiencia",
        navWebs: "Webs",
        navProjects: "Proyectos",
        navContact: "Contacto",
        websTitle: "Webs",
        viewSite: { es: "Ver sitio", en: "View site" },
        viewProject: { es: "Ver proyecto", en: "View project" },
        webCategories: {
            "Diseño de Interiores": { es: "Diseño de Interiores", en: "Interior Design" },
            "Seguridad": { es: "Seguridad", en: "Security" },
            "Soldaduras": { es: "Soldaduras", en: "Welding" },
            "Turismo": { es: "Turismo", en: "Tourism" },
            "Energía": { es: "Energía", en: "Energy" },
            "Fumigación": { es: "Fumigación", en: "Fumigation" },
            "Arreglos": { es: "Arreglos", en: "Arrangements" },
            "Bienes Raíces": { es: "Bienes Raíces", en: "Real Estate" },
            "Equipo de Gimnasio": { es: "Equipo de Gimnasio", en: "Gym Equipment" },
            "All": { es: "Todas", en: "All" }
        }
    },
    en: {
        greeting: "Hi, I'm",
        role: "Web Developer &",
        subrole: "WordPress Specialist",
        bio: "I transform ideas into modern and functional digital experiences. Specialized in creating high-performance websites with a focus on design, SEO, and user experience.",
        viewProjects: "View Projects",
        viewExperience: "My Experience",
        experienceTitle: "Work Experience",
        projectsTitle: "Projects",
        contactTitle: "Contact Me",
        contactText: "Have a project in mind? Let's talk!",
        navHome: "Home",
        navExperience: "Experience",
        navWebs: "Webs",
        navProjects: "Projects",
        navContact: "Contact",
        websTitle: "Websites",
        viewSite: { es: "Ver sitio", en: "View site" },
        viewProject: { es: "Ver proyecto", en: "View project" },
        webCategories: {
            "Diseño de Interiores": { es: "Diseño de Interiores", en: "Interior Design" },
            "Seguridad": { es: "Seguridad", en: "Security" },
            "Soldaduras": { es: "Soldaduras", en: "Welding" },
            "Turismo": { es: "Turismo", en: "Tourism" },
            "Energía": { es: "Energía", en: "Energy" },
            "Fumigación": { es: "Fumigación", en: "Fumigation" },
            "Arreglos": { es: "Arreglos", en: "Arrangements" },
            "Bienes Raíces": { es: "Bienes Raíces", en: "Real Estate" },
            "Equipo de Gimnasio": { es: "Equipo de Gimnasio", en: "Gym Equipment" },
            "All": { es: "Todas", en: "All" }
        }
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
        }
    },
    {
        company: "Magnova Agency",
        role: { es: "Frontend & Desarrollador Web", en: "Frontend & Web Developer" },
        period: { es: "Enero 2025 - Agosto 2025", en: "January 2025 - August 2025" },
        description: {
            es: "Desarrollo de sitios web en WordPress y optimización SEO. Colaboración directa con clientes para definir requerimientos y entregar soluciones a medida.",
            en: "WordPress website development and SEO optimization. Direct collaboration with clients to define requirements and deliver custom solutions."
        }
    },
    {
        company: "Lotería De Hoy",
        role: { es: "Diseñador y Maquetador de Email Marketing", en: "Email Marketing Designer & Developer" },
        period: { es: "Enero 2024 - Marzo 2024", en: "January 2024 - March 2024" },
        description: {
            es: "Diseño visual en Figma y maquetación HTML de plantillas de email marketing responsive.",
            en: "Visual design in Figma and HTML coding of responsive email marketing templates."
        }
    }
];

const websData = [
    {
        title: "ArpiDeco",
        image: "Webs/ArpiDeco.png",
        category: "Diseño de Interiores",
        url: "https://arpideco.cl/"
    },
    {
        title: "CercoVivo",
        image: "Webs/CercoVivo.png",
        category: "Seguridad",
        url: "https://cercovivo.cl/"
    },
    {
        title: "CortinasTJ",
        image: "Webs/CortinasTJ.png",
        category: "Soldaduras",
        url: "https://cortinastj.cl/"
    },
    {
        title: "FK Morales Tours",
        image: "Webs/FK Morales Tours.png",
        category: "Turismo",
        url: "https://fkmoralestours.com/"
    },
    {
        title: "GreenElectric",
        image: "Webs/GreenElectric.png",
        category: "Energía",
        url: "https://greenelectricchile.cl/"
    },
    {
        title: "KillerMax",
        image: "Webs/KillerMax.png",
        category: "Fumigación",
        url: "https://killermax.cl/"
    },
    {
        title: "La Media Caja",
        image: "Webs/La Media Caja.png",
        category: "Arreglos",
        url: "https://lamediacaja.cl/"
    },
    {
        title: "My Home Punta Cana",
        image: "Webs/My Home Punta Cana.png",
        category: "Bienes Raíces",
        url: "https://myhomepuntacana.com/"
    },
    {
        title: "Punta Cana Consulting Group",
        image: "Webs/Punta Cana Consulting Group.png",
        category: "Bienes Raíces",
        url: "https://puntacanaconsultinggroup.com/"
    },
    {
        title: "Quebrada Lodge",
        image: "Webs/Quebrada Lodge.png",
        category: "Turismo",
        url: "https://quebradalodgepapudo.cl/"
    },
    {
        title: "Ruta Épica",
        image: "Webs/Ruta Épica.png",
        category: "Turismo",
        url: "https://rutaepica.cl/test/"
    },
    {
        title: "WowMultibarras",
        image: "Webs/Wow Multibarras.png",
        category: "Equipo de Gimnasio",
        url: "https://wowmultibarras.com/"
    }
];

const projectsData = {
    "web-apps": [
        {
            title: "ATS Optimizer",
            image: "Proyectos/Web Apps/ATS Optimizer.png",
            description: {
                es: "**Optimizador de CV para sistemas ATS** que procesa la información 100% en el lado del cliente garantizando privacidad total.\n\n**Características principales:**\n• Extracción de texto desde PDF y OCR de vacantes con IA\n• Optimización de experiencia laboral usando metodología STAR\n• Generación de PDF minimalista de una sola columna optimizado para parsers\n\n**Tecnologías utilizadas:** React, Gemini 3 Flash, Tailwind CSS v4, Framer Motion",
                en: "**ATS CV Optimizer** tool that processes information 100% client-side, ensuring total privacy.\n\n**Key features:**\n• PDF text extraction and job vacancy OCR with AI\n• Work experience optimization using the STAR methodology\n• Generation of minimalist single-column PDF optimized for ATS parsers\n\n**Technologies used:** React, Gemini 3 Flash, Tailwind CSS v4, Framer Motion"
            },
            url: "https://github.com/Willians45/ats-optimizer"
        },
        {
            title: "Monitor Dólar",
            image: "Proyectos/Web Apps/Monitor Dólar.png",
            description: {
                es: "**Aplicación web de monitorización financiera** en tiempo real del tipo de cambio dólar/bolívar venezolano.\n\n**Características principales:**\n• Actualización automática cada 30 segundos\n• Gráficos interactivos con historial de precios\n• Notificaciones personalizables para umbrales de cambio\n\n**Tecnologías utilizadas:** React.js, Chart.js, API REST, PWA",
                en: "**Real-time financial monitoring web application** for USD/Venezuelan bolívar exchange rate.\n\n**Key features:**\n• Auto-refresh every 30 seconds\n• Interactive charts with price history\n• Customizable notifications for change thresholds\n\n**Technologies used:** React.js, Chart.js, REST API, PWA"
            },
            url: "https://monitor-dolar-venezuela.vercel.app/"
        },
        {
            title: "Tu Mobiliaria",
            image: "Proyectos/Web Apps/TuMobiliaria.png",
            description: {
                es: "**Plataforma inmobiliaria completa** para gestión de propiedades y clientes.\n\n**Características principales:**\n• Catálogo de propiedades con filtros avanzados\n• Sistema de citas y visitas virtuales\n• Panel de administración intuitivo\n\n**Tecnologías utilizadas:** Vue.js, Node.js, MongoDB, Google Maps API",
                en: "**Complete real estate platform** for property and client management.\n\n**Key features:**\n• Property catalog with advanced filters\n• Appointment and virtual tour system\n• Intuitive admin dashboard\n\n**Technologies used:** Vue.js, Node.js, MongoDB, Google Maps API"
            },
            url: "https://tumobiliaria.vercel.app/"
        },
        {
            title: "Luxury Motors",
            image: "Proyectos/Web Apps/Luxury Motors.png",
            description: {
                es: "**Showroom digital de vehículos de lujo** con experiencia de compra premium.\n\n**Características principales:**\n• Galería de imágenes 360° de vehículos\n• Configurador de autos personalizado\n• Sistema de financiamiento integrado\n\n**Tecnologías utilizadas:** Next.js, Three.js, Stripe API, PostgreSQL",
                en: "**Digital luxury vehicle showroom** with premium buying experience.\n\n**Key features:**\n• 360° vehicle image gallery\n• Custom car configurator\n• Integrated financing system\n\n**Technologies used:** Next.js, Three.js, Stripe API, PostgreSQL"
            },
            url: "https://luxury-motors-portfolio.vercel.app/"
        }
    ],
    "plugins": [
        {
            title: "Simple Project Accordeon",
            description: {
                es: "**Plugin WordPress para gestión de proyectos** con diseño acordeón interactivo.\n\n**Características principales:**\n• Creación ilimitada de proyectos\n• Diseño acordeón animado y responsive\n• Personalización de colores y estilos\n\n**Tecnologías:** PHP, WordPress API, jQuery, CSS3",
                en: "**WordPress plugin for project management** with interactive accordion design.\n\n**Key features:**\n• Unlimited project creation\n• Animated responsive accordion design\n• Color and style customization\n\n**Technologies:** PHP, WordPress API, jQuery, CSS3"
            },
            url: "https://github.com/Willians45/simple-project-accordeon"
        },
        {
            title: "Portfolio Styled",
            description: {
                es: "**Plugin WordPress para portafolios profesionales** con múltiples layouts.\n\n**Características principales:**\n• 4 diseños de portafolio diferentes\n• Sistema de filtrado por categorías\n• Modal lightbox para proyectos\n\n**Tecnologías:** PHP, WordPress Customizer, AJAX, Lightbox2",
                en: "**WordPress plugin for professional portfolios** with multiple layouts.\n\n**Key features:**\n• 4 different portfolio designs\n• Category-based filtering system\n• Project modal lightbox\n\n**Technologies:** PHP, WordPress Customizer, AJAX, Lightbox2"
            },
            url: "https://github.com/Willians45/Portfolio-styled"
        }
    ]
};

let currentLang = 'es';
let currentProjectCategory = 'web-apps';
let currentWebCategory = 'All';

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
    navItems[2].textContent = translations[lang].navWebs;
    navItems[3].textContent = translations[lang].navProjects;
    navItems[4].textContent = translations[lang].navContact;

    // Re-render dynamic content
    renderExperience();
    renderWebFilters();
    renderWebs();
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
        </div>
    `).join('');
}

function renderWebFilters() {
    const container = document.getElementById('web-category-filters');
    if (!container) return;

    // Get unique categories from websData
    const categories = ['All', ...new Set(websData.map(item => item.category))];

    container.innerHTML = categories.map(cat => `
        <button class="filter-btn ${currentWebCategory === cat ? 'active' : ''}" 
                onclick="filterWebs('${cat}')">
            ${translations[currentLang].webCategories[cat][currentLang]}
        </button>
    `).join('');
}

function filterWebs(category) {
    currentWebCategory = category;
    renderWebFilters();
    renderWebs();
}

function renderWebs() {
    const container = document.getElementById('webs-list');
    const filteredWebs = currentWebCategory === 'All'
        ? websData
        : websData.filter(item => item.category === currentWebCategory);

    container.innerHTML = filteredWebs.map(item => `
        <div class="web-card">
            <div class="web-card-image-container">
                <img src="${item.image}" alt="${item.title}" class="web-card-image">
            </div>
            <div class="web-card-content">
                <h3 class="web-card-title">${item.title}</h3>
                <span class="web-card-category">${translations[currentLang].webCategories[item.category][currentLang]}</span>
                <a href="${item.url}" target="_blank" class="web-card-link">
                    ${translations[currentLang].viewSite[currentLang]} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-list');
    const currentProjects = projectsData[currentProjectCategory] || [];

    container.innerHTML = currentProjects.map(item => `
        <div class="project-card">
            ${item.image ? `<img src="${item.image}" alt="${item.title}" class="project-card-image ${item.title === 'Luxury Motors' ? 'large-mockup' : ''}">` : ''}
            <h3 class="project-title">${item.title}</h3>
            <div class="project-desc">${formatDescription(item.description[currentLang])}</div>
            <div class="card-links">
                <a href="${item.url}" target="_blank" class="card-link">
                    ${translations[currentLang].viewProject[currentLang]} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function formatDescription(description) {
    // Convert markdown-like formatting to HTML
    let formatted = description
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>');

    // Handle bullet points
    const lines = formatted.split('\n');
    let result = '';
    let inList = false;

    lines.forEach(line => {
        if (line.trim().startsWith('• ')) {
            if (!inList) {
                result += '<ul>';
                inList = true;
            }
            result += '<li>' + line.trim().substring(2) + '</li>';
        } else {
            if (inList) {
                result += '</ul>';
                inList = false;
            }
            result += line;
        }
    });

    if (inList) {
        result += '</ul>';
    }

    return '<p>' + result + '</p>';
}

function switchProjectCategory(category) {
    currentProjectCategory = category;

    // Update tab buttons
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        }
    });

    // Re-render projects
    renderProjects();
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
