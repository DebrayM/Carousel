let temps;

window.onload = function() {

    document.getElementById("bt1").style.display = "block";
    document.getElementById("bt2").style.display = "none";
    document.getElementById("bt3").style.display = "none";
    document.getElementById("bt4").style.display = "none";
    document.getElementById("bt5").style.display = "none";

    let flechdroite = document.getElementById('droite');
    /** décalage à droite des images */
    //* flechdroite.addEventListener('click', moveright); */
    flechdroite.addEventListener('click', moveright);

    let flechgauche = document.getElementById('gauche');
    /** décalage à droite des images */
    flechgauche.addEventListener('click', moveleft);
    /** let imgMouse = document.querySelectorAll('image') */
    /** for (z=0; z<5; z++) { */
    /**     imgMouse[z].addEventListener('onmouseover',defParentImg) */
    /** } */
     
    let img01 = document.getElementById('carousel');
    img01.onmouseover = function() {
        /** on arrête le défilement */
        clearTimeout(temps);
    }
    img01.onmouseout = function() {
        /** on reprend le défilement */
        temps = setTimeout(moveright, 3000);
    }

    let dt1 = document.getElementById('dot1');
    dt1.addEventListener('click', modeDot);
    let dt2 = document.getElementById('dot2');
    dt2.addEventListener('click', modeDot);
    let dt3 = document.getElementById('dot3');
    dt3.addEventListener('click', modeDot);
    let dt4 = document.getElementById('dot4');
    dt4.addEventListener('click', modeDot);
    let dt5 = document.getElementById('dot5');
    dt5.addEventListener('click', modeDot);

    temps = setTimeout(moveright, 3000);
}

function modeDot() {
    /** quelle image est actuellement chargée */
    /** cI indice de l'image courante */
    /** btCache div à cacher */
    let cI = currentImg();
    let btCache = "bt" +cI
    document.getElementById(btCache).style.display = 'none';
    /** quel bouton à déclencher l'action */
    switch(this.id) {
        case "dot1":
            document.getElementById("bt1").style.display = 'block';
            break;
        case "dot2":
            document.getElementById("bt2").style.display = 'block';
            break;
        case "dot3":
            document.getElementById("bt3").style.display = 'block';
            break;
        case "dot4":
            document.getElementById("bt4").style.display = 'block';
            break;
        case "dot5":
            document.getElementById("bt5").style.display = 'block';
            break;
    }
}

function defParentImg () {
    /** récupère l'image affichée */
    let imageActuelle = currentImg ();
}

function currentImg () {
    /** recherche d'index de la boite affichant l'image en cours */
    let maboite = "";
    for (i=1; i<=5; i++) {
        maboite = "bt" + i;
        if (document.getElementById(maboite).style.display === 'block') {
            return (i);
        }
        maboite = "bt" + i;
    }
}

function moveright() {
    /**recherche l'image actuellement affichée */
    let maboite = currentImg();
    switch (maboite){
        case 1:
            document.getElementById("bt1").style.display = 'none';
            document.getElementById("bt2").style.display = 'block';
            break;
        case 2:
            document.getElementById("bt2").style.display = 'none';
            document.getElementById("bt3").style.display = 'block';
            break;
        case 3:
            document.getElementById("bt3").style.display = 'none';
            document.getElementById("bt4").style.display = 'block';
            break;
        case 4:
            document.getElementById("bt4").style.display = 'none';
            document.getElementById("bt5").style.display = 'block';
            break;
        case 5:
            document.getElementById("bt5").style.display = 'none';
            document.getElementById("bt1").style.display = 'block';
            break;
    }
}

function moveleft() {
    /**recherche l'image actuellement affichée */
    let maboite = currentImg();
    switch (maboite){
        case 1:
            document.getElementById("bt1").style.display = 'none';
            document.getElementById("bt5").style.display = 'block';
            break;
        case 2:
            document.getElementById("bt2").style.display = 'none';
            document.getElementById("bt1").style.display = 'block';
            break;
        case 3:
            document.getElementById("bt3").style.display = 'none';
            document.getElementById("bt2").style.display = 'block';
            break;
        case 4:
            document.getElementById("bt4").style.display = 'none';
            document.getElementById("bt3").style.display = 'block';
            break;
        case 5:
            document.getElementById("bt5").style.display = 'none';
            document.getElementById("bt4").style.display = 'block';
            break;
    }
}