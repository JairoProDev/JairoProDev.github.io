document.addEventListener("DOMContentLoaded", function() {
    const cursorAnimation = document.querySelector(".cursor");
    const cursors = document.querySelectorAll(".cursor");
  
    function activateCursor() {
      cursors.forEach((cursor) => {
        cursor.classList.add("active");
      });
    }
  
    function deactivateCursor() {
      cursors.forEach((cursor) => {
        cursor.classList.remove("active");
      });
    }
  
    function animateCursor() {
      cursors.forEach((cursor) => {
        cursor.classList.add("active");
      });
  
      setTimeout(function() {
        cursors.forEach((cursor) => {
          cursor.classList.remove("active");
        });
        animateCursor(); // Llama a la función de nuevo para una animación continua
      }, 1000); // La animación se repite cada 1 segundo
    }
  
    document.addEventListener("mousemove", function(e) {
      let x = e.clientX;
      let y = e.clientY;
  
      cursorAnimation.style.top = y + "px";
      cursorAnimation.style.left = x + "px";
    });
  
    document.addEventListener("click", function(e) {
      let x = e.clientX;
      let y = e.clientY;
  
      cursorAnimation.style.top = y + "px";
      cursorAnimation.style.left = x + "px";
  
      cursors.forEach((cursor) => {
        cursor.classList.add("active");
  
        function removeCursorActive(){
          cursor.classList.remove("active");
        }
  
        setTimeout(removeCursorActive, 1000);
      });
  
      let cursorClone = cursorAnimation.cloneNode(true);
      document.querySelector("body").appendChild(cursorClone);
  
      setTimeout(() => {
        cursorClone.remove();
      }, 1000);
    });
  
    animateCursor(); // Inicia la animación continua
  
    // Opcional: Desactiva el cursor después de cierto tiempo (en milisegundos)
    // setTimeout(deactivateCursor, 3000); // Desactivar después de 3 segundos (ajusta según tus preferencias)
  });
  