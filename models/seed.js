const Cocktail = require('./Cocktail');
const Spirit = require('./Spirit');
const Mixer = require('./Mixer')

const newCocktails = [
    {
        name: 'Martini',
        glass: 'Martini',
        image: 'https://lh3.googleusercontent.com/proxy/lL_UjZuxgShiC4NpnEbv6cPmv4MU0VhD2MqpiNoDRyLeWY_SJ_y2HzyUSR9iuecPsYMa0F0vWrEsiHr5-G3Ieg-p_JtLEJ8',
        ingredients: ['2oz gin', '1/8oz dry vermouth', '3 olives'],
        recipe: 'Stir gin, and vermouth with ice, until very cold. Strain into martini glass, and garnish with 3 olives on a pick.',
    },
    {
        name: 'Old Fashioned',
        glass: 'Rocks',
        image: 'https://i.pinimg.com/originals/37/e3/cc/37e3cce8727b2eea44dda32070d5a847.jpg',
        ingredients: ['1 1/2oz bourbon/rye whiskey', '2 dashes Angostura Bitters', '1/2oz simple syrup', 'orange wedge', 'cherry'],
        recipe: 'Muddle orange, cherry, simple syrup, and bitters together in glass. Add whiskey, fill with ice, and swirl.',
    },
    {
        name: 'Tequila Sunrise',
        glass: 'Highball',
        image: 'https://www.rockysarena.com/wp-content/uploads/2018/10/tequila-sunrise-cocktails.jpg',
        ingredients: ['1oz tequila', '2oz orange juice', '1/2oz grenadine', 'orange wheel', 'cherry'],
        recipe: 'Fill glass with ice, and add tequila, then orange juice. Drizzle grenadine around the edge, and garnish with the cherry pinned to the orange.',
    },
]

const newSpirits = [
    {
        typeOf: 'vodka',
        image: 'https://products3.imgix.drizly.com/ci-ketel-one-vodka-49bebfb14cb5acfb.jpeg?auto=format%2Ccompress&fm=jpg&q=20',
        description: 'A clear, neutral spirit distilled from potatoes, or other grains, typically around 80 proof.',
    },
    {
        typeOf: 'gin',
        image: 'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/aag_1000x.jpg?v=1542763647',
        description: 'A clear, herbal spirit, heavily flavored with juniper berries, sometimes with citrus notes, distilled from grains, herbs, and juniper berries, typically around 80 proof.',
    },
    {
        typeOf: 'rum',
        image: 'https://boydandblair.com/wp-content/uploads/2018/06/bottle_rum.jpg',
        description: 'A spirit of varying appearance, from clear to very dark brown, with flavors running the gamut from neutral, or slightly sweet, to burnt molasses, distilled from sugar cane, typically around 80 proof.',
    },
    {
        typeOf: 'tequila',
        image: 'https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/1626/images/9550/casa-noble-crystal__77442.1523558041.1280.1280.jpg?c=2',
        description: 'A spirit ranging from clear to golden amber, with spicy to bitter vegetal flavors, typically around 80 proof.',
    },
    {
        typeOf: 'whiskey',
        image: 'https://fourrosesbourbon.com/wp-content/uploads/2019/02/18FRB1407_New_SmallBatchSelect_COLA_FrontFIN.jpg',
        description: 'A caramel colored spirit of varying shade, ranging through sweet, spicey, and smoky flavors sometimes with vanilla, or citrus notes, typically around 80 proof.',
    },
    {
        typeOf: 'brandy',
        image: 'https://www.wineofthemonth.co.za/5140-thickbox_default/tokara-10yr-potstill-brandy.jpg',
        description: 'A spirit of varying caramel colors, that is sweeter than most, and often tastes of flowers and fruits, typically around 80 proof.',
    },
]

const newMixers = [
    {
        name: 'grenadine',
        image: 'https://cdn.minibardelivery.com/products/13675/product/92930b.jpg',
        information: 'A syrup made from pomegranate juice sweetened with sugar, and flavored with a small amount of lemon juice, and orange-flower water.',
    },
    {
        name: 'sweetened lime juice (SLJ)',
        image: 'https://cdn.shopify.com/s/files/1/0840/1021/products/RO073_grande.jpg?v=1571439056',
        information: 'A tart syrup typically made from lime juice sweetened with sugar, and given an extra bite with lime zest.',
    },
    {
        name: 'sour mix',
        image: 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00725400000176/eadf9dafb1bf7183faed722f87cf5b3e_large.png&width=512&type=webp&quality=40',
        information: 'A cocktail mixer standardly made of equal parts lemon juice, lime juice, and symple syrup, often shaken vigorously with ice to produce a pearly-white liquid with a pronounced flavor.',
    },
    {
        name: 'simple syrup',
        image: 'https://www.meijer.com/content/dam/meijer/product/0074/41/6020/04/0074416020045_0_A1C1_0600.png',
        information: 'Traditionally made of equal parts water, and sugar, however, the ratio can be adjusted for a thicker, sweeter syrup, or the reverse, according to taste.',
    },
]

Cocktail.deleteMany().then(() => {
    return Spirit.deleteMany();
}).then(() => {
    return Mixer.deleteMany();
}).then(() => {
    return Cocktail.create(newCocktails);
}).then(() => {
    return Spirit.create(newSpirits);
}).then(() => {
    return Mixer.create(newMixers);
}).then(() => {
    console.log('Database seeded');
});