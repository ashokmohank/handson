//level 1A
import level1a2a from './level1a2a';

function l1a() {
    console.log('This is: Level-1A');
}

let objExport = {
    l1a: l1a,
    l1a2a: level1a2a
};

export default objExport;
