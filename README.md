# ABM de Vehículos Aéreos y Terrestres  

## Descripción  
Este proyecto es una aplicación desarrollada en **JavaScript**, utilizando **HTML y CSS** para la interfaz de usuario. Su objetivo es gestionar un listado de vehículos aéreos y terrestres mediante operaciones de **Alta, Baja y Modificación (ABM)**, aplicando filtros, cálculos y ordenamientos dinámicos. Los datos se manejan en memoria a partir de una cadena JSON inicial.  

## Funcionalidades  

- **Gestión de Vehículos:**  
  - Listado de vehículos con información detallada obtenida desde un JSON local.  
  - Filtro por tipo: "Todos", "Terrestre", "Aéreo".  
  - Cálculo de velocidad máxima promedio de los elementos filtrados.  
  - Ordenamiento dinámico de la tabla según columna seleccionada.  
  - Mostrar/ocultar columnas según preferencia del usuario.  

- **Alta, Baja y Modificación de Vehículos:**  
  - Formulario dinámico con validaciones según tipo de vehículo.  
  - Generación de un ID único para cada nuevo registro.  
  - Edición y eliminación de registros con actualización inmediata en la tabla.  

- **Interfaz Dinámica:**  
  - Doble clic en una fila o botón "Agregar" para abrir el formulario ABM.  
  - Ocultamiento y visualización de formularios según la acción realizada.  

- **Manejo de Datos en Memoria:**  
  - Transformación de una cadena JSON en un array de objetos. 
