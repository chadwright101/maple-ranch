"use server";

const adventuresEmail = process.env.SMTP_ADVENTURES_EMAIL;
const adventuresPhone = process.env.CONTACT_ADVENTURES_PHONE;
const restaurantEmail = process.env.SMTP_RESTAURANT_EMAIL;
const restaurantPhone = process.env.CONTACT_RESTAURANT_PHONE;
const generalEmail = process.env.SMTP_GENERAL_EMAIL;
const generalPhone = process.env.CONTACT_GENERAL_PHONE;

export const fetchContactData = async () => {
  return {
    adventuresEmail,
    adventuresPhone,
    restaurantEmail,
    restaurantPhone,
    generalEmail,
    generalPhone,
  };
};
