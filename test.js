document.addEventListener("DOMContentLoaded", function() {
    // Create header
    const header = document.createElement('div');
    header.classList.add('header');
    
    const headerNavbar = document.createElement('div');
    headerNavbar.classList.add('header-navbar');
    header.appendChild(headerNavbar);
    
    // Navbar Home
    const navbarHome = document.createElement('div');
    navbarHome.classList.add('navbar-home');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add('header-home-btn');
    homeButton.textContent = 'HOME';
    navbarHome.appendChild(homeButton);
    
    const dropdownHome = document.createElement('div');
    dropdownHome.id = 'home';
    dropdownHome.classList.add('dropdown-home');
    ['Homepage A', 'Homepage B', 'Homepage C'].forEach(page => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = page;
        li.appendChild(a);
        dropdownHome.appendChild(li);
    });
    navbarHome.appendChild(dropdownHome);
    headerNavbar.appendChild(navbarHome);
    
    // Navbar Template
    const navbarTemplate = document.createElement('div');
    navbarTemplate.classList.add('navbar-template');
    
    const templateButton = document.createElement('button');
    templateButton.classList.add('header-template-btn');
    templateButton.textContent = 'TEMPLATE';
    navbarTemplate.appendChild(templateButton);
    
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    
    const rows = [
        {
            title: 'SHOP',
            items: ['Listing sidebar', 'Listing full width', 'Product default', 'Product carousel', 'Lookbook']
        },
        {
            title: 'CART',
            items: ['Cart', 'Checkout', 'Order']
        },
        {
            title: 'ACCOUNT',
            items: ['Order list', 'Order details', 'Favorites', 'Personal data', 'Change password']
        },
        {
            title: 'KHONG CO',
            items: ['Adresses', 'Edit address', 'Login']
        },
        {
            title: 'OTHER PAGES',
            items: ['About', 'Contact', 'Blog', 'Blog post']
        }
    ];
    
    rows.forEach(row => {
        const column = document.createElement('div');
        column.classList.add('column');
        
        const h3 = document.createElement('h3');
        h3.textContent = row.title;
        column.appendChild(h3);
        
        row.items.forEach(item => {
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = item;
            column.appendChild(a);
        });
        
        menuContent.appendChild(column);
    });
    
    navbarTemplate.appendChild(menuContent);
    headerNavbar.appendChild(navbarTemplate);
    
    // Navbar Docs
    const navbarDocs = document.createElement('div');
    navbarDocs.classList.add('navbar-docs');
    navbarDocs.id = 'docs-button-link';
    
    const docsButton = document.createElement('button');
    docsButton.classList.add('header-docs-btn');
    docsButton.textContent = 'DOCS';
    docsButton.addEventListener('click', function() {
        window.location.href = 'https://demo.htmlhunters.com/shopy/documentation.html';
    });
    navbarDocs.appendChild(docsButton);
    headerNavbar.appendChild(navbarDocs);
    
    // Navbar Sale
    const navbarSale = document.createElement('div');
    navbarSale.classList.add('navbar-sale');
    
    const saleButton = document.createElement('button');
    saleButton.classList.add('header-sale-btn');
    saleButton.textContent = 'SALE';
    saleButton.style.color = 'red';
    navbarSale.appendChild(saleButton);
    
    const imgMenuSale = document.createElement('div');
    imgMenuSale.classList.add('img-menu-sale');
    
    const img1Sale = document.createElement('img');
    img1Sale.classList.add('img-menu1-sale');
    img1Sale.src = 'img menu sale 1.png';
    imgMenuSale.appendChild(img1Sale);
    
    const img2Sale = document.createElement('img');
    img2Sale.classList.add('img-menu2-sale');
    img2Sale.src = 'img menu sale 2.png';
    imgMenuSale.appendChild(img2Sale);
    
    navbarSale.appendChild(imgMenuSale);
    headerNavbar.appendChild(navbarSale);
    
    // Append header-navbar to header
    document.body.appendChild(header);
    
    // Header logo
    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header-logo');
    const h1Logo = document.createElement('h1');
    h1Logo.textContent = 'SHOPI';
    headerLogo.appendChild(h1Logo);
    header.appendChild(headerLogo);
    
    // Header icons
    const headerIcon = document.createElement('div');
    headerIcon.classList.add('header-icon');
    header.appendChild(headerIcon);
    
    // Icon Search
    const iconSearch = document.createElement('div');
    iconSearch.classList.add('icon-search');
    const searchLink = document.createElement('a');
    searchLink.href = '#';
    const searchIcon = document.createElement('i');
    searchIcon.classList.add('fas', 'fa-search');
    searchLink.appendChild(searchIcon);
    iconSearch.appendChild(searchLink);
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.classList.add('input-search');
    searchInput.placeholder = 'Search for items and brands';
    iconSearch.appendChild(searchInput);
    headerIcon.appendChild(iconSearch);
    
    // Icon Globe
    const iconGlobe = document.createElement('div');
    iconGlobe.classList.add('icon-globe');
    const globeLink = document.createElement('a');
    globeLink.href = '#';
    const globeIcon = document.createElement('i');
    globeIcon.classList.add('fas', 'fa-globe');
    globeLink.appendChild(globeIcon);
    iconGlobe.appendChild(globeLink);
    
    const twoOption = document.createElement('div');
    twoOption.classList.add('two-option');
    
    const labelGlobe1 = document.createElement('div');
    labelGlobe1.classList.add('label-globe1');
    const selectGlobe1 = document.createElement('select');
    selectGlobe1.classList.add('option-globe1');
    selectGlobe1.id = 'United-States';
    ['United States', 'Germany', 'France'].forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        selectGlobe1.appendChild(option);
    });
    labelGlobe1.appendChild(selectGlobe1);
    twoOption.appendChild(labelGlobe1);
    
    const labelGlobe2 = document.createElement('div');
    labelGlobe2.classList.add('label-globe2');
    const selectGlobe2 = document.createElement('select');
    selectGlobe2.classList.add('option-globe2');
    selectGlobe2.id = 'option-globe2';
    ['USD', 'EUR', 'RUB'].forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        selectGlobe2.appendChild(option);
    });
    labelGlobe2.appendChild(selectGlobe2);
    twoOption.appendChild(labelGlobe2);
    
    iconGlobe.appendChild(twoOption);
    headerIcon.appendChild(iconGlobe);
    
    // Icon User
    const iconUser = document.createElement('div');
    iconUser.classList.add('icon-user');
    const userLink = document.createElement('a');
    userLink.href = '#';
    const userIcon = document.createElement('i');
    userIcon.classList.add('fas', 'fa-user');
    userLink.appendChild(userIcon);
    iconUser.appendChild(userLink);
    
    const containerTwoLogin = document.createElement('div');
    containerTwoLogin.classList.add('container-two-login');
    
    const formLogin = document.createElement('form');
    formLogin.classList.add('form-login');
    
    const firstNameLabel = document.createElement('label');
    firstNameLabel.htmlFor = 'first-name';
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.id = 'first-name';
    firstNameInput.placeholder = 'first-name';
    formLogin.appendChild(firstNameLabel);
    formLogin.appendChild(firstNameInput);
    
    const surnameLabel = document.createElement('label');
    surnameLabel.htmlFor = 'surname';
    const surnameInput = document.createElement('input');
    surnameInput.type = 'text';
    surnameInput.id = 'surname';
    surnameInput.placeholder = 'surname';
    formLogin.appendChild(surnameLabel);
    formLogin.appendChild(surnameInput);
    
    const forgotPassLink = document.createElement('a');
    forgotPassLink.classList.add('forgot-pass');
    forgotPassLink.href = '#';
    forgotPassLink.textContent = 'Forgot Password ?';
    formLogin.appendChild(forgotPassLink);
    
    const buttonUser = document.createElement('div');
    buttonUser.classList.add('button-user');
    const signInButton = document.createElement('button');
    signInButton.classList.add('sign');
    signInButton.type = 'submit';
    signInButton.textContent = 'SIGN IN';
    buttonUser.appendChild(signInButton);
    
    const createAccountButton = document.createElement('button');
    createAccountButton.type = 'button';
    createAccountButton.textContent = 'CREATE ACCOUNT';
    buttonUser.appendChild(createAccountButton);
    
    formLogin.appendChild(buttonUser);
    containerTwoLogin.appendChild(formLogin);
    iconUser.appendChild(containerTwoLogin);
    headerIcon.appendChild(iconUser);
    
    // Icon Heart
    const iconHeart = document.createElement('div');
    iconHeart.classList.add('icon-heart');
    const heartLink = document.createElement('a');
    heartLink.href = '#';
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fas', 'fa-heart');
    heartLink.appendChild(heartIcon);
    iconHeart.appendChild(heartLink);
    
    const containerHeart = document.createElement('div');
    containerHeart.classList.add('container-heart');
    
    const h1Heart = document.createElement('h1');
    h1Heart.classList.add('h1heart');
    h1Heart.textContent = 'MY FAVORITES';
    containerHeart.appendChild(h1Heart);
    
    const h3Heart = document.createElement('h3');
    h3Heart.classList.add('h3heart');
    h3Heart.textContent = 'Sign in to keep your saves for up to 60 days';
    containerHeart.appendChild(h3Heart);
    
    const imgHeart = document.createElement('img');
    imgHeart.classList.add('imgheart');
    imgHeart.src = 'img-icon-heart.png';
    containerHeart.appendChild(imgHeart);
    
    const buttonHeart = document.createElement('div');
    buttonHeart.classList.add('button-heart');
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('addalltocart');
    addToCartButton.type = 'submit';
    addToCartButton.textContent = 'ADD ALL TO CART';
    buttonHeart.appendChild(addToCartButton);
    
    const viewFavoritesButton = document.createElement('button');
    viewFavoritesButton.type = 'button';
    viewFavoritesButton.textContent = 'VIEWS FAVORITES';
    buttonHeart.appendChild(viewFavoritesButton);
    
    containerHeart.appendChild(buttonHeart);
    iconHeart.appendChild(containerHeart);
    headerIcon.appendChild(iconHeart);
    
    // Icon Shopping
    const iconShopping = document.createElement('div');
    iconShopping.classList.add('icon-shopping');
    const shoppingLink = document.createElement('a');
    shoppingLink.href = '#';
    const shoppingIcon = document.createElement('i');
    shoppingIcon.classList.add('fas', 'fa-shopping-cart');
    shoppingLink.appendChild(shoppingIcon);
    iconShopping.appendChild(shoppingLink);
    
    const containerShopping = document.createElement('div');
    containerShopping.classList.add('container-shopping');
    
    const h1Shopping = document.createElement('h1');
    h1Shopping.classList.add('h1shopping');
    h1Shopping.textContent = 'MY FAVORITES';
    containerShopping.appendChild(h1Shopping);
    
    const h3Shopping = document.createElement('h3');
    h3Shopping.classList.add('h3shopping');
    h3Shopping.textContent = 'Sign in to keep your saves for up to 60 days';
    containerShopping.appendChild(h3Shopping);
    
    const imgShopping = document.createElement('img');
    imgShopping.classList.add('imgshopping');
    imgShopping.src = 'img-icon-heart.png';
    containerShopping.appendChild(imgShopping);
    
    const buttonShopping = document.createElement('div');
    buttonShopping.classList.add('button-shopping');
    const addToCartShoppingButton = document.createElement('button');
    addToCartShoppingButton.classList.add('addalltocart-shopping');
    addToCartShoppingButton.type = 'submit';
    addToCartShoppingButton.textContent = 'ADD ALL TO CART';
    buttonShopping.appendChild(addToCartShoppingButton);
    
    const viewFavoritesShoppingButton = document.createElement('button');
    viewFavoritesShoppingButton.type = 'button';
    viewFavoritesShoppingButton.textContent = 'VIEWS FAVORITES';
    buttonShopping.appendChild(viewFavoritesShoppingButton);
    
    containerShopping.appendChild(buttonShopping);
    iconShopping.appendChild(containerShopping);
    headerIcon.appendChild(iconShopping);
    
    // Content
    const content1 = document.createElement('div');
    content1.classList.add('content-1');
    
    const contentImg1 = document.createElement('img');
    contentImg1.classList.add('content1');
    contentImg1.src = 'content1-1.png';
    content1.appendChild(contentImg1);
    
    const contentImg2 = document.createElement('img');
    contentImg2.classList.add('content2');
    contentImg2.src = 'content1-2.png';
    content1.appendChild(contentImg2);
    
    const btnCt1 = document.createElement('div');
    btnCt1.classList.add('btn-ct1');
    
    const shopNowButton1 = document.createElement('button');
    shopNowButton1.classList.add('btn-1-ct1');
    shopNowButton1.textContent = 'SHOP NOW';
    btnCt1.appendChild(shopNowButton1);
    
    const shopNowButton2 = document.createElement('button');
    shopNowButton2.classList.add('btn-2-ct1');
    shopNowButton2.textContent = 'SHOP NOW';
    btnCt1.appendChild(shopNowButton2);
    
    content1.appendChild(btnCt1);
    document.body.appendChild(content1);
    
    // Content name shop
    const contentNameShop = document.createElement('div');
    contentNameShop.classList.add('content-name-shop');
    
    const h1ShopNewLook = document.createElement('h1');
    h1ShopNewLook.textContent = 'SHOP NEW LOOK';
    contentNameShop.appendChild(h1ShopNewLook);
    
    const h2BlackCasualLook = document.createElement('h2');
    h2BlackCasualLook.textContent = 'Black Casual Look';
    contentNameShop.appendChild(h2BlackCasualLook);
    document.body.appendChild(contentNameShop);
    
    // Content 2
    const content2 = document.createElement('div');
    content2.classList.add('content-2');
    
    const largeImg = document.createElement('img');
    largeImg.classList.add('large');
    largeImg.src = 'content2-1.png';
    content2.appendChild(largeImg);
    
    const imgSmall = document.createElement('div');
    imgSmall.classList.add('img-small');
    
    for (let i = 1; i <= 4; i++) {
        const img = document.createElement('img');
        img.src = `content2-1-${i}.png`;
        imgSmall.appendChild(img);
    }
    
    content2.appendChild(imgSmall);
    document.body.appendChild(content2);
    
    // Content 3
    const content3 = document.createElement('div');
    content3.classList.add('content-3');
    
    const viewMoreLink = document.createElement('a');
    viewMoreLink.href = '#';
    viewMoreLink.textContent = 'View more looks';
    content3.appendChild(viewMoreLink);
    document.body.appendChild(content3);
    
    // Content 4
    const content4 = document.createElement('div');
    content4.classList.add('content-4');
    
    const ct4 = document.createElement('div');
    ct4.classList.add('ct-4');
    
    const h2GoldJewelry = document.createElement('h2');
    h2GoldJewelry.classList.add('ct-4-1');
    h2GoldJewelry.textContent = 'Gold Jewlery';
    ct4.appendChild(h2GoldJewelry);
    
    const h2EarringsRings = document.createElement('h2');
    h2EarringsRings.classList.add('ct-4-2');
    h2EarringsRings.textContent = 'Earrings & Rings';
    ct4.appendChild(h2EarringsRings);
    
    const shopContent4Link = document.createElement('a');
    shopContent4Link.href = '#';
    shopContent4Link.classList.add('shop-content4');
    shopContent4Link.textContent = 'Shop Now';
    ct4.appendChild(shopContent4Link);
    
    content4.appendChild(ct4);
    document.body.appendChild(content4);
    
    // Content 5
    const content5 = document.createElement('div');
    content5.classList.add('content-5');
    
    const content5Left = document.createElement('div');
    content5Left.classList.add('content-5-left');
    
    const h2ShopTheLook = document.createElement('h2');
    h2ShopTheLook.textContent = 'SHOP THE LOOK';
    content5Left.appendChild(h2ShopTheLook);
    
    const h1TrendingLooks = document.createElement('h1');
    h1TrendingLooks.textContent = 'Trending Looks';
    content5Left.appendChild(h1TrendingLooks);
    
    content5.appendChild(content5Left);
    
    const content5Right = document.createElement('div');
    content5Right.classList.add('content-5-right');
    
    const viewMoreLink2 = document.createElement('a');
    viewMoreLink2.href = '#';
    viewMoreLink2.textContent = 'View More';
    content5Right.appendChild(viewMoreLink2);
    
    content5.appendChild(content5Right);
    document.body.appendChild(content5);
    
    // Content 6
    const content6 = document.createElement('div');
    content6.classList.add('content-6');
    
    const ct6 = document.createElement('div');
    ct6.classList.add('ct-6');
    
    for (let i = 1; i <= 3; i++) {
        const img = document.createElement('img');
        img.classList.add(`imgct6-${i}`);
        img.src = `content6-${i}.jpg`;
        ct6.appendChild(img);
    }
    
    content6.appendChild(ct6);
    document.body.appendChild(content6);
    
    // Footer
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    const container = document.createElement('div');
    container.classList.add('container');
    footer.appendChild(container);
    
    const footerColumn1 = document.createElement('div');
    footerColumn1.classList.add('footer-column');
    
    const h3Company = document.createElement('h3');
    h3Company.textContent = 'Company';
    footerColumn1.appendChild(h3Company);
    
    const ulCompany = document.createElement('ul');
    
    const companyLinks = ['Our story', 'Careers', 'Press', 'Contact'];
    companyLinks.forEach(linkText => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = linkText;
        li.appendChild(a);
        ulCompany.appendChild(li);
    });
    
    footerColumn1.appendChild(ulCompany);
    container.appendChild(footerColumn1);
    
    const footerColumn2 = document.createElement('div');
    footerColumn2.classList.add('footer-column');
    
    const h3HelpCenter = document.createElement('h3');
    h3HelpCenter.textContent = 'Help Center';
    footerColumn2.appendChild(h3HelpCenter);
    
    const ulHelpCenter = document.createElement('ul');
    
    const helpCenterLinks = ['Shipping', 'Returns', 'Payment', 'FAQ'];
    helpCenterLinks.forEach(linkText => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = linkText;
        li.appendChild(a);
        ulHelpCenter.appendChild(li);
    });
    
    footerColumn2.appendChild(ulHelpCenter);
    container.appendChild(footerColumn2);
    
    const footerColumn3 = document.createElement('div');
    footerColumn3.classList.add('footer-column', 'newsletter');
    
    const h3Newsletter = document.createElement('h3');
    h3Newsletter.textContent = 'Subscribe to Newsletter';
    footerColumn3.appendChild(h3Newsletter);
    
    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Your email';
    footerColumn3.appendChild(inputEmail);
    
    const subscribeButton = document.createElement('button');
    subscribeButton.textContent = 'SUBSCRIBE';
    footerColumn3.appendChild(subscribeButton);
    
    const socialIcons = document.createElement('div');
    socialIcons.classList.add('social-icons');
    
    const socialMediaLinks = ['fab fa-facebook-f', 'fab fa-instagram', 'fab fa-twitter', 'fab fa-pinterest'];
    socialMediaLinks.forEach(iconClass => {
        const a = document.createElement('a');
        a.href = '#';
        const i = document.createElement('i');
        i.classList.add(iconClass);
        a.appendChild(i);
        socialIcons.appendChild(a);
    });
    
    footerColumn3.appendChild(socialIcons);
    container.appendChild(footerColumn3);
    
    const footerColumn4 = document.createElement('div');
    footerColumn4.classList.add('footer-column', 'region-currency');
    
    const h3RegionCurrency = document.createElement('h3');
    h3RegionCurrency.textContent = 'Region & Currency';
    footerColumn4.appendChild(h3RegionCurrency);
    
    const selectRegion = document.createElement('select');
    ['United States', 'Germany', 'France'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        selectRegion.appendChild(option);
    });
    footerColumn4.appendChild(selectRegion);
    
    const selectCurrency = document.createElement('select');
    ['USD', 'EUR', 'RUB'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        selectCurrency.appendChild(option);
    });
    footerColumn4.appendChild(selectCurrency);
    
    const paymentMethods = document.createElement('div');
    paymentMethods.classList.add('payment-methods');
    
    const paymentIcons = ['visa.png', 'mastercard.png', 'amexx.png'];
    paymentIcons.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = src.split('.')[0];
        paymentMethods.appendChild(img);
    });
    
    footerColumn4.appendChild(paymentMethods);
    container.appendChild(footerColumn4);
    
    const footerBottom = document.createElement('div');
    footerBottom.classList.add('footer-bottom');
    
    const footerText = document.createElement('p');
    footerText.textContent = '© 2020 SHOPY. Product images by OAK + FORT. Bootstrap template by HTMLHUNTERS.';
    footerBottom.appendChild(footerText);
    
    const privacyPolicyLink = document.createElement('a');
    privacyPolicyLink.href = '#';
    privacyPolicyLink.textContent = 'Privacy Policy';
    footerBottom.appendChild(privacyPolicyLink);
    
    const termsOfUseLink = document.createElement('a');
    termsOfUseLink.href = '#';
    termsOfUseLink.textContent = 'Terms of Use';
    footerBottom.appendChild(termsOfUseLink);
    
    container.appendChild(footerBottom);
    footer.appendChild(container);
    document.body.appendChild(footer);
});
const content7 = document.createElement('div');
content7.classList.add('content-7');

const h1ShopTrendingLook = document.createElement('h1');
h1ShopTrendingLook.classList.add('shop-trending-look');
h1ShopTrendingLook.textContent = 'SHOP TRENDING LOOK';
content7.appendChild(h1ShopTrendingLook);

const h2BlackCasual = document.createElement('h2');
h2BlackCasual.classList.add('black-casual');
h2BlackCasual.textContent = 'Black Casual';
content7.appendChild(h2BlackCasual);

const shopNowButton = document.createElement('button');
shopNowButton.classList.add('shop-now-btn');
shopNowButton.textContent = 'SHOP NOW';
content7.appendChild(shopNowButton);
document.body.appendChild(content7);

// content8
const content8 = document.createElement('div');
content8.classList.add('content-8');

const containerContent8 = document.createElement('div');
containerContent8.classList.add('container-content8');
content8.appendChild(containerContent8);

for (let i = 1; i <= 3; i++) {
    const img = document.createElement('img');
    img.classList.add(`img-content8-${i}`);
    img.src = `content8-${i}.jpg`;
    containerContent8.appendChild(img);
}

document.body.appendChild(content8);

// content9
const content9 = document.createElement('div');
content9.classList.add('content-9');

const containerContent9 = document.createElement('div');
containerContent9.classList.add('container-content9');
content9.appendChild(containerContent9);

const h1Content9 = document.createElement('h1');
h1Content9.textContent = 'SHOP THE LOOK';
containerContent9.appendChild(h1Content9);

const h2Content9 = document.createElement('h2');
h2Content9.textContent = 'Spring Collection';
containerContent9.appendChild(h2Content9);

const shopNowButton9 = document.createElement('button');
shopNowButton9.classList.add('shop-now-btn9');
shopNowButton9.textContent = 'SHOP NOW';
containerContent9.appendChild(shopNowButton9);

document.body.appendChild(content9);

// content10
const content10 = document.createElement('div');
content10.classList.add('content-10');

const containerContent10 = document.createElement('div');
containerContent10.classList.add('container-content10');
content10.appendChild(containerContent10);

for (let i = 1; i <= 4; i++) {
    const img = document.createElement('img');
    img.classList.add(`img-content10-${i}`);
    img.src = `content10-${i}.jpg`;
    containerContent10.appendChild(img);
}

document.body.appendChild(content10);
