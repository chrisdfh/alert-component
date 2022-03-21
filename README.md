# Alert Component

Componente alternativo al alert de JavaScript.

## Instalación

### 1 Descargar

Clonar el proyecto en la carpeta de trabajo.

```bash
git clone https://github.com/chrisdfh/alert-component.git
```

### 2 Agregar los archivos `alert.js` y `alert.css` a la cabecera del archivo donde se usará

Entre el `<head>` y el `</head>` del archivo, colocar las siguientes líneas:

```html
<link rel="stylesheet" href="alert.css" />
<script src="alert.js" defer></script>
```

## Uso

Para usar el componente, debe ser llamado mediante la función `showAlert()` el cual recibe 3 parámetros:

```js
showAlert(msg, duración, bloqueo)

msg: String         Mensaje a mostrar
duración: Number    Tiempo en milisegundos
bloqueo: Boolean    Bloquea pantalla mientras se muestra el mensaje
```

## Ejemplos

Muestra un mensaje por el tiempo predeterminado sin bloquar la pantalla

```js
showAlert("Mensaje");
```

Muestra un mensaje por 5 segundos sin bloquear la pantalla

```js
showAlert("Mensaje", 5000);
```

Muentra un mensaje por 2 segundos mientras se bloquea la pantalla

```js
showAlert("Mensaje", 2000, true);
```

Muestra un mensaje permanente

```js
showAlert("Mensaje permanente", null);
```

Muestra un mensaje permanente y permanece la pantalla bloqueada

```js
showAlert("Mensaje permanente", null, true);
```
