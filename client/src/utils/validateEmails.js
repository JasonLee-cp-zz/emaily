const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => !regex.test(email)); //return only invalid emails to inform users their typos

  if (invalidEmails.length) {
    return `Invalid Emails Detected: ${invalidEmails}`;
  }

  return;
};
