# WinSlim 10 By Christianlg97 Changelog:


# [Update: **WinSlim 10 Build 7.1 ** | 22-12-2024]

- **Mejora**: Se deshabilitaron algunos servicios en segundo plano innecesarios, minimizando el consumo de recursos en segundo plano y el rendimiento general del sistema.

- **Utilidad Nueva**: Se sustituye el instalador de paquetes RuckZuck por Npack (Mejor rendimiento y variedad en aplicaciones disponibles).

- **Mejora**: Se añaden mejoras y optimizaciones en la gestión y velocidad de la red.

- **Mejora**: Habilitación de atributos avanzados para CPUs de múltiples núcleos en configuraciones de alto rendimiento, se ha habilitado la opción para ajustar el desempaquetado de núcleos directamente desde el perfil de energía, 			      aumentando el rendimiento en juegos exigentes.

- **Mejora**: Desactivación de GameDVR: Elimina grabaciones automáticas en segundo plano para juegos, liberando recursos para mejorar la tasa de FPS.

- **Mejora**: Windows Defender: Desactivación de funciones innecesarias como monitoreo de comportamiento, protección en la nube y análisis en tiempo real deshabilitados para liberar recursos.

- **Corrección**: Se corrige la posición y resolución del wallpaper por defecto del sistema.

- **Corrección**: Ajustes en el archivo de paginación para evitar problemas de rendimiento en sistemas con baja RAM.

- **Correción**: Recuperación de GPU: Ajuste del controlador (TdrLevel) para garantizar la estabilidad en caso de fallos gráficos.

_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

# [Update: **WinSlim 10 Build 7** | 26-11-2024]

- **Corrección**: Se resolvió un error que causaba interrupciones en las conexiones de red al usar VPNs específicas.

- **Corrección**: Ajustes en el *scheduler* del sistema para mejorar el rendimiento en juegos con CPUs de múltiples núcleos.

- **Cambio**: Se mejoró la gestión del espacio en disco mediante ajustes en el servicio "WinSxS", reduciendo el tamaño de la carpeta sin afectar a la estabilidad.

- **Cambio**: Se incluye un nuevo tema principal del sistema (WinSlim Silver).

- **Mejora**: Se implementaron optimizaciones adicionales en el registro para acelerar el acceso a las unidades SSD.

- **Mejora**: Se limita el consumo de CPU de Windows Defender al 5% permitiendo un consumo mas eficiente de recursos y menor impacto en el sistema durante su uso y actividad en segundo plano.

- **Mejora**: La configuración predeterminada de *swapfile* se ajustó para reducir el impacto en el rendimiento de sistemas con baja RAM.

- **Mejora**: Aceleración del apagado del sistema deshabilitando servicios innecesarios en ese momento.

- **Privacidad**: Nuevas configuraciones predefinidas para evitar el rastreo de actividad a nivel de sistema.

- **Utilidad nueva**: Se añadió un script automatizado para desactivar la recolección de datos de diagnóstico después de futuras actualizaciones.

- **Utilidad nueva**: Herramienta preconfigurada para ajustar latencia de red según el uso (Gaming/Streaming/Trabajo).

- **Utilidad nueva**: Atajos personalizados añadidos en el menú de inicio para herramientas clave de optimización y diagnóstico.

_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


# [Update: **WinSlim 10 Build 6** | 21-11-2024]

- **Corrección**: Se corrigió un problema que impedía la ejecución adecuada de varios servicios en segundo plano.

- **Corrección**: Ajustes en el manejo de transparencia predeterminada para resolver problemas de rendimiento.

- **Cambio**: La programación de GPU acelerada por hardware (HAGS) se desactiva por defecto, mejorando el rendimiento y la estabilidad en hardware antiguo y de gama baja.

- **Corrección**: Se deshabilitó la optimización de pantalla completa (GameDVRBehaviour) para evitar *stuttering* e inestabilidad en ciertos juegos.

- **Novedad**: Ahora las herramientas y scripts incluidos tienen íconos temáticos, como el desinstalador profundo y el instalador de la Microsoft Store.

- **Mejora**: Optimización drástica del tiempo de arranque y reinicio del sistema, haciéndolos aún más rápidos.

- **Mejora**: Ajustes adicionales en el registro y el código para mejorar la optimización general del sistema.

- **Mejora**: Reducción significativa en el consumo de recursos en segundo plano.

- **Mejora**: Se deshabilitó el algoritmo de Nagle en el gestor de red, mejorando el *ping* y eliminando el *stuttering* en juegos en línea.

- **Privacidad**: Refuerzo de las configuraciones de privacidad a nivel de registro y código del sistema.

- **Utilidad nueva**: Se añadió un acceso directo para reiniciar directamente a la BIOS.

- **Utilidad nueva**: Se incluyó una herramienta de reparación y diagnóstico en script para verificar la integridad del sistema y la imagen de arranque.

- **Utilidad nueva**: Se añade acceso directo para la descarga de la utilidad "LossLess Scaling" para DLSS, AMD FSR y Frame Gen Universalmente (Herramienta que permite el uso de reescalado y generacion de Frames por IA de manera universal en juegos).

_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

# [Update: **WinSlim 10 Build 5** | 17-11-2024]

- **Corrección**: Resuelto un problema en el servicio de "Optimización de entrega", que impedía la descarga de contenido en Xbox y Microsoft Store (mejora de compatibilidad con la app Xbox y GamePass).
- **Mejora**: Servicios de Bluetooth reactivados, mejorando la estabilidad de dispositivos conectados.

_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


# [WinSlim 10 Build 4 | 14-11-2024]

### *Primera Build Estable*

1. **Usuario predeterminado**:
   - El usuario "Administrador" configurado como predeterminado.
   - SmartScreen deshabilitado por defecto.

2. **Explorador de archivos**:
   - Deshabilitados accesos rápidos y de red en el panel lateral.
   - **Novedad**: Se añadieron accesos directos a **Descargas** y **Explorador de archivos** en el menú de inicio para facilitar la navegación.

3. **Interfaz y diseño**:
   - Transparencia deshabilitada para un mejor rendimiento.
   - Uso de íconos en lugar de miniaturas, eliminando la caché de estas (mayor rapidez y menor consumo).

4. **Rendimiento y recursos**:
   - Hibernación e inicio rápido deshabilitados, aumentando la estabilidad en hardware diverso.
   - Windows Update configurado en modo manual para limitar las actualizaciones a esenciales y de seguridad.
   - Barra de tareas en tamaño pequeño y sin notificaciones, mejorando la limpieza visual.
   - Servicios en segundo plano optimizados para reducir consumo de CPU y RAM.

5. **Privacidad y seguridad**:
   - Eliminación completa de telemetría y recopilación de datos por parte de Microsoft.
   - Características administrativas orientadas a empresas eliminadas para mayor seguridad.

6. **Software y bloatware**:
   - Eliminados programas no esenciales como Teams, OneDrive y Escritorio remoto.
   - Repositorio alternativo incluido para instalar/actualizar aplicaciones comunes.

7. **Herramientas incluidas**:
   - Script de activación por licencia digital (HWID) para Windows y Office.
   - Script para instalar la Microsoft Store.
   - "Geek Uninstaller" preinstalado para desinstalación profunda.

8. **Optimización adicional**:
   - Aislamiento del núcleo de Windows Defender deshabilitado por defecto (reconfigurable).
   - Perfil de energía "Máximo rendimiento" incluido para gaming.
   - Eliminados accesos innecesarios como "Buscar" y "Vista de tareas" en la barra de tareas.
   - Mejoras de latencia en menús e interfaz del sistema.

9. **Extras**:
   - Otras optimizaciones generales de rendimiento y estabilidad.

_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

