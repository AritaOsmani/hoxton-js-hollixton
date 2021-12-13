const headerEl = document.createElement('header');
const mainEl = document.createElement('main');
const footerEl = document.createElement('footer');

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
function renderMainElements() {
    // <main>
    //     <h2>Home</h2>
    //     <div class="cards">
    //         <a href="#">
    //             <div class="item-card">
    //                 <img class="item-img" src="https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1"
    //                     alt="">
    //                 <h3 class="item-name">Name</h3>
    //                 <div class="prices">
    //                     <span class="item-price">Price</span>
    //                     <span class="item-discounted-price">Discounted</span>
    //                 </div>

    //             </div>
    //         </a>
    //     </div>

    // </main>



    const titleEl = document.createElement('h2');
    titleEl.textContent = 'Home';

    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'cards');

    for (let i = 0; i < 10; i++) {

        const linkEl = createCardElements();

        //Append linkEl to cardContainer:
        cardContainer.append(linkEl);
    }
    //Append titlEl and cardContainer to mainEl:
    mainEl.append(titleEl, cardContainer);

    //Append mainEl to body:
    document.body.append(mainEl);

}
function createCardElements() {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', '#');

    const itemCard = document.createElement('div');
    itemCard.setAttribute('class', 'item-card');

    const itemImage = document.createElement('img');
    itemImage.setAttribute('class', 'item-img');
    itemImage.setAttribute('src', 'https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1');

    const itemName = document.createElement('h3');
    itemName.setAttribute('class', 'item-name');
    itemName.textContent = 'Name';

    const prices = document.createElement('div');
    prices.setAttribute('class', 'prices');

    const itemPrice = document.createElement('span');
    itemPrice.setAttribute('class', 'item-price');
    itemPrice.textContent = 'Price';

    const itemdiscountedPrice = document.createElement('span');
    itemdiscountedPrice.setAttribute('class', 'item-discounted-price');
    itemdiscountedPrice.textContent = 'Discounted';

    //Append itemPrice and itemDiscountedPrice to prices:
    prices.append(itemPrice, itemdiscountedPrice);

    //Append image, name and prices to itemCard:
    itemCard.append(itemImage, itemName, prices);

    //Append itemCard to linkEl:
    linkEl.append(itemCard);
    return linkEl;
}
function renderFooterElements() {
    const titleEl = document.createElement('h3');
    titleEl.textContent = 'Hollixton';
    const parEl = document.createElement('p');
    parEl.textContent = 'United Kingdom';

    footerEl.append(titleEl, parEl);
    document.body.append(footerEl);
}

function render() {
    document.body.innerHTML = '';
    renderHeaderElements();
    renderMainElements();
    renderFooterElements();

}
render();