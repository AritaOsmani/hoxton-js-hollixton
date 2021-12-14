const headerEl = document.createElement('header');
const mainEl = document.createElement('main');
const footerEl = document.createElement('footer');

const state = {
    store: [],
    page: 'Home',
    modal: '',
    user: '',
    bag: [],

}

function renderHeaderElements() {
    headerEl.innerHTML = ''
    const headerItemsContainer = document.createElement('ul');
    headerItemsContainer.setAttribute('class', 'header-items');

    const titleListItem = document.createElement('li');
    const headerTitle = document.createElement('h1');
    headerTitle.setAttribute('class', 'header-title');
    headerTitle.textContent = 'Hollixton';

    headerTitle.addEventListener('click', function () {
        state.page = 'Home';
        render();
    })

    //Add headerTitle to titleListItem:
    titleListItem.append(headerTitle);

    const girlsListItem = document.createElement('li');
    girlsListItem.setAttribute('class', 'girls');
    girlsListItem.textContent = 'Girls';

    girlsListItem.addEventListener('click', function () {
        state.page = 'Girls';
        render();
    })

    const guysListItem = document.createElement('li');
    guysListItem.setAttribute('class', 'guys');
    guysListItem.textContent = 'Guys';

    guysListItem.addEventListener('click', function () {
        state.page = 'Guys';
        render();
    })

    const saleListItem = document.createElement('li');
    saleListItem.setAttribute('class', 'sale');
    saleListItem.textContent = 'Sale';

    saleListItem.addEventListener('click', function () {
        state.page = 'Sale';
        render();
    })

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
    userButton.addEventListener('click', function () {
        if (state.user !== '') {
            state.modal = 'signOut';
        } else {
            state.modal = 'signIn';
        }
        render();
    })

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
    mainEl.innerHTML = ''
    const titleEl = document.createElement('h2');
    titleEl.textContent = 'Home';

    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'cards');

    if (state.page === 'Girls') {
        titleEl.textContent = 'Girls';
        const girlsType = getStoreItemsByType(state.page);
        for (const storeItem of girlsType) {
            const linkEl = createCardElements(storeItem);

            //Append linkEl to cardContainer:
            cardContainer.append(linkEl);
        }
    } else if (state.page === 'Guys') {
        titleEl.textContent = 'Guys';
        const guysType = getStoreItemsByType(state.page);
        for (const storeItem of guysType) {
            const linkEl = createCardElements(storeItem);

            //Append linkEl to cardContainer:
            cardContainer.append(linkEl);
        }
    } else if (state.page === 'Sale') {
        titleEl.textContent = 'Sales';
        let sales = getStoreItemsByDiscountProperty();
        for (const storeItem of sales) {

            const linkEl = createCardElements(storeItem);

            //Append linkEl to cardContainer:
            cardContainer.append(linkEl);
        }
    }
    else {
        for (const storeItem of state.store) {

            const linkEl = createCardElements(storeItem);

            //Append linkEl to cardContainer:
            cardContainer.append(linkEl);
        }
    }


    //Append titlEl and cardContainer to mainEl:
    mainEl.append(titleEl, cardContainer);

    //Append mainEl to body:
    document.body.append(mainEl);

}
function createCardElements(storeItem) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', '#');
    linkEl.addEventListener('click', function () {
        renderDetailsPageElements(storeItem);
    })

    const itemCard = document.createElement('div');
    itemCard.setAttribute('class', 'item-card');

    const itemImage = document.createElement('img');
    itemImage.setAttribute('class', 'item-img');
    itemImage.setAttribute('src', storeItem.image);

    const itemName = document.createElement('h3');
    itemName.setAttribute('class', 'item-name');
    itemName.textContent = storeItem.name;

    const prices = document.createElement('div');
    prices.setAttribute('class', 'prices');

    const itemPrice = document.createElement('span');

    itemPrice.textContent = `£ ${storeItem.price}`;

    if (storeItem.hasOwnProperty('discountedPrice')) {

        const itemdiscountedPrice = document.createElement('span');
        itemdiscountedPrice.setAttribute('class', 'item-discounted-price');
        itemdiscountedPrice.textContent = `£ ${storeItem.discountedPrice}`;
        itemPrice.setAttribute('class', 'item-price discount-price');
        //Append itemPrice and itemDiscountedPrice to prices:
        prices.append(itemPrice, itemdiscountedPrice);
    }
    else {

        itemPrice.setAttribute('class', 'item-price');
        prices.append(itemPrice);
    }

    const newTag = document.createElement('span');
    newTag.setAttribute('class', 'new-tag');
    newTag.textContent = 'New';

    if (getNumberOfDays(storeItem.dateEntered) > 10) {

        newTag.style.visibility = 'hidden';
    }

    itemCard.append(newTag, itemImage, itemName, prices);

    //Append itemCard to linkEl:
    linkEl.append(itemCard);
    return linkEl;
}
function renderDetailsPageElements(storeItem) {

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const imageEl = document.createElement('img');
    imageEl.setAttribute('src', storeItem.image);

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'info-container');

    const nameEl = document.createElement('h3');
    nameEl.textContent = storeItem.name;
    const priceEl = document.createElement('h4');
    priceEl.setAttribute('class', 'details-page-price')

    if (storeItem.discountedPrice) {
        priceEl.textContent = `£ ${storeItem.discountedPrice}`;
    } else {
        priceEl.textContent = `£ ${storeItem.price}`;
    }


    const addButton = document.createElement('button');
    addButton.setAttribute('class', 'add-to-cart-btn');
    addButton.textContent = 'Add to cart';

    addButton.addEventListener('click', function () {
        addItemToBag(storeItem);
        render();
    })

    infoContainer.append(nameEl, priceEl, addButton);
    container.append(imageEl, infoContainer);
    mainEl.innerHTML = ''
    mainEl.append(container);

}
function renderFooterElements() {
    footerEl.innerHTML = ''
    const titleEl = document.createElement('h3');
    titleEl.textContent = 'Hollixton';
    const parEl = document.createElement('p');
    parEl.textContent = 'United Kingdom';

    footerEl.append(titleEl, parEl);
    document.body.append(footerEl);
}

function renderSignInModal() {
    const modalWrapper = document.createElement('div');
    modalWrapper.setAttribute('class', 'modal-wrapper');

    const modal = document.createElement('div');
    modal.setAttribute('class', 'sign-in-modal');

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('class', 'close-btn');
    closeBtn.textContent = 'X';

    closeBtn.addEventListener('click', function () {
        state.modal = '';
        render();
    })

    const titleEl = document.createElement('h3');
    titleEl.textContent = 'Sign In';

    const formEl = document.createElement('form');
    formEl.setAttribute('class', 'sign-in-form');

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');

    emailLabel.append(emailInput);

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');

    passwordLabel.append(passwordInput);

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('class', 'sign-in-btn');
    submitBtn.textContent = 'SIGN IN';

    formEl.append(emailLabel, passwordLabel, submitBtn);

    formEl.addEventListener('submit', event => {
        event.preventDefault();
        const userName = emailInput.value;
        const password = passwordInput.value;
        getUserFromServer(userName).then(user => {
            if (user.password === password) {
                state.bag = user.bag;
                state.user = userName;
            }
        });
        state.modal = '';
        render();
    })

    modal.append(closeBtn, titleEl, formEl);
    modalWrapper.append(modal);
    document.body.append(modalWrapper);
}
function renderSignOutModal() {

    const modalWrapper = document.createElement('div');
    modalWrapper.setAttribute('class', 'modal-wrapper');

    const modal = document.createElement('div');
    modal.setAttribute('class', 'sign-out-modal');

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('class', 'close-btn');
    closeBtn.textContent = 'X';

    closeBtn.addEventListener('click', function () {
        state.modal = '';
        render();
    })

    const titleEl = document.createElement('h2');
    titleEl.textContent = 'Profile';

    const username = state.user.split('@')
    const name = username[0].charAt(0).toUpperCase() + username[0].slice(1);
    const parEl = document.createElement('p');
    parEl.textContent = `Hey, ${name}`;

    const signOutBtn = document.createElement('button');
    signOutBtn.setAttribute('class', 'sign-out-btn');
    signOutBtn.textContent = 'SIGN OUT';

    signOutBtn.addEventListener('click', function () {
        state.user = '';
        state.bag = [];
        state.modal = '';
        render();
    })

    modal.append(closeBtn, titleEl, parEl, signOutBtn);
    modalWrapper.append(modal);
    document.body.append(modalWrapper);
}
function renderModals() {
    if (state.modal === '') {
        return;
    }
    if (state.modal === 'signIn') {
        renderSignInModal();
    }
    if (state.modal === 'signOut') {
        renderSignOutModal();
    }
}
function getStoreItemsFromServer() {
    return fetch('http://localhost:3000/store').then(res => res.json())
}
function getStoreItemsByType(storeType) {
    let newArr = state.store.filter(item => item.type === storeType);
    return newArr;
}
function getStoreItemsByDiscountProperty() {
    let newArr = state.store.filter(item => item.hasOwnProperty('discountedPrice'));
    return newArr;
}
function getUserFromServer(userName) {
    return fetch(`http://localhost:3000/users/${userName}`).then(res => res.json());
}
function getNumberOfDays(dateEneterd) {
    let todaysDate = new Date();
    let arr = dateEneterd.split('/');
    let date = new Date(arr[0], arr[1] - 1, arr[2]);

    let diff = todaysDate - date;

    let numOfDays = (diff / (60 * 60 * 24 * 1000));
    return Math.floor(numOfDays);
}
function addItemToBag(storeItem) {
    if (storeItem.stock === 0) {
        return
    }

    const item = {
        id: storeItem.id,
        quantity: 1
    }
    const index = state.bag.findIndex(i => i.id === storeItem.id);
    if (index === -1) {
        state.bag.push(item);
    } else {
        increaseQuantity(state.bag[index]);
    }
    updateBagInServer(state.bag);
    decreaseQuantity(storeItem);
    updateStoreItemInServer(storeItem);

}
function increaseQuantity(storeItem) {
    storeItem.quantity++;
}
function decreaseQuantity(storeItem) {
    storeItem.stock--;
}
function updateBagInServer(newBag) {
    fetch(`http://localhost:3000/users/${state.user}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ bag: newBag })
    })
}
function updateStoreItemInServer(storeItem) {
    fetch(`http://localhost:3000/store/${storeItem.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(storeItem)
    })
}
function render() {
    document.body.innerHTML = '';
    renderHeaderElements();
    renderMainElements();
    renderFooterElements();
    renderModals();

}
function init() {
    getStoreItemsFromServer().then(store => {
        state.store = store;
        render();
    });

}
init();
