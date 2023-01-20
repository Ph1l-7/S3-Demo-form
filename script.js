function valider(){
    let mdp1 = document.forms[0]["mdp1"].value;
    let mdp2 = document.forms[0]["mdp2"].value;
    
    if(mdp1 === mdp2){ //proceed
        //minimum 8 char
        if (mdp1.length < 8){
            alert("8 chars minimum!")
            return false;
        }
        //special char = WRONG!
        if (mdp1.includes("%",0)){
            alert("Wrong!")
            return false;
        }
        return true;
    }else{ //stops
        alert("Les MDP ne sont pas identiques")
        return false; //Empeche envoie du form
    }
    
    
}