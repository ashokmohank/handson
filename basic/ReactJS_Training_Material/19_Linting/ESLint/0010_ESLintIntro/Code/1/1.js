import React from 'react';

// no-unused-vars
const x = 100;
x = 500;

// no-undef
y = 200;

// Logical errors
if (10 === 10) {
  console.log('test');
}

// ESLint will auto corrrect this statement if uncommented (no-var): let i = 10;
