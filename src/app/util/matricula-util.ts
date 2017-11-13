export class MatriculaUtil {
    public static ToArray<T>(dictionary: any,
        mapper: (item: any) =>
            T = (item) => item): T[] {
        const array: T[] = [];
        for (const key in dictionary) {
            if (!dictionary.hasOwnProperty(key)) {
                continue;
            }
            array.push(mapper(dictionary[key]));
        }
        return array;
    }
}
