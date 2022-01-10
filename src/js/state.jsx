import { atom } from 'recoil';

const lvData = atom({
    key: 'lvData',
    default: '@@Level@@'
});

const Levels = [
    {
        id: 1,
        name: "Level 1"
    },
    {
        id: 2,
        name: "Level 2"
    }
]

export { lvData, Levels }