TABLEAU
Array = ["45", "55", "64", "76", "98", "12", "30", "51", "5", "86"]
    (10)['45', '55', '64', '76', '98', '12', '30', '51', '5', '86'] 
TRIAGE PAR ORDRE CROISSANT
Array.sort()
    (10)['12', '30', '45', '5', '51', '55', '64', '76', '86', '98']
 LE MAX ET LE MIN
const min = Array => Array.reduce((x, y) => Math.min(x, y));
undefined
const max = Array => Array.reduce((x, y) => Math.max(x, y));
undefined
console.log("Min:", min(Array))
VM4053: 1 Min: 5
undefined
console.log("Max:", max(Array))
VM4236: 1 Max: 98
AUTRE METHODE
Array.pop()
'86'
NOMRES PAIRS ET IMPAIRS

for (let Array = 46; Array < 99; Array += 2) {
    console.log("pair names=" + Array);
}
VM6292: 2 pair names = 46
VM6292: 2 pair names = 48
VM6292: 2 pair names = 50
VM6292: 2 pair names = 52
VM6292: 2 pair names = 54
VM6292: 2 pair names = 56
VM6292: 2 pair names = 58
VM6292: 2 pair names = 60
VM6292: 2 pair names = 62
VM6292: 2 pair names = 64
VM6292: 2 pair names = 66
VM6292: 2 pair names = 68
VM6292: 2 pair names = 70
VM6292: 2 pair names = 72
VM6292: 2 pair names = 74
VM6292: 2 pair names = 76
VM6292: 2 pair names = 78
VM6292: 2 pair names = 80
VM6292: 2 pair names = 82
VM6292: 2 pair names = 84
VM6292: 2 pair names = 86
VM6292: 2 pair names = 88
VM6292: 2 pair names = 90
VM6292: 2 pair names = 92
VM6292: 2 pair names = 94
VM6292: 2 pair names = 96
VM6292: 2 pair names = 98
undefined
for (let Array = 45; Array < 99; Array += 2) {
    console.log("odd names=" + Array);
}
VM6317: 2 odd names = 45
VM6317: 2 odd names = 47
VM6317: 2 odd names = 49
VM6317: 2 odd names = 51
VM6317: 2 odd names = 53
VM6317: 2 odd names = 55
VM6317: 2 odd names = 57
VM6317: 2 odd names = 59
VM6317: 2 odd names = 61
VM6317: 2 odd names = 63
VM6317: 2 odd names = 65
VM6317: 2 odd names = 67
VM6317: 2 odd names = 69
VM6317: 2 odd names = 71
VM6317: 2 odd names = 73
VM6317: 2 odd names = 75
VM6317: 2 odd names = 77
VM6317: 2 odd names = 79
VM6317: 2 odd names = 81
VM6317: 2 odd names = 83
VM6317: 2 odd names = 85
VM6317: 2 odd names = 87
VM6317: 2 odd names = 89
VM6317: 2 odd names = 91
VM6317: 2 odd names = 93
VM6317: 2 odd names = 95
VM6317: 2 odd names = 97
CARTE CNI
let cni = { Nom: "KEZIMANA", Prenoms: "Ketty Kevine", age: "19", Npere: "NZEYIMANA JOSEPH", Nmere: "NDIKUMANA MARIE LOUISE", Province: "BUJUMBURA", Commune: "NTAHANWA", Quartier: "KIGOBE", Date: "28/01/2004", Etatcivil: "Celibataire", Profession: "Etudiante" };
undefined
FOR OF ET FOR IN
    - FOR OF
for of permet de créer une boucle Array qui parcourt un objet itérable(ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
for of est une instruction de flux de contrôle utilisée pour itérer sur une séquence de valeurs.Il est utilisé pour parcourir les éléments d'un tableau, d'un objet ou d'une chaîne. C'est la structure de boucle la plus couramment utilisée en JavaScript et elle est utilisée pour exécuter un bloc de code plusieurs fois jusqu'à ce qu'une certaine condition soit remplie.

- Il est facile à utiliser et à comprendre.
- Il est plus rapide que les autres structures en boucle.
- Il peut être utilisé pour parcourir à la fois des objets et des tableaux.
- FOR IN
for in permet d'itérer sur les propriétés énumérables d'un objet qui ne sont pas des symboles.Pour chaque propriété obtenue, on exécute une instruction(ou plusieurs grâce à un bloc d'instructions).
for in sur les propriétés énumérables qui sont indexées par les chaînes d'un objet. Notez qu'une propriété peut être identifiée par une chaîne ou un symbole.
Une propriété est énumérable lorsque son indicateur interne énumérable est défini sur true.