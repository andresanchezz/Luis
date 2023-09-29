import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

let loadingEnabled = true; // Bandera para habilitar o deshabilitar la pantalla de carga

// Función para mostrar la pantalla de carga
export function showLoadingScreen() {
  if (loadingEnabled) {
    Swal.fire({
      title: 'Cargando',
      text: 'Un momento...',
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
      onOpen: () => {
        Swal.showLoading();
      },
    });
  }
}

// Función para ocultar la pantalla de carga
export function hideLoadingScreen() {
  Swal.close();
}

// Agregar un interceptor de solicitud
axios.interceptors.request.use((config) => {
  if (config.method !== 'get' && loadingEnabled) {
    // Mostrar SweetAlert para todas las solicitudes excepto GET
    showLoadingScreen();
  }
  return config;
}, (error) => {
  hideLoadingScreen();
  return Promise.reject(error);
});

// Agregar un interceptor de respuesta
axios.interceptors.response.use(
  (response) => {
    if (response.config.method !== 'get' && loadingEnabled) {
      // Ocultar SweetAlert para todas las respuestas excepto GET
      hideLoadingScreen();
    }
    return response;
  },
  (error) => {
    if (error.config.method !== 'get' && loadingEnabled) {
      // Ocultar SweetAlert en caso de error para todas las respuestas excepto GET
      hideLoadingScreen();
    }
    return Promise.reject(error);
  }
);

