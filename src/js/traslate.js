const translations = {
  es: {
    'github-btn':'Ver en GitHub',
    'cerrar-btn':'Cerrar',
    'developer-title': 'Back-end Developer',
    'developer-desc': 'Soy un desarrollador backend familiarizado con tecnologías como Spring y .NET Core. He desarrollado APIs utilizando JWT para la autenticación de las mismas, así como aplicaciones de escritorio con servicios de correo electrónico.',
    'download-cv': 'DESCARGAR CV',
    'experience': 'Experiencia',
    'view-more': 'Ver más...',
    'close': 'Cerrar',
    'view-github': 'Ver en GitHub',
    // Descripciones de proyectos
    'clinica-desc': 'Utilizando Spring Boot, desarrollé una API para gestionar médicos, pacientes y citas. Para el sistema de citas, creé una clase como servicio para aplicar las reglas de negocio al código. Implementé Flyway Migration para el control de migraciones en la base de datos (DB) y utilicé DTOs como estructura de datos. Para la seguridad, empleé JWT con Spring Security. La documentación fue realizada con OpenAPI utilizando Swagger.',
    'tiendona-desc': 'Fue desarrollado con el objetivo de gestionar un inventario para un minimercado, permitiendo que distintas personas lo monitoreen desde diferentes ubicaciones. Utilicé Java Swing para la interfaz gráfica (GUI). Cuenta con un sistema de inicio de sesión funcional y un sistema de correos para la recuperación de contraseñas mediante códigos. La implementación de las reglas de negocio se realizó utilizando DAOs.',
    'pollos-desc': 'Desarrollé una aplicación en Windows Forms utilizando C# con temática de "Pollos Hermanos", diseñada para empleados en caja en un restaurante de comida rápida. La aplicación permite gestionar ventas de alimentos y bebidas, y está conectada a una base de datos para administrar productos y la planilla del personal. Además, incluye un área administrativa accesible mediante un código secreto, donde los administradores pueden realizar configuraciones como modificar precios, ver planilla, menu disponible y gestion de inventarios.',
    'vet-desc': 'Desarrollé una aplicación web utilizando Spring MVC. Usé Thymeleaf para conectar el backend con el frontend. La aplicación incluye un sistema de inicio de sesión con JWT para la autenticación de usuarios y utiliza Spring Email para la recuperación de contraseñas. Además, cuenta con un sistema de registro para diferentes mascotas y tipos de animales. El sistema de citas permite al usuario seleccionar la especialidad del veterinario y, en caso de no hacerlo, el sistema lo asigna automáticamente.'
  },
  en: {
    'github-btn':'Go to GitHub',
    'cerrar-btn':'Close',
    'developer-title': 'Back-end Developer',
    'developer-desc': 'I am a backend developer familiar with technologies like Spring and .NET Core. I have developed APIs using JWT for authentication, as well as desktop applications with email services.',
    'download-cv': 'DOWNLOAD CV',
    'experience': 'Experience',
    'view-more': 'View More...',
    'close': 'Close',
    'view-github': 'View on GitHub',
    // Project descriptions
    'clinica-desc': 'Using Spring Boot, I developed an API to manage doctors, patients, and appointments. For the appointment system, I created a service class to apply business rules to the code. I implemented Flyway Migration for database migration control and used DTOs as data structure. For security, I used JWT with Spring Security. Documentation was done with OpenAPI using Swagger.',
    'tiendona-desc': 'It was developed with the goal of managing inventory for a mini-market, allowing different people to monitor it from different locations. I used Java Swing for the graphical interface (GUI). It has a functional login system and an email system for password recovery using codes. Business rules implementation was done using DAOs.',
    'pollos-desc': 'I developed a Windows Forms application using C# with a "Pollos Hermanos" theme, designed for cashier employees in a fast-food restaurant. The application allows managing food and beverage sales, and is connected to a database to manage products and staff payroll. Additionally, it includes an administrative area accessible through a secret code, where administrators can make configurations such as modifying prices, viewing payroll, available menu, and inventory management.',
    'vet-desc': 'I developed a web application using Spring MVC. I used Thymeleaf to connect the backend with the frontend. The application includes a login system with JWT for user authentication and uses Spring Email for password recovery. Additionally, it has a registration system for different pets and animal types. The appointment system allows users to select the veterinarian specialty and, if not selected, the system assigns it automatically.'
  }
};
function translatePage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    localStorage.setItem('preferred-language', language);
}

function initTranslation() {
    const button = document.querySelector('#TraslateButton');
    if (!button) {
        console.error('Botón no encontrado');
        return;
    }

    const savedLanguage = localStorage.getItem('preferred-language') || 'en';
    translatePage(savedLanguage);

    function updateButtonText(language) {
        const buttonElement = document.querySelector('#language-button');


        if (buttonElement) {
            buttonElement.childNodes[4].textContent = language === 'es' ? 'English' : 'Español';
        }
    }

    updateButtonText(savedLanguage);

    button.addEventListener('click', () => {
       
        const currentLanguage = localStorage.getItem('preferred-language') || 'es';
        const newLanguage = currentLanguage === 'es' ? 'en' : 'es';

        translatePage(newLanguage);
        updateButtonText(newLanguage);
    });
}

document.addEventListener('DOMContentLoaded', initTranslation);
