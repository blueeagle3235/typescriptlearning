// the book: https://www.gutenberg.org/ebooks/2701
// the link to the txt file: https://www.gutenberg.org/files/2701/2701-0.txt
// https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string
// https://stackoverflow.com/questions/7635952/javascript-how-to-remove-all-extra-spacing-between-words
// https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript
import axios, { AxiosResponse } from "axios";

let url = "https://www.gutenberg.org/files/2701/2701-0.txt";
axios(url)
    .then((response: AxiosResponse) => {
        return response.data;
    })
    .then((text: string) => {
        let words: string[] = text
            .replace(/(\r\n|\n|\r)/gm, " ")
            .replace(/[-—]/g, " ")
            .replace(/\s+/g, " ")
            .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~’“”]/g, "")
            .split(" ");
        let dict = new Map<string, number>();

        words.forEach(word => {
            let key = word.toLowerCase();
            if (dict.has(key)) { dict.set(key, (dict.get(key) || 0) + 1); }
            else { dict.set(key, 1); }
        });
        const sortedDict = new Map([...dict.entries()].sort((a, b) => b[1] - a[1]));
        console.log(sortedDict);
    });
