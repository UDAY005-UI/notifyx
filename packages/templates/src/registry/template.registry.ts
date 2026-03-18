import { welcomeEmail } from "../channels/email/welcome.email";
import { otpEmail } from "../channels/email/otp.email";
import { passwordResetEmail } from "../channels/email/password-reset.email";

import { otpSMS } from "../channels/sms/otp.sms";
import { alertSMS } from "../channels/sms/alert.sms";

import { genericPush } from "../channels/push/generic.push";
import { alertPush } from "../channels/push/alert.push";

export const TEMPLATE_REGISTRY = {

  welcome_email: welcomeEmail,
  otp_email: otpEmail,
  password_reset_email: passwordResetEmail,

  otp_sms: otpSMS,
  alert_sms: alertSMS,

  generic_push: genericPush,
  alert_push: alertPush,
};