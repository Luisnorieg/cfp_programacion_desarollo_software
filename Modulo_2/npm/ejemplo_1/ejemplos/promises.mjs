import promises from 'node:fs/promises'
import {readFile} from 'node:fs/promises'

promises.readFile('text.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    }) .catch((err) => {
        console.error('Error reading file: $(err)');
    });
// -------------------------------------------------------------
Promise.all([
    promises.readFile('text.txt', 'utf-8'),
    promises.readFile('texto.txt', 'utf-8'),
    promises.readFile('mucho_texto.txt', 'utf-8')
    ]).then((
        [file1, file2, file3]
    ) => {  
        console.log(file1);
        console.log(file2);
        console.log(file3);
    }).catch((err) => {
        console.log('Error reading files: ${err}');
    });
// ------------------------------------------------------------
async function promises1() {
    try {
        let data3 = await readFile('mucho_texto.txt', 'utf-8');
        console.log(data3);
    } catch (err){
        console.error('Error ${err]');
    }

    console.log('---------');
    let data2 = await readFile('text.txt', 'utf-8');
    console.log(data2);
    console.log('------9090');
    let data = await readFile('texto.txt', 'utf-8');
    console.log(data);
    console.log('-----1010');
}

promises1();