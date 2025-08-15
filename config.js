// Configuración del Portafolio CV
// Modifica estos valores para personalizar tu portafolio

const PORTFOLIO_CONFIG = {
    // Información Personal
    personal: {
        name: "Laddy Guevara",
        title: "QA Automation Specialist | Mobile Testing Expert",
        description: "Profesional apasionada por la calidad del software con más de 3 años de experiencia en automatización de pruebas móviles y web. Especialista en Appium, Selenium, TestLink y metodologías ágiles como Scrum. He trabajado en proyectos importantes como la automatización de la App Mi Claro de Claro Colombia, implementando patrones de diseño avanzados como Screenplay y Serenity BDD. Mi experiencia incluye pruebas funcionales, de regresión, UAT, smoke e integración, con herramientas como Maven, Gradle, Eclipse e IntelliJ IDEA. Mi enfoque se centra en garantizar la excelencia en el desarrollo de software a través de frameworks de automatización robustos y eficientes.",
        email: "laddy.sofi@hotmail.com",
        phone: "+57 301 613 6072",
        location: "Santa Marta, Magdalena, Colombia",
        cvFile: "assets/Hoja de Vida Laddy Guevara (2).pdf"
    },

    // Redes Sociales
    social: {
        linkedin: "https://www.linkedin.com/in/laddy-guevara/",
        github: "https://github.com/laddyguevara",
        twitter: "#",
        instagram: "#"
    },

    // Estadísticas
    stats: {
        experience: "3+",
        projects: "5+",
        certifications: "8+",
        satisfaction: "100%"
    },

    // Experiencia Laboral
    experience: [
        {
            title: "Automatizadora - Analista QA",
            company: "Global Hitss",
            period: "Agosto 2022 - Presente",
            achievements: [
                "Automatización de casos de pruebas a partir de los requerimientos del usuario en la App Mi Claro",
                "Desarrollo, ejecución y mantenimiento de scripts utilizando IntelliJ IDEA y Eclipse",
                "Implementación de patrones de diseño Screenplay y Serenity BDD",
                "Trabajo en entornos móviles para los segmentos prepago y postpago",
                "Metodología ágil Scrum"
            ]
        },
        {
            title: "Automatizadora - Analista QA",
            company: "Novatec",
            period: "Marzo 2022 - Agosto 2022",
            achievements: [
                "Realizar proceso de automatización de los casos de prueba",
                "Partiendo de los requerimientos del usuario en la App Mi Claro",
                "Crear, ejecutar y corregir el proyecto utilizando los IDE Eclipse e Intellij",
                "Mediante las herramientas de Appium, Maven, Gradle",
                "Con los patrones de diseño POM y Screenplay"
            ]
        },
        {
            title: "Automatizadora Digitex",
            company: "Proyecto ETB",
            period: "Abril 2021 - Diciembre 2021",
            achievements: [
                "Diseñar casos de pruebas partiendo de los requerimientos del usuario",
                "Ejecución de pruebas funcionales en ambiente de pruebas para su ejecución en producción",
                "Presentar informes de acuerdos con la gestión que se lleva a cabo",
                "Manejo de las herramientas TestLink, Mantis, automatización en aplicativos webs",
                "Mediante las herramientas Selenium, Maven, IDE Eclipse y patrón de diseño POM"
            ]
        },
        {
            title: "Analista de Pruebas Funcionales",
            company: "Atento Colombia",
            period: "Julio 2020 - Abril 2021",
            achievements: [
                "Realizar y ejecutar los casos de pruebas funcionales en los diferentes ambientes",
                "Partiendo de los requerimientos del usuario",
                "Presentar informes de acuerdos con la gestión que se lleva a cabo",
                "Manejo de la herramienta TestLink y Mantis",
                "Servicio al cliente, atención de PQRS"
            ]
        }
    ],

    // Educación
    education: [
        {
            title: "Ingeniería de Sistemas",
            institution: "Fundación de Educación Superior San José",
            period: "2023 - En curso",
            description: "Formación en desarrollo de software, arquitectura de sistemas y tecnologías emergentes."
        },
        {
            title: "Tecnólogo en Gestión de Redes de Datos",
            institution: "SENA",
            period: "2021 - 2023",
            description: "Especialización en redes de computadores, seguridad informática y administración de sistemas."
        },
        {
            title: "Técnico en Operaciones Comerciales",
            institution: "Instituto La Sabana",
            period: "2000 - 2005",
            description: "Formación en administración empresarial y operaciones comerciales."
        }
    ],

    // Certificaciones
    certifications: [
        {
            name: "Scrum Fundamentals Certified",
            institution: "SCRUMstudy Targeting Success",
            date: "2023",
            icon: "fas fa-certificate",
            id: "ID: 892290"
        },
        {
            name: "Diplomado en Fundamentos de Programación con Python",
            institution: "Universidad Sergio Arboleda",
            date: "2023",
            icon: "fab fa-python"
        },
        {
            name: "Diplomado en Programación Básica en Java",
            institution: "Universidad Sergio Arboleda",
            date: "2023",
            icon: "fab fa-java"
        },
        {
            name: "Técnico en Operaciones Comerciales",
            institution: "SENA",
            date: "2008 - 2009",
            icon: "fas fa-graduation-cap"
        }
    ],

    // Cursos de IA
    aiCourses: [
        {
            name: "Machine Learning Fundamentals",
            institution: "Coursera - Stanford University",
            status: "En progreso",
            progress: 75
        },
        {
            name: "Prompt Engineering",
            institution: "OpenAI",
            status: "Completado",
            progress: 100
        },
        {
            name: "Deep Learning Specialization",
            institution: "Coursera - DeepLearning.AI",
            status: "Planificado",
            progress: 0
        }
    ],

    // Habilidades Técnicas
    skills: {
        testing: [
            { name: "Appium", level: 90 },
            { name: "Selenium", level: 85 },
            { name: "TestLink", level: 90 },
            { name: "Mantis", level: 85 },
            { name: "Screenplay", level: 80 },
            { name: "Serenity BDD", level: 75 }
        ],
        automation: [
            { name: "Java", level: 85 },
            { name: "Maven", level: 80 },
            { name: "Gradle", level: 75 },
            { name: "Eclipse", level: 90 },
            { name: "IntelliJ IDEA", level: 85 }
        ],
        testing_types: [
            { name: "Pruebas Funcionales", level: 95 },
            { name: "Pruebas de Regresión", level: 90 },
            { name: "Pruebas de Aceptación (UAT)", level: 85 },
            { name: "Pruebas Smoke", level: 90 },
            { name: "Pruebas de Integración", level: 80 }
        ],
        methodologies: [
            { name: "Scrum", level: 90 },
            { name: "Ágil", level: 85 },
            { name: "BDD", level: 80 },
            { name: "TDD", level: 75 }
        ]
    },

    // Proyectos
    projects: [
        {
            title: "Automatización App Mi Claro",
            description: "Proyecto de automatización de pruebas para la aplicación móvil Mi Claro, implementando patrones de diseño Screenplay y Serenity BDD para entornos prepago y postpago.",
            image: "assets/project1.jpg",
            technologies: ["Appium", "Java", "Maven", "Screenplay", "Serenity BDD"],
            github: "#",
            demo: "#"
        },
        {
            title: "Sistema de Pruebas ETB",
            description: "Plataforma de automatización de pruebas para aplicaciones web de ETB, utilizando Selenium y Maven con patrón de diseño POM para casos de prueba funcionales.",
            image: "assets/project2.jpg",
            technologies: ["Selenium", "Java", "Maven", "Eclipse", "POM"],
            github: "#",
            demo: "#"
        },
        {
            title: "Dashboard de Gestión de Pruebas",
            description: "Sistema integrado para gestión de casos de prueba, reportes de ejecución y seguimiento de métricas de calidad utilizando TestLink y Mantis.",
            image: "assets/project3.jpg",
            technologies: ["TestLink", "Mantis", "Java", "MySQL", "JSP"],
            github: "#",
            demo: "#"
        }
    ],

    // Badges
    badges: [
        {
            title: "QA Automation Expert",
            description: "Especialista en automatización de pruebas con Appium y Selenium",
            date: "2023",
            icon: "fas fa-robot"
        },
        {
            title: "Scrum Master",
            description: "Certificación en metodologías ágiles y Scrum",
            date: "2023",
            icon: "fas fa-scrum"
        },
        {
            title: "Mobile Testing Specialist",
            description: "Experta en pruebas de aplicaciones móviles",
            date: "2022",
            icon: "fas fa-mobile-alt"
        },
        {
            title: "Quality Champion",
            description: "Líder en implementación de mejores prácticas de QA",
            date: "2022",
            icon: "fas fa-award"
        }
    ],

    // Configuración de Animaciones
    animations: {
        aosDuration: 800,
        aosEasing: 'ease-in-out',
        aosOnce: true,
        aosOffset: 100
    },

    // Configuración de Colores
    colors: {
        primary: "#2563eb",
        primaryDark: "#1d4ed8",
        secondary: "#06b6d4",
        accent: "#10b981",
        textPrimary: "#1f2937",
        textSecondary: "#6b7280",
        textLight: "#9ca3af",
        bgPrimary: "#ffffff",
        bgSecondary: "#f8fafc",
        bgDark: "#1f2937",
        borderColor: "#e5e7eb"
    }
};

// Función para aplicar la configuración
function applyConfig() {
    // Aplicar información personal
    document.querySelector('.hero-title').textContent = PORTFOLIO_CONFIG.personal.name;
    document.querySelector('.hero-subtitle').textContent = PORTFOLIO_CONFIG.personal.title;
    document.querySelector('.hero-description').textContent = PORTFOLIO_CONFIG.personal.description;
    
    // Aplicar estadísticas
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length >= 4) {
        stats[0].textContent = PORTFOLIO_CONFIG.stats.experience;
        stats[1].textContent = PORTFOLIO_CONFIG.stats.projects;
        stats[2].textContent = PORTFOLIO_CONFIG.stats.certifications;
        stats[3].textContent = PORTFOLIO_CONFIG.stats.satisfaction;
    }
    
    // Aplicar información de contacto
    const contactItems = document.querySelectorAll('.contact-details p');
    if (contactItems.length >= 3) {
        contactItems[0].textContent = PORTFOLIO_CONFIG.personal.email;
        contactItems[1].textContent = PORTFOLIO_CONFIG.personal.phone;
        contactItems[2].textContent = PORTFOLIO_CONFIG.personal.location;
    }
    
    // Aplicar enlaces sociales
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length >= 4) {
        socialLinks[0].href = PORTFOLIO_CONFIG.social.linkedin;
        socialLinks[1].href = PORTFOLIO_CONFIG.social.github;
        socialLinks[2].href = PORTFOLIO_CONFIG.social.twitter;
        socialLinks[3].href = PORTFOLIO_CONFIG.social.instagram;
    }
    
    // Aplicar configuración de AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: PORTFOLIO_CONFIG.animations.aosDuration,
            easing: PORTFOLIO_CONFIG.animations.aosEasing,
            once: PORTFOLIO_CONFIG.animations.aosOnce,
            offset: PORTFOLIO_CONFIG.animations.aosOffset
        });
    }
}

// Exportar configuración para uso global
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;

// Aplicar configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', applyConfig); 