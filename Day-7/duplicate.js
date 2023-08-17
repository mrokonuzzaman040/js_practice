const names = ['babul', 'karim', 'abul', 'dadul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul']

function removeDuplicate(names) {
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element)
    }

    const unique = [];
    for (const element of names) {
        console.log(element)
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames)
