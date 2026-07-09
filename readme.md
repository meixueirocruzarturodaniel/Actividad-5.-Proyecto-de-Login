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

El proyecto utiliza CSS con variables de diseño inspiradas en YouTube en la versión oscura.

**Flujo del sistema:**

- El usuario accede a `login.html` o `registro.html`.
- Tras autenticación exitosa (validaciones de correo y contraseña), se guarda el email en `sessionStorage` y redirige a `index.html`.
- En `index.html`, se recupera el usuario de `sessionStorage` y se muestra en el navbar.
- El sidebar permite navegar a la sección de Captura de Alumnos.
- El formulario de captura incluye validaciones para nombre, correo, contraseña, número de control (6 dígitos) y fecha de nacimiento.
- Al enviar, se calcula la edad y se muestra un modal indicando si el alumno es mayor o menor de edad.

**Métodos principales en `login.js`:**

- `validarCorreo()`, `validarPassword()`, `alfanumerico()`, `validarLongitud()`, `calcularEdad()`, `esMayorDeEdad()`, `validarFechaLogica()`, `capitalizarNombres()`.
- Manejo de eventos para formularios, blur validations y submit.
- Gestión de sesión con `sessionStorage`.

## Proceso de Creación

### 1. LOGIN

Código del login simple (aún no funciona porque los JS no han sido creados, pero los referenciamos para ahorrar tiempo, lo mismo con los estilos).

![LOGIN](img/1CODELOGIN.png)

Pantalla del login funcionando en el navegador:

![LOGINf](img/1LOGIN.png)

---

### 2. CODE CSS LOGIN

Únicamente los inicios del CSS para el estilo del login (colores y tipo de letra).

![CODE LOGIN](img/2CODEDELCSSPARAELLOGIN.png)

### 3. PANTALLA CON LOS LABELS

Código para los labels (correo y contraseña), aún sin funcionalidad.

![PANTALLA CON LOS LABELS](img/3codeconloslabel.png)

Labels en acción:

![PANTALLA CON LOS LABELS](img/3pantallaconloslabels.png)

### 4. ESTILOS PARA EL CSS

![ESTILOS PARA EL CSS](img/4estilosparaelcss.png)

### 5. ESTILOS PARA LOS BOTONES Y LABELS

![ESTILOS PARA LOS BOTONES Y LABELS](img/5estilosparalosbotonesylabbels.png)

### 6. CREACIÓN DEL JS PARA EL ACCESO

![CREACION DEL JS PARA EL ACCESO](img/6creaciondeljsparaelacceso.png)

### 7. CREACIÓN DE BOTÓN PARA CREAR CUENTA

![CREACION DE BOTON CREAR CUENTA](img/7creaciondebotonparacrearcuenta.png)

### 8. CREACIÓN DE LOS ESTILOS PARA EL CSS

![CREACION DE LOS ESTILOS PARA EL CSS](img/8creaciondelosestilosparaelcss.png)

### 9. CREACIÓN DE REGISTRO HTML

![CREACION DE REGISTRO HTML](img/9creacionderegirstorhtml.png)

### 10. CREACIÓN DE LA METODOLOGÍA EN EL JS

![CREACION DE LA METODOLOGIA EN EL JS](img/10creaciondelaeodoligaeneljs.png)

### 11. OBTENCIÓN DE LAS FUNCIONES DE VALIDACIÓN

![FUNCIONES DE LA LIBRERIA](img/11funcionesvalidaciones.png)

**Modificaciones:** Obtención de las funciones de validación de la librería creada en la actividad 2.

### 12. CREACIÓN DE LAS SECCIONES EN EL SIDEBAR

![CREACION DEL SIDEBAR](img/12sidebariniciousuarios.png)

**Modificaciones:** Creamos la lógica para navegar en las secciones de inicio y la sección Usuarios, habilitamos el botón de salir.

### 13. CREACIÓN DE LA SUBSECCIÓN DE CAPTURA

![SUBSECCION CAPPTURA](img/13subseccionacciones.png)

**Modificaciones:** Se construyó un submenú con formulario y mensajes de validación con `<span>`.

### 14. CREACIÓN DEL ESTILO PARA EL INDEX

![CSS PARA SIDEBAR](img/14estiloparaelindex.png)
![CSS PARA SIDEBAR](img/15estiloparaelindex.png)
![CSS PARA SIDEBAR](img/16estiloparaelindex.png)

**Modificaciones:** Estilos para sidebar y secciones.

### 15. CREACIÓN DEL ESTILO PARA EL SUBMENÚ

![CREACION DEL ESTILO PARA EL SUBMENU](img/17estiloparasubmenu.png)

### 16. CREACIÓN DEL ESTILO PARA EL FORMULARIO

![CREACION DEL CSS PARA EL FORM](img/18estiloformulario.png)

### 17. CREACIÓN DEL ESTILO PARA EL MODAL

![CREACION DEL ESTILO PARA MODAL](img/19estiloventanamodal.png)

### 18. CREACIÓN DE LOS BOTONES DE LAS SECCIONES

![CREACION DE BOTONES EN SECCIONES](img/20pantallaindex.png)

**Modificaciones:** Eventos para botones Salir, Inicio, Usuario, Captura.

### 19. CREACIÓN DE LAS CONSTANTES PARA LAS VALIDACIONES

![CREACION DE CONSTANTES](img/22constantes.png)

### 20. CREACIÓN DE LA LÓGICA PARA LAS ALERTAS DE SPAN

![CREACION DE ALERTAS SPAN](img/23funcionesspan.png)

### 21. CREACIÓN DE LA FUNCIÓN PARA VALIDAR LOS DATOS

![CONDICIONALES](img/24llamarfuncionesvalidar.png)

### 22. CREACIÓN DE LA METODOLOGÍA DEL MODAL

![CONDICIONAL MODAL](img/25modaljs.png)

## FLUJO COMPLETO DEL PROGRAMA

**VENTANA FINAL DE LOGIN**  
![loginf](img/1loginf.png)

**VENTANA FINAL DEL INDEX**  
![INDEXf](img/2inicioindex.png)

**MENSAJE DE ERROR EN FORMATO**  
![ERRORf](img/3mensajespan.png)

**FORMULARIO COMPLETAMENTE RELLENO**  
![fORMULARIOLLENO](img/4camposrellenados.png)

**MODAL EN ACCIÓN**  
![MODf](img/5modal.png)

**OPCIÓN PARA SALIR DEL FORMULARIO**  
![SALIRf](img/6botonsalir.png)

**VENTANA PARA REGISTRAR USUARIOS**  
![INDEXf](img/7registrar.png)

**REGLA PARA LA CONTRASEÑA**  
![INDEXf](img/8validacionregistrar.png)