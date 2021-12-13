const headerEl = document.createElement('header');
const state = {
    store: []
}


function renderHeaderElements() {

    const headerItemsContainer = document.createElement('ul');
    headerItemsContainer.setAttribute('class', 'header-items');

    const titleListItem = document.createElement('li');
    const headerTitle = document.createElement('h1');
    headerTitle.setAttribute('class', 'header-title');
    headerTitle.textContent = 'Hollixton';

    //Add headerTitle to titleListItem:
    titleListItem.append(headerTitle);

    const girlsListItem = document.createElement('li');
    girlsListItem.setAttribute('class', 'girls');
    girlsListItem.textContent = 'Girls';

    const guysListItem = document.createElement('li');
    guysListItem.setAttribute('class', 'guys');
    guysListItem.textContent = 'Guys';

    const saleListItem = document.createElement('li');
    saleListItem.setAttribute('class', 'sale');
    saleListItem.textContent = 'Sale';


    const searchIcon = document.createElement('i');
    searchIcon.setAttribute('class', 'fal fa-search');
    const searchButton = document.createElement('button');
    searchButton.setAttribute('class', 'search-button');
    //Append searchIcon to searchButton:
    searchButton.append(searchIcon);

    const searchListItem = document.createElement('li');
    searchListItem.setAttribute('class', 'btn-list');
    searchListItem.append(searchButton);

    const userIcon = document.createElement('i');
    userIcon.setAttribute('class', 'far fa-user');
    const userButton = document.createElement('button');
    userButton.setAttribute('class', 'user-button');
    //Append userIcon to userButton:
    userButton.append(userIcon);

    const userListItem = document.createElement('li');
    userListItem.setAttribute('class', 'btn-list');
    userListItem.append(userButton);

    const bagIcon = document.createElement('i');
    bagIcon.setAttribute('class', 'far fa-shopping-bag');
    const bagButton = document.createElement('button');
    bagButton.setAttribute('class', 'bag-button');
    //Append bagIcon to bagButton:
    bagButton.append(bagIcon);

    const bagListItem = document.createElement('li');
    bagListItem.setAttribute('class', 'btn-list');
    bagListItem.append(bagButton);

    //Append list items to headerItemsContainer:
    headerItemsContainer.append(titleListItem, girlsListItem, guysListItem, saleListItem, searchListItem, userListItem, bagListItem);

    //Append headerItemsContainer to headerEl:
    headerEl.append(headerItemsContainer);

    //Append headerEl to body:
    document.body.append(headerEl);
}

function render() {
    document.body.innerHTML = '';
    renderHeaderElements();
}
render();