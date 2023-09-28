document.addEventListener("DOMContentLoaded", function() {
    const cursorAnimation = document.querySelector(".cursor");
    const cursors = document.querySelectorAll(".cursor");
  
    function handleMouseClick(e) {
      let x = e.clientX;
      let y = e.clientY;
  
      cursorAnimation.style.top = y + "px";
      cursorAnimation.style.left = x + "px";
  
      cursors.forEach((cursor) => {
        cursor.classList.add("active");
  
        function removeCursorActive() {
          cursor.classList.remove("active");
        }
  
        setTimeout(removeCursorActive, 1000);
      });
  
      let cursorClone = cursorAnimation.cloneNode(true);
      document.body.appendChild(cursorClone);
  
      setTimeout(() => {
        cursorClone.remove();
      }, 1000);
    }
  
    document.addEventListener("click", handleMouseClick);
  });
  