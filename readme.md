<div align="center">
  <table style="width:100%; border:none; background-color:transparent;">
    <tr>
      <td style="width:20%; text-align:left; border:none;">
        <img src="img/iz.png" alt="Logo SEP/TecNM" width="120">
      </td>
      <td style="width:60%; text-align:center; border:none;">
        <h2>TECNOLÓGICO NACIONAL DE MÉXICO</h2>
        <h3>INSTITUTO TECNOLÓGICO DE OAXACA</h3>
      </td>
      <td style="width:20%; text-align:right; border:none;">
        <img src="img/de.png" alt="Logo ITO" width="100">
      </td>
    </tr>
  </table>
<br>
<p><b>CARRERA:</b></p>
  <p>INGENIERÍA EN SISTEMAS COMPUTACIONALES</p>
<br>
<p><b>MATERIA:</b> PROGRAMACIÓN WEB</p>
<br>
<p><b>PRESENTA:</b></p>
  <p><b>MEIXUEIRO CRUZ ARTURO DANIEL</b></p>
  <p><b>MACUIXTLE GAYTAN MIGUEL ANGEL</b></p>
<br>
<p><b>NOMBRE DEL CATEDRÁTICO:</b> MARTINEZ NIETO ADELINA</p>
<br>
<p><b>ACTIVIDAD:</b> Sistema de Login y Dashboard con Validaciones</p>
<br><br>
</div>
<div align="right">
  <p>07 DE JULIO DEL 2026</p>
</div>

# Sistema de Login y Captura de Alumnos

Este proyecto consiste en un sistema web con login, registro y un dashboard para la captura de información de alumnos, incluyendo validaciones en frontend.

## Explicación y Documentación

El proyecto utiliza CSS vanilla con variables de diseño inspiradas en YouTube (dark theme). No se emplea ningún framework CSS externo como Bootstrap.

**Flujo del sistema:**
- El usuario accede a `login.html` o `registro.html`.
- Tras autenticación exitosa (validaciones de correo y contraseña), se guarda el email en `sessionStorage` y redirige a `index.html`.
- En `index.html`, se recupera el usuario de sessionStorage y se muestra en el navbar.
- El sidebar permite navegar a la sección de Captura de Alumnos.
- El formulario de captura incluye validaciones para nombre, correo, contraseña, número de control (6 dígitos) y fecha de nacimiento.
- Al enviar, se calcula la edad y se muestra un modal indicando si el alumno es mayor o menor de edad.

**Métodos principales en `login.js`:**
- `validarCorreo()`, `validarPassword()`, `alfanumerico()`, `validarLongitud()`, `calcularEdad()`, `esMayorDeEdad()`, `validarFechaLogica()`, `capitalizarNombres()`.
- Manejo de eventos para formularios, blur validations y submit.
- Gestión de sesión con sessionStorage.

## Proceso de Creación

### 1. LOGIN
 
Codigo del login simple aun no funciona por que los js no han sido creados pero los referenciamos para ahorrar tiempo, lo mismo con los estilos

![LOGIN](img/1CODELOGIN.png)

Pantalla del login funcionando en el navegador

![LOGINf](img/1LOGIN.png)

Login sin nada 

### 2. CODE CSS LOGIN

Unicamente los inicios del css para el estilo del login para los colores y tipo de letra que usara

![CODE LOGIN](img/2CODEDELCSSPARAELLOGIN.png)


### 3. PANTALLA CON LOS LABELS

Codigo para los labels para poder poner las contraseñas y correo, aun sin funcion debido a que el js no esta hecho, todo esto pertenece a la fase de diseño

![PANTALLA CON LOS LABELS](img/3codeconloslabel.png)

 
Labels en accion

![PANTALLA CON LOS LABELS l](img/3pantallaconloslabels.png)


### 4. ESTILOS PARA EL CSS

CSS básico.  

![ESTILOS PARA EL CSS](img/4estilosparaelcss.png)


### 5. ESTILOS PARA LOS BOTONES Y LABELS
**Antes:**  
Botones sin estilo.  

![ESTILOS PARA LOS BOTONES Y LABELS](img/5.png)

**Después:**  
Botones accent color.

**Modificaciones:** Clases .btn-submit y estilos focus.

### 6. CREACION DEL JS PARA EL ACCESO
**Antes:**  
Sin JS funcional.  

![CREACION DEL JS PARA EL ACCESO](img/6.png)

**Después:**  
Lógica completa de login/registro.

**Modificaciones:** Validaciones avanzadas.

### 7. CREACION DE BOTON PARA CREAR CUENTA
**Antes:**  
Sin enlace a registro.  

![CREACION DE BOTON PARA CREAR CUENTA](img/7.png)

**Después:**  
Link a registro.html.

**Modificaciones:** Página de registro integrada.

### 8. CREACION DE LOS ESTILOS PARA EL CSS
**Antes:**  
Estilos incompletos.  

![CREACION DE LOS ESTILOS PARA EL CSS](img/8.png)

**Después:**  
CSS para navbar, sidebar y modal.

**Modificaciones:** Layout completo del dashboard.

### 9. CREACION DE REGISTRO HTML
**Antes:**  
Sin página de registro.  

![CREACION DE REGISTRO HTML](img/9.png)

**Después:**  
Formulario de registro funcional.

**Modificaciones:** Validaciones similares al login.

### 10. CREACION DE LA METODOLOGIA EN EL JS
**Antes:**  
Validaciones simples.  

![CREACION DE LA METODOLOGIA EN EL JS](img/10.png)

**Después:**  
Funciones completas para edad, control, etc.

**Modificaciones:** Lógica del modal y cálculos.