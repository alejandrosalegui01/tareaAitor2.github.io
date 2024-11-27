function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
      if (username == "eu") {
        // Redirige a la segunda página
        window.location.href = "index.eu.html";
    }
    if (username == "es") {
      // Redirige a la segunda página
   window.location.href = "index.es.html"; 
} 

 
      
    } else {
      username = prompt("Please choose your language: es, eu, en", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
        checkCookie();


        /*setCookie(idioma,"Ingles",6);
        let obtener_cookie = getCookie(idioma);
        
        document.addEventListener("DOMContentLoaded", function () {
            
        
        
          if (obtener_cookie == "Ingles" || obtener_cookie == "") {
              window.location.href = "index.html";
              
              document.getElementById("resultado").innerText == obtener_cookie; 
          }
          if(obtener_cookie == "Euskera"){
              window.location.href = "index-eu.html";
        
              document.getElementById("resultado").innerText == obtener_cookie; 
          }
          if(obtener_cookie == "Castellano"){
              window.location.href = "index-es.html";
        
              document.getElementById("resultado").innerText == obtener_cookie; 
          }
        });*/