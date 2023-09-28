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
  
    activateCursor(); // Activa el cursor al cargar la página
  
    // Opcional: Desactiva el cursor después de cierto tiempo (en milisegundos)
    // setTimeout(deactivateCursor, 3000); // Desactivar después de 3 segundos (ajusta según tus preferencias)
  });
  