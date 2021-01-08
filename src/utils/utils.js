export const removeUntagged = arr => {
    return arr.filter(elem => elem !== null && elem.length !== 0);
};

export const createTags = tasks => {
    return removeUntagged(Array.from(new Set(tasks.map((task) => task.tag))));
}
