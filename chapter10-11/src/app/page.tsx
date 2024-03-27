

export default function Home() {
  return (
    <main>
    <h1 className="offscreen">My List</h1>

    <section className="newItemEntry">
      <h2 className="offscreen">New Item Entry</h2>
      <form className="newItemEntry__form" id="itemEntryForm">
        <label htmlFor="newItem" className="offscreen">Enter a new to do item</label>
        <input className="newItemEntry__input" id="newItem" type="text"  autoComplete="off"
          placeholder="Add item" />
        <button id="addItem" className="button newItemEntry__button" title="Add new item" aria-label="Add new item to list">
          +
        </button>
      </form>
    </section>

    <section className="listContainer">
      <header className="listTitle">
        <h2 id="listName">List</h2>
        <button id="clearItemsButton" className="button listTitle__button" title="Clear the list"
          aria-label="Remove all items from the list">
          Clear
        </button>
      </header>
      <hr />
      <ul id="listItems">

       
      </ul>
    </section>
  </main>
  );
}
