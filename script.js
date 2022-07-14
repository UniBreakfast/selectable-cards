addBtn.onclick = addCard

cards.onclick = e => {
  const card = e.target.closest('.card')

  if (card) {
    if (e.target.classList.contains('del-btn')) {
      remove(card)
    } else {
      toggleSelection(card)
    }
  } else {
    toggleSelection()
  }

  showCount(countSelected())
}

function addCard() {
  const card = document.createElement('li')

  card.classList.add('card')
  card.innerHTML = `
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sequi vero vitae ad illo, facilis dicta dolores. Iure eaque magni quam vitae, veritatis tempore, consequuntur doloribus ipsam molestias temporibus odit!</p>

    <button class="del-btn">Delete</button>
  `
  cards.append(card)
}

function toggleSelection(card) {
  if (!card) {
    cards.querySelectorAll('.selected').forEach(c => c.classList.remove('selected'))
  } else {
    card.classList.toggle('selected')
  }
}

function showCount(num) {
  countOut.hidden = !(num > 0)
  countOut.innerText = num
}

function countSelected() {
  return cards.querySelectorAll('.selected').length
}

function remove(card) {
  card.remove()
}
