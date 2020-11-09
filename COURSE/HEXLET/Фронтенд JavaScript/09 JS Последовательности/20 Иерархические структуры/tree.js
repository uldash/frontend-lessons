import { head, tail, l, isList, isEmpty } from 'hexlet-pairs-data';

const tree = l(l(1, 2), l(3, l(4, 5)), 6);

const countElements = tree => {
    if (!isList(tree)) {
        return 1;
    }
    if (isEmpty(tree)) {
        return 0;
    }
    return countElements(head(tree)) + countElements(tail(tree));
}

console.log(countElements(tree));

// поиск нуля в листьях дерева

const hasZero = (list) => {
    if (isEmpty(list)) {
        return false;
    }

    const current = head(list);
    const rest = tail(list);
    if (!isList(current)) {
        if (current === 0) {
            return true;
        }
    } else if (hasZero(current)) {
        return true;
    }

    return hasZero(rest);
};

console.log(hasZero(l(1, 3, l(5, l(9), 3), 10)));
console.log(hasZero(l(1, l(l(5, 100), 0), 10)));

// сколько именно нулей содержит дерево
const searchZeros = (tree) => {
    const iter = (list, acc) => {
        if (isEmpty(list)) {
            return acc;
        }

        const current = head(list);
        const rest = tail(list);
        if (!isList(current)) {
            const newAcc = current === 0 ? acc + 1 : acc;
            return iter(rest, newAcc);
        } else {
            return iter(rest, iter(current, acc));
        }
    };

    return iter(tree, 0);
};

console.log(searchZeros(l(1, 3, l(5, l(9), 3), 10)));
console.log(searchZeros(l(0, l(l(0, 100), 0), 10)));