/*Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of,
 forEach qui effectueront le même traitement. 
 Ce traitement consistera à afficher tous les éléments
  d'un tableau de string suivis de leur taille. 
  Par exemple pour le tableau suivant const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'] 
  nous obtiendrons l'affichage suivant 3 fois (1 fois par loop):

Alice, length: 5
Bob, length: 3
Charlie, length: 7
Dan, length: 3
Eve, length: 3*/

/*const tab = ['Alice', 'Bob', 'Craig', 'Dan', 'Eve'] ;
//const str = "";
for (let i = 0; i < tab.length; i++) {
  console.log(`${i}, length: ${i.length}`);
}

for ( const elem of  tab) {
console.log(`${elem }`);
  
}*/


const tab = ['Alice', 'Bob', 'Craig', 'Dan', 'Eve']
let i = 0
// Loop classique avec une boucle for
for (let i = 0; i < tab.length; ++i) {
  console.log(`${tab[i]}, length: ${tab[i].length}`);
}

// for...of
for (let elem of tab) {
  console.log(elem)
}

// forEach
tab.forEach((elem) => {
  console.log(elem)
})

