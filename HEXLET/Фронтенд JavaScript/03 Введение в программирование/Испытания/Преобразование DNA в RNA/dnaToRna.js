/*
ДНК и РНК это последовательности нуклеотидов.
Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

G -> C
C -> G
T -> A
A -> U

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и
возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка),
то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится
"незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
*/

function dnaToRna(input) {
    let dnk = 'GCTA';
    let rnk = 'CGAU';

    function dnkIndex(item) {
        for (let i = 0; i < dnk.length; i++) {
            if (item === dnk[i]) {
                return i;
            }
        }
        return null;
    }

    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += rnk[dnkIndex(input[i])];
    }
    return result.includes('undefined') ? null : result;
}

//export default dnaToRna

/*
export default (n) => {
  let rna = '';
  for (let i = 0; i < n.length; i += 1) {
    switch (n[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        return null;
    }
  }

  return rna;
};
*/

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null