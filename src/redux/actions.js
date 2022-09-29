import {
  MOBILE_PHONE,
  EMAIL,
  PASSWORD,
  RETYPE_PASSWORD,
  FIRST_NAME,
  LAST_NAME,
  SEX,
  BIRTHDAY,
  OCEAN,
  HOBBY,
} from "./types";

export function saveMobilePhone(mobileInfo) {
  return {
    type: MOBILE_PHONE,
    number: mobileInfo,
  };
}

export function saveEmail(EmailInfo) {
  return {
    type: EMAIL,
    email: EmailInfo,
  };
}

export function savePassword(PasswordInfo) {
  return {
    type: PASSWORD,
    password: PasswordInfo,
  };
}

export function saveRetypePassword(retypePasswordInfo) {
  return {
    type: RETYPE_PASSWORD,
    password2: retypePasswordInfo,
  };
}

export function saveFirstName(firstNameInfo) {
  return {
    type: FIRST_NAME,
    firstname: firstNameInfo,
  };
}

export function saveLastName(lastName) {
  return {
    type: LAST_NAME,
    lastname: lastName,
  };
}

export function saveSex(sexInfo) {
  return {
    type: SEX,
    sex: sexInfo,
  };
}

export function saveBirtday(birtdayInfo) {
  return {
    type: BIRTHDAY,
    birtday: birtdayInfo,
  };
}

export function saveOcean(oceanInfo) {
  return {
    type: OCEAN,
    ocean: oceanInfo,
  };
}

export function saveHobby(hobbyInfo) {
  return {
    type: HOBBY,
    hobby: hobbyInfo,
  };
}
