const apiURL = 'https://intern-greenwich-be.cyclic.app'

export const environment = {
    production: true,
    FOODS_URL: `${apiURL}/api/foods`,
    FOODS_TAGS_URL: `${apiURL}/api/foods/tags`,
    FOODS_BY_SEARCH_URL: `${apiURL}/api/foods/search/`,
    FOODS_BY_TAG_URL: `${apiURL}/api/foods/tag/`,
    FOOD_BY_ID_URL: `${apiURL}/api/foods/`,

    USER_LOGIN_URL: `${apiURL}/api/users/login`,
    USER_REGISTER_URL: `${apiURL}/api/users/register`,

    ORDER_CREATE_URL: `${apiURL}/api/orders/create`,
    ORDER_TRACK_URL: `${apiURL}/api/orders/track/`,
    ORDER_HISTORY_URL: `${apiURL}/api/orders/history/`,

    PAYMENT_URL: 'https://payment-api-pi.vercel.app/api/payment',

    // ORDERS_URL: '/api/orders',
    // ORDER_NEW_FOR_CURRENT_USER_URL: '/api/orders/newOrderForCurrentUser',
    // ORDER_PAY_URL: '/api/orders/pay',

    FOODS_CREATE: `${apiURL}/api/foods`,
    FOODS_UPDATE: `${apiURL}/api/foods/`,
    FOODS_DELETE: `${apiURL}/api/foods/`,

    GET_ORDER: `${apiURL}/api/orders`
};
