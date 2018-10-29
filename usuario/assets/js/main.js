function agregarFamiliar()
{
    var familiar = prompt("Ingresa el nombre de tu familiar:");
    if (familiar == null || familiar == "") 
    {
        alert("Cancelado")
    } else 
    {
        var parentesco=agregar_parentesco(familiar);
        if(parentesco != null && parentesco != "")
        {
            document.getElementById("familiares").innerHTML +=", mi "+parentesco+" "+familiar;
        }        
    }        
}

function agregar_parentesco(nombre)
{
    var txt="";
    var parentesco=prompt("Ingresa tu parentesco con "+nombre);
    if(parentesco==null || parentesco == "")
    {
        txt="Sin parentesco";
    }
    else
    {
        if (confirm(nombre+" es tu "+parentesco+"?")) 
        {
            txt = parentesco;
        } else 
        {
            txt="";
            alert("Ingresa el parentesco correcto");
        }
    }
    return txt;
}

function agregarHobbie()
{
    var hobbies=document.getElementById("hobbies");
    var hobbiesTxt=hobbies.innerHTML;
    var nuevoHobbie=prompt("Ingresa  el nuevo hobbie");
    if(nuevoHobbie != "" || nuevoHobbie != null)
    {
        if(hobbiesTxt.includes(nuevoHobbie))
        {
            if(confirm("Agregar "+nuevoHobbie+" de nuevo a tu lista de hobbies?"))
            {
                hobbies.style.color = "red";
                hobbies.innerHTML +=", "+nuevoHobbie;                
            }
            else
            {
                hobbies.innerHTML +=", "+nuevoHobbie;
            }
        }
    }    
}
