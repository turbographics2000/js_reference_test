window.onload = function() {
  monsterSelect.onchange = function() {
    result.textContent = 'hp:' + monsters[this.value].hp + ', attack:' + monsters[this.value].attack;
  } 
}
