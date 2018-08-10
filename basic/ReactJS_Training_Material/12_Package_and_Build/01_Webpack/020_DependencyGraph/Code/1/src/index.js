import level1a from './level1a';
import level1b from './level1b';

level1a.l1a();
level1a.l1a2a();
level1b();

/*
DEPENDENCY GRAPH of this JS file:

index.js
    level1a
        --level1a2a
    level1b

*/
