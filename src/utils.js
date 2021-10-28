const flowers = ["Snapdragon","Lily", "Hound's berry", "Rum cherry","Crocus","Marjoram","Tulsi","Light Rain Snow","daffodil"]

export function randomJson(depth, childCol, num = 0) {
    let list = [];

    if (num < depth) {
        for (let i = 0; i < childCol; i++) {
            list.push({
                name: flowers[Math.floor(Math.random() * flowers.length)],
                id: `${Math.floor(Math.random() * 10000000)}`,
                items: randomJson(depth, childCol, num+1),
            });
        }
    }

    return list;
}



