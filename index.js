const cats = ["Milo", "Otis", "Garfield"];

  function destructivelyAppendCat(name) {
      cats.push(name);
      return cats;
  }

  function destructivelyPrependCat(name) {
      cats.unshift(name);
      return cats;
  }

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
  const cats = ["Milo", "Otis", "Garfield"];
   let allCats = [...cats, name];
    return allCats;
}

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    let allCats = [name, ...cats];
    return allCats;
}

function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.splice(2, 1);
    return cats;
}

function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.splice(0, 1);
    return cats;
}