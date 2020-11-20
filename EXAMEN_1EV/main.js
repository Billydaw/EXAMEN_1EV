let letra = document.getElementById("input-container");
let texto = document.getElementById("text-container");
            letra.addEventListener("keydown", function(event) {
              if(event) {
                var n = texto.filter(letra);
            }
            })