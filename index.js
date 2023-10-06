// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
beforeEach(function () {
  cats.length = 0; 

  cats.push("Milo", "Otis", "Garfield"); 
});
it('appends a cat to the end of the cats array', function() {
  destructivelyAppendCat('Whiskers');
  assert.deepEqual(cats, ["Milo", "Otis", "Garfield", "Whiskers"]);
});
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
describe('destructivelyPrependCat(name)', function() {
  it('prepends a cat to the beginning of the cats array', function() {
    destructivelyPrependCat('Whiskers');
    assert.deepEqual(cats, ["Whiskers", "Milo", "Otis", "Garfield"]);
  });
});
function destructivelyRemoveLastCat() {
  cats.pop();
}
describe('destructivelyRemoveLastCat()', function() {
  it('removes the last cat from the cats array', function() {
    destructivelyRemoveLastCat();
    assert.deepEqual(cats, ["Milo", "Otis"]);
  });
});
function destructivelyRemoveFirstCat() {
  cats.shift();
}
describe('destructivelyRemoveFirstCat()', function() {
  it('removes the first cat from the cats array', function() {
    destructivelyRemoveFirstCat();
    assert.deepEqual(cats, ["Otis", "Garfield"]);
  });
});
function appendCat(name) {
  return cats.concat(name);
}
describe('appendCat(name)', function() {
  it('appends a cat to the cats array and returns a new array', function() {
    const newCats = appendCat('Whiskers');
    assert.deepEqual(newCats, ["Milo", "Otis", "Garfield", "Whiskers"]);
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); 
  });
});
function prependCat(name) {
  return [name].concat(cats);
}
describe('prependCat(name)', function() {
  it('prepends a cat to the cats array and returns a new array', function() {
    const newCats = prependCat('Whiskers');
    assert.deepEqual(newCats, ["Whiskers", "Milo", "Otis", "Garfield"]);
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); 
  });
});
function removeLastCat() {
  return cats.slice(0, -1);
}
describe('removeLastCat()', function() {
  it('removes the last cat in the cats array and returns a new array', function() {
    const newCats = removeLastCat();
    assert.deepEqual(newCats, ["Milo", "Otis"]);
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); 
  });
});
function removeFirstCat() {
  return cats.slice(1);
}
describe('removeFirstCat()', function() {
  it('removes the first cat from the cats array and returns a new array', function() {
    const newCats = removeFirstCat();
    assert.deepEqual(newCats, ["Otis", "Garfield"]);
    assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); 
  });
});




  
  