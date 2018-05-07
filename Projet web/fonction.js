var largeur, hauteur, barre, connection;

function largeur_hauteur_page()
{
    largeur=window.innerWidth;
    hauteur=window.innerHeight;
}

function init()
{
    var i, text, taille;
    taille=""+(100/menu.type.length)-2+"%";
    connection=document.getElementById("conec");
    barre=document.getElementById("menu");
    barre.innerHTML="";
    for(i=0;i<menu.type.length;i++)
    {
        text="<div class='interieur' style='width:"+taille+";' id='"+menu.type[i].nom+"' >"+menu.type[i].nom+"</div>";
        console.log("Texte:", text);
        barre.innerHTML+=text;
    }
}

function fermeture()
{
    connection.style.display="none";
}

function ouverture()
{
    connection.style.display="";
}