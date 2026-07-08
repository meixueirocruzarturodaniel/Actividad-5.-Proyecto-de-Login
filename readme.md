### <div align="center">

### &#x20; <table style="width:100%; border:none; background-color:transparent;">

### &#x20;   <tr>

### &#x20;     <td style="width:20%; text-align:left; border:none;">

### &#x20;       <img src="img/iz.png" alt="Logo SEP/TecNM" width="120">

### &#x20;     </td>

### &#x20;     <td style="width:60%; text-align:center; border:none;">

### &#x20;       <h2>TECNOLÓGICO NACIONAL DE MÉXICO</h2>

### &#x20;       <h3>INSTITUTO TECNOLÓGICO DE OAXACA</h3>

### &#x20;     </td>

### &#x20;     <td style="width:20%; text-align:right; border:none;">

### &#x20;       <img src="img/de.png" alt="Logo ITO" width="100">

### &#x20;     </td>

### &#x20;   </tr>

### &#x20; </table>

### <br>

### <p><b>CARRERA:</b></p>

### &#x20; <p>INGENIERÍA EN SISTEMAS COMPUTACIONALES</p>

### <br>

### <p><b>MATERIA:</b> PROGRAMACIÓN WEB</p>

### <br>

### <p><b>PRESENTA:</b></p>

### &#x20; <p><b>MEIXUEIRO CRUZ ARTURO DANIEL</b></p>

### &#x20; <p><b>MACUIXTLE GAYTAN MIGUEL ANGEL</b></p>

### <br>

### <p><b>NOMBRE DEL CATEDRÁTICO:</b> MARTINEZ NIETO ADELINA</p>

### <br>

### <p><b>ACTIVIDAD:</b> Sistema de Login y Dashboard con Validaciones</p>

### <br><br>

### </div>

### <div align="right">

### &#x20; <p>07 DE JULIO DEL 2026</p>

### </div>

### 

### \# Sistema de Login y Captura de Alumnos

### 

### Este proyecto consiste en un sistema web con login, registro y un dashboard para la captura de información de alumnos, incluyendo validaciones en frontend.

### 

### \## Explicación y Documentación

### 

### El proyecto utiliza CSS con variables de diseño inspiradas en YouTube en la version obscura. 

### 

### \*\*Flujo del sistema:\*\*

### \- El usuario accede a `login.html` o `registro.html`.

### \- Tras autenticación exitosa (validaciones de correo y contraseña), se guarda el email en `sessionStorage` y redirige a `index.html`.

### \- En `index.html`, se recupera el usuario de sessionStorage y se muestra en el navbar.

### \- El sidebar permite navegar a la sección de Captura de Alumnos.

### \- El formulario de captura incluye validaciones para nombre, correo, contraseña, número de control (6 dígitos) y fecha de nacimiento.

### \- Al enviar, se calcula la edad y se muestra un modal indicando si el alumno es mayor o menor de edad.

### 

### \*\*Métodos principales en `login.js`:\*\*

### \- `validarCorreo()`, `validarPassword()`, `alfanumerico()`, `validarLongitud()`, `calcularEdad()`, `esMayorDeEdad()`, `validarFechaLogica()`, `capitalizarNombres()`.

### \- Manejo de eventos para formularios, blur validations y submit.

### \- Gestión de sesión con sessionStorage.

### 

### \## Proceso de Creación

### 

### \### 1. LOGIN

### &#x20;

### Codigo del login simple aun no funciona por que los js no han sido creados pero los referenciamos para ahorrar tiempo, lo mismo con los estilos

### 

### !\[LOGIN](img/1CODELOGIN.png)

### 

### Pantalla del login funcionando en el navegador

### 

### !\[LOGINf](img/1LOGIN.png)

### 

### Login sin nada 

### 

### \### 2. CODE CSS LOGIN

### 

### Unicamente los inicios del css para el estilo del login para los colores y tipo de letra que usara

### 

### !\[CODE LOGIN](img/2CODEDELCSSPARAELLOGIN.png)

### 

### 

### \### 3. PANTALLA CON LOS LABELS

### 

### Codigo para los labels para poder poner las contraseñas y correo, aun sin funcion debido a que el js no esta hecho, todo esto pertenece a la fase de diseño

### 

### !\[PANTALLA CON LOS LABELS](img/3codeconloslabel.png)

### 

### &#x20;

### Labels en accion

### 

### !\[PANTALLA CON LOS LABELS l](img/3pantallaconloslabels.png)

### 

### 

### \### 4. ESTILOS PARA EL CSS

### 

### CSS básico.  

### 

### !\[ESTILOS PARA EL CSS](img/4estilosparaelcss.png)

### \### 5. ESTILOS PARA LOS BOTONES Y LABELS

### 

### Codigo para los botones y labels para que tengan mas formato  

### 
