const generateStory = (name, place, creature, object) => {
    return `${name} traveled to the mysterious land of ${place} and encountered a wild ${creature}Armed only with a magical ${object} `
};

const listener = () => {
    document.getElementById('name').value = 'name';
    document.getElementById('place').value =  'place';
    document.getElementById('creature').value = 'creature';
    document.getElementById('object').value = 'object';


    document.getElementById('storyOutput').textContent = generateStory('name, place, creature, object');
}

document.getElementById('generateBtn').addEventListener('click', listener);