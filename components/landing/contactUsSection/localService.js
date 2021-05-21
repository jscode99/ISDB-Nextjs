//service
import { fetchService } from "../../../services/fetchService";
import { inpuChangeHandler } from "../../../services/inputService";
import { emailValidator } from "../../../services/validationService";
//constant
import { CONST } from "../../../constant";

export const subscribeChangeHandler = (
  e,
  setEmailValidation,
  setEmailValue
) => {
  let value = inpuChangeHandler(e);
  setEmailValue(value);
  let isCorrectEmail = emailValidator(value);
  setEmailValidation(isCorrectEmail);
};

export const onClickSubscribeHandler = async (
  emailValue,
  setEmailValue,
  setEmailValidation,
  openNotification,
  openSuccessNotification
) => {
  let isCorrectEmail = emailValidator(emailValue);
  if (isCorrectEmail) {
    let url = process.env.BASE_URL + process.env.PATH.NEWSLETTER;
    let body = { NewsletterEmail: emailValue };
    let response = await fetchService(url, CONST.API_METHOD.POST, body);
    if (response.id) {
      openSuccessNotification({
        title: `Success ${response.NewsletterEmail}`,
        description: "We will update you at the latest",
      });
      setEmailValue("");
      setEmailValidation(0);
    } else
      openNotification({
        title: "Sorry! Something went wrong.",
        description: "Can you please try it again.",
      });
  } else
    openNotification({
      title: "Enter correct Email Address",
      description: "Formate : abc@xyz.com",
    });
};
