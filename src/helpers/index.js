const client_id = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET;
const base = "https://api-m.paypal.com";

export const generateAccessToken = async () => {
  try {
    if (!client_id || !client_secret) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(client_id + ":" + client_secret).toString(
      "base64"
    );
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
export const createOrder = async (price) => {
  // use the cart information passed from the front-end to calculate the purchase unit details
  console.log(
    "shopping cart information passed from the frontend createOrder() callback:",
    price
  );

  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: price,
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
export const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
};

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

export function generateOrderId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let orderId = "";
  for (let i = 0; i < 10; i++) {
    orderId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return orderId;
}

export const createMyOrder = (orderedItems) => {
  const {
    selectedOption,
    selectedToppings,
    selectedExtra,
    selectedType,
    selectedDressing,
    selectedSauce,
    totalPrice,
    quantity,
    itemName,
  } = orderedItems;
  const order = {};

  // Check each property and add to the order object if it's not null or an empty array
  if (selectedOption !== null) {
    order.selectedOption = selectedOption;
  }
  if (selectedToppings.length > 0) {
    order.selectedToppings = selectedToppings;
  }
  if (selectedExtra.length > 0) {
    order.selectedExtra = selectedExtra;
  }
  if (selectedType !== null) {
    order.selectedType = selectedType;
  }
  if (selectedDressing !== null) {
    order.selectedDressing = selectedDressing;
  }
  if (selectedSauce !== null) {
    order.selectedSauce = selectedSauce;
  }

  // Add itemName and totalPrice to the order object
  order.itemName = itemName;
  order["quantity"] = quantity;
  order.totalPrice = totalPrice;
  order["order_id"] = generateOrderId();

  return order;
};
