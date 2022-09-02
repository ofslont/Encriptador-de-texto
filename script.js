const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const lista = document.querySelector(".lista")

function btEncriptar()
    {
        const textoEncriptado =encriptar(inputTexto.value)
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none"
        lista.style.visibility = "hidden"
        inputTexto.value=""

        
    }
function encriptar(stringEncriptado) 
    {
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringEncriptado = stringEncriptado.toLowerCase();
        for(let i = 0; i<matrizCodigo.length; i++)
        {
            if (stringEncriptado.includes(matrizCodigo[i][0]))
            {
                stringEncriptado =stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

            }

        }
        return stringEncriptado;
    }

function btDesencriptar()
    {
        const textoEncriptado =desencriptar(inputTexto.value)
        mensaje.value =textoEncriptado
        mensaje.style.backgroundImage = "none"
        lista.style.visibility = "hidden"
        inputTexto.value =""

    }

    function desencriptar(stringDesencriptado) 
    {
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringDesencriptado = stringDesencriptado.toLowerCase();
        for(let i = 0; i<matrizCodigo.length; i++)
        {
            if (stringDesencriptado.includes(matrizCodigo[i][1]))
            {
                stringDesencriptado =stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

            }

        }
        return stringDesencriptado;
    }

    function copiar()
    {
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value);
        mensaje.value="";
        alert("texto copiado");
              
        if(mensaje.value.length==0){
            
            lista.style.visibility = "visible"        
            mensaje.style ="visible"
                            
    }
        }
        
    

  
    