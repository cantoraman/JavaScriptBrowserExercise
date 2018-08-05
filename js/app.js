document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const characters = [];

  function Character(stats) {

    this.name = stats.name;
    this.race = stats.race;
    this.playerClass = stats.playerClass;
    this.level = stats.level;
    this.alignment = stats.alignment;
    this.hp = stats.hp;
}

  const form = document.querySelector("#new-character");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    var checkboxClasses = document.forms[0];
    var playerClasses = [];
    var i;
    for (i = 0; i < checkboxClasses.length; i++) {
      if (checkboxClasses[i].checked && checkboxClasses[i].type!="radio") {
        playerClasses.push(checkboxClasses[i].value);
      }
    }
    var stats = {
      name: event.target.name.value,
      race: event.target.race.value,
      playerClass: playerClasses,
      level: event.target.level.value,
      alignment: event.target.alignment.value,
      hp: event.target.hp.value
    };
    console.table(stats);
    var newCharacter = new Character(stats);

    addCharacterToTheList(newCharacter);

    displayList(characters);
  });

  const deleteButton = document.querySelector("#delete-button");

  deleteButton.addEventListener("submit", (event) => {
    event.preventDefault();
    deleteList();

  });



  function deleteList(){
      const characterList = document.querySelector('#output');
      characterList.removeAll();
  }



  function addCharacterToTheList(newCharacter) {
  characters.push(newCharacter);
  }

  Element.prototype.removeAll = function () {
  while (this.firstChild) { this.removeChild(this.firstChild); }
  return this;
  };

  function displayList(characters){
    const characterList = document.querySelector('#output');

    characterList.removeAll();


    for(var character of characters )
    {
      const characterRow = document.createElement("div");
      characterRow.setAttribute("class", "outputs");
      characterList.appendChild(characterRow);

     const name = document.createElement("div");
     name.textContent = character.name;
     characterRow.appendChild(name);

     const race = document.createElement("div");
     race.textContent = character.race;
     characterRow.appendChild(race);

     const playerClass = document.createElement("div");
     playerClass.setAttribute("id", "checkboxes");
     characterRow.appendChild(playerClass);

     var classSet = [];
     for(i=0; i<character.playerClass.length; i++)
     {
       classSet.push(document.createElement("p"));
       classSet[i].textContent = character.playerClass[i];
       console.log (classSet[i]);
       playerClass.appendChild(classSet[i]);
     }

     const level = document.createElement("p");
     level.textContent = character.level;
     characterRow.appendChild(level);

     const alignment = document.createElement("p");
     alignment.textContent = character.alignment;
     characterRow.appendChild(alignment);

     const hp = document.createElement("p");
     hp.textContent = character.hp;
     characterRow.appendChild(hp);

   }
    // newRow.appendChild(titleCell);
    //
    // const authorCell = document.createElement("tc");
    // authorCell.textContent = author;
    // newRow.appendChild(authorCell);
    //
    // const categoryCell = document.createElement("tc");
    // categoryCell.textContent = category;
    // newRow.appendChild(categoryCell);

  }

});
