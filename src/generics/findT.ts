type Predicate<T> = (item: T) => boolean;

function find<T>(arr: T[], predicate: Predicate<T>) {
    for (let item of arr) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}

console.log(find([1, 2, 3, 4, 5], n => n > 3));