import nodemailer from "nodemailer";
import { google, Auth } from "googleapis";

const getMailerConfig = () => {
  return {
    MAILING_SERVICE_CLIENT_ID: process.env.MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET: process.env.MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN: process.env.MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS: process.env.SENDER_EMAIL_ADDRESS,
    OAUTH_PLAYGROUND: process.env.OAUTH_PLAYGROUND,
  };
};

const oauthClient = new google.auth.OAuth2(
  getMailerConfig().MAILING_SERVICE_CLIENT_ID,
  getMailerConfig().MAILING_SERVICE_CLIENT_SECRET,
  getMailerConfig().OAUTH_PLAYGROUND
);

// send mail
const sendEmail = async (
  email: string,
  option?: any,
  url?: string,
  txt?: string
) => {
  oauthClient.setCredentials({
    refresh_token: getMailerConfig().MAILING_SERVICE_REFRESH_TOKEN,
  });

  const ACCESS_TOKEN = await oauthClient.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: getMailerConfig().SENDER_EMAIL_ADDRESS,
      clientId: getMailerConfig().MAILING_SERVICE_CLIENT_ID,
      clientSecret: getMailerConfig().MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: getMailerConfig().MAILING_SERVICE_REFRESH_TOKEN,
    },
  });

  // Mail tuyển sinh thành công
  const enrolledSuccessMail = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="und"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>New Template</title> <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]--> <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml>
  <![endif]--> <!--[if !mso]><!-- --><link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"> <!--<![endif]--><style type="text/css">.rollover:hover .rollover-first { max-height:0px!important; display:none!important;}.rollover:hover .rollover-second { max-height:none!important; display:inline-block!important;}.rollover div { font-size:0px;}u + .body img ~ div div { display:none;}#outlook a { padding:0;}span.MsoHyperlink,span.MsoHyperlinkFollowed { color:inherit; mso-style-priority:99;}a.es-button { mso-style-priority:100!important; text-decoration:none!important;} a[x-apple-data-detectors] { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important;}
  .es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all;}.es-button-border:hover > a.es-button { color:#ffffff!important;}@media only screen and (max-width:600px) {h1 { font-size:30px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:left } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left }
   .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important }
   .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important }
   .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important; display:table-row!important } tr.es-desk-hidden { display:table-row!important }
   table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } }</style>
   </head> <body class="body" bis_status="ok" data-new-gr-c-s-loaded="14.1137.0" style="width:100%;height:100%;padding:0;Margin:0"><div dir="ltr" class="es-wrapper-color" lang="und" style="background-color:#2E0249"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#2E0249"></v:fill> </v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#2E0249"><tr><td valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr>
  <td align="center" style="padding:0;Margin:0;background-size:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:#ffffff" bgcolor="#ffffff"><table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px;border-width:0"><tr>
  <td align="left" style="Margin:0;padding-top:40px;padding-right:20px;padding-bottom:40px;padding-left:20px;border-radius:20px;background-image:url(https://ebhisyy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png);background-repeat:no-repeat;background-position:center center" background="https://ebhisyy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr>
  <td align="center" class="es-m-txt-l" style="padding:0;Margin:0"><h1 style="Margin:0;font-family:'Krona One', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:40px;font-style:normal;font-weight:bold;line-height:48px;color:#2E0249">You have a new message!</h1> </td></tr><tr><td align="center" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:30px;padding-bottom:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:14px"><img src="https://ebhisyy.stripocdn.email/content/guids/CABINET_7f661c510918550caee5b218f4fcca74e3008d1df27067e4d27f814cb3c0cba5/images/610e34d74c178bd24998a886_39.png" alt="Christina Scott" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:20px" width="315" title="Christina Scott"></a></td></tr><tr>
  <td align="center" class="es-m-txt-l" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:'Krona One', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:bold;line-height:29px;color:#2E0249">You have successfully <br>applied for enrollment</h2></td></tr> <tr><td align="center" class="es-m-p0r es-m-p0l es-m-txt-l" style="Margin:0;padding-top:20px;padding-right:15px;padding-bottom:30px;padding-left:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;line-height:21px;letter-spacing:0;color:#666666;font-size:14px">The admissions committee will email <br>you back as soon as possible.</p></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>`;

  const enrolledFailedMail = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="und"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>New Template</title> <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]--> <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml>
  <![endif]--> <!--[if !mso]><!-- --><link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"> <!--<![endif]--><style type="text/css">.rollover:hover .rollover-first { max-height:0px!important; display:none!important;}.rollover:hover .rollover-second { max-height:none!important; display:inline-block!important;}.rollover div { font-size:0px;}u + .body img ~ div div { display:none;}#outlook a { padding:0;}span.MsoHyperlink,span.MsoHyperlinkFollowed { color:inherit; mso-style-priority:99;}a.es-button { mso-style-priority:100!important; text-decoration:none!important;} a[x-apple-data-detectors] { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important;}
  .es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all;}.es-button-border:hover > a.es-button { color:#ffffff!important;}@media only screen and (max-width:600px) {h1 { font-size:30px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:left } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left }
   .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important }
   .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important }
   .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important; display:table-row!important } tr.es-desk-hidden { display:table-row!important }
   table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } }</style>
   </head> <body class="body" bis_status="ok" data-new-gr-c-s-loaded="14.1137.0" style="width:100%;height:100%;padding:0;Margin:0"><div dir="ltr" class="es-wrapper-color" lang="und" style="background-color:#2E0249"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#2E0249"></v:fill> </v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#2E0249"><tr><td valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important"><tr>
  <td align="center" style="padding:0;Margin:0;background-size:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:#ffffff" bgcolor="#ffffff"><table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px;border-width:0"><tr>
  <td align="left" style="Margin:0;padding-top:40px;padding-right:20px;padding-bottom:40px;padding-left:20px;border-radius:20px;background-image:url(https://ebhisyy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png);background-repeat:no-repeat;background-position:center center" background="https://ebhisyy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr>
  <td align="center" class="es-m-txt-l" style="padding:0;Margin:0"><h1 style="Margin:0;font-family:'Krona One', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:40px;font-style:normal;font-weight:bold;line-height:48px;color:#2E0249">You have a new message!</h1> </td></tr><tr><td align="center" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:30px;padding-bottom:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:14px"><img src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/60838286dad40d640b48c348_23.png" alt="Christina Scott" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:20px" width="315" title="Christina Scott"></a></td></tr><tr>
  <td align="center" class="es-m-txt-l" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:'Krona One', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:bold;line-height:29px;color:#2E0249">Failed enrollment <br>application!</h2></td></tr> <tr><td align="center" class="es-m-p0r es-m-p0l es-m-txt-l" style="Margin:0;padding-top:20px;padding-right:15px;padding-bottom:30px;padding-left:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;line-height:21px;letter-spacing:0;color:#666666;font-size:14px">Sorry! Please try again to re-enrollment.</p></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>`;

  const mailOptions = {
    from: getMailerConfig().SENDER_EMAIL_ADDRESS,
    to: email,
    subject: "👋 DTU Admission Department 👋",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      dir="ltr"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      lang="en"
    >
      <head>
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title>New Template</title>
        <!--[if (mso 16)
          ]><style type="text/css">
            a {
              text-decoration: none;
            }
          </style><!
        [endif]-->
        <!--[if gte mso 9
          ]><style>
            sup {
              font-size: 100% !important;
            }
          </style><!
        [endif]-->
        <!--[if gte mso 9
          ]><xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <!--[if !mso]><!-- -->
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <!--<![endif]-->
        <style type="text/css">
          .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
          }
          .rollover:hover .rollover-second {
            max-height: none !important;
            display: inline-block !important;
          }
          .rollover div {
            font-size: 0px;
          }
          u + .body img ~ div div {
            display: none;
          }
          #outlook a {
            padding: 0;
          }
          span.MsoHyperlink,
          span.MsoHyperlinkFollowed {
            color: inherit;
            mso-style-priority: 99;
          }
          a.es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
          }
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
          .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
          }
          .es-button-border:hover > a.es-button {
            color: #ffffff !important;
          }
          @media only screen and (max-width: 600px) {
            .es-m-p0r {
              padding-right: 0px !important;
            }
            .es-m-p0l {
              padding-left: 0px !important;
            }
            *[class="gmail-fix"] {
              display: none !important;
            }
            p,
            a {
              line-height: 150% !important;
            }
            h1,
            h1 a {
              line-height: 120% !important;
            }
            h2,
            h2 a {
              line-height: 120% !important;
            }
            h3,
            h3 a {
              line-height: 120% !important;
            }
            h4,
            h4 a {
              line-height: 120% !important;
            }
            h5,
            h5 a {
              line-height: 120% !important;
            }
            h6,
            h6 a {
              line-height: 120% !important;
            }
            h1 {
              font-size: 30px !important;
              text-align: center;
            }
            h2 {
              font-size: 24px !important;
              text-align: center;
            }
            h3 {
              font-size: 20px !important;
              text-align: left;
            }
            h4 {
              font-size: 24px !important;
              text-align: left;
            }
            h5 {
              font-size: 20px !important;
              text-align: left;
            }
            h6 {
              font-size: 16px !important;
              text-align: left;
            }
            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
              font-size: 30px !important;
            }
            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
              font-size: 24px !important;
            }
            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
              font-size: 20px !important;
            }
            .es-header-body h4 a,
            .es-content-body h4 a,
            .es-footer-body h4 a {
              font-size: 24px !important;
            }
            .es-header-body h5 a,
            .es-content-body h5 a,
            .es-footer-body h5 a {
              font-size: 20px !important;
            }
            .es-header-body h6 a,
            .es-content-body h6 a,
            .es-footer-body h6 a {
              font-size: 16px !important;
            }
            .es-menu td a {
              font-size: 14px !important;
            }
            .es-header-body p,
            .es-header-body a {
              font-size: 14px !important;
            }
            .es-content-body p,
            .es-content-body a {
              font-size: 14px !important;
            }
            .es-footer-body p,
            .es-footer-body a {
              font-size: 14px !important;
            }
            .es-infoblock p,
            .es-infoblock a {
              font-size: 12px !important;
            }
            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3,
            .es-m-txt-c h4,
            .es-m-txt-c h5,
            .es-m-txt-c h6 {
              text-align: center !important;
            }
            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3,
            .es-m-txt-r h4,
            .es-m-txt-r h5,
            .es-m-txt-r h6 {
              text-align: right !important;
            }
            .es-m-txt-j,
            .es-m-txt-j h1,
            .es-m-txt-j h2,
            .es-m-txt-j h3,
            .es-m-txt-j h4,
            .es-m-txt-j h5,
            .es-m-txt-j h6 {
              text-align: justify !important;
            }
            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3,
            .es-m-txt-l h4,
            .es-m-txt-l h5,
            .es-m-txt-l h6 {
              text-align: left !important;
            }
            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
              display: inline !important;
            }
            .es-m-txt-r .rollover:hover .rollover-second,
            .es-m-txt-c .rollover:hover .rollover-second,
            .es-m-txt-l .rollover:hover .rollover-second {
              display: inline !important;
            }
            .es-m-txt-r .rollover div,
            .es-m-txt-c .rollover div,
            .es-m-txt-l .rollover div {
              line-height: 0 !important;
              font-size: 0 !important;
            }
            .es-spacer {
              display: inline-table;
            }
            a.es-button,
            button.es-button {
              font-size: 18px !important;
              line-height: 120% !important;
            }
            a.es-button,
            button.es-button,
            .es-button-border {
              display: inline-block !important;
            }
            .es-m-fw,
            .es-m-fw.es-fw,
            .es-m-fw .es-button {
              display: block !important;
            }
            .es-m-il,
            .es-m-il .es-button,
            .es-social,
            .es-social td,
            .es-menu {
              display: inline-block !important;
            }
            .es-adaptive table,
            .es-left,
            .es-right {
              width: 100% !important;
            }
            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
              width: 100% !important;
              max-width: 600px !important;
            }
            .adapt-img {
              width: 100% !important;
              height: auto !important;
            }
            .es-mobile-hidden,
            .es-hidden {
              display: none !important;
            }
            .es-desk-hidden {
              width: auto !important;
              overflow: visible !important;
              float: none !important;
              max-height: inherit !important;
              line-height: inherit !important;
            }
            tr.es-desk-hidden {
              display: table-row !important;
            }
            table.es-desk-hidden {
              display: table !important;
            }
            td.es-desk-menu-hidden {
              display: table-cell !important;
            }
            .es-menu td {
              width: 1% !important;
            }
            table.es-table-not-adapt,
            .esd-block-html table {
              width: auto !important;
            }
            .es-social td {
              padding-bottom: 10px;
            }
            .h-auto {
              height: auto !important;
            }
          }
        </style>
      </head>
      <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
        <div
          dir="ltr"
          class="es-wrapper-color"
          lang="en"
          style="background-color: #2e0249"
        >
          <!--[if gte mso 9
            ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#2E0249"></v:fill> </v:background
          ><![endif]-->
          <table
            class="es-wrapper"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            role="none"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              padding: 0;
              margin: 0;
              width: 100%;
              height: 100%;
              background-repeat: repeat;
              background-position: center top;
              background-color: #2e0249;
            "
          >
            <tr>
              <td valign="top" style="padding: 0; margin: 0">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-content"
                  align="center"
                  role="none"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    width: 100%;
                    table-layout: fixed !important;
                  "
                >
                  <tr>
                    <td
                      align="center"
                      style="
                        padding: 0;
                        margin: 0;
                        background-size: initial;
                        background-attachment: initial;
                        background-origin: initial;
                        background-clip: initial;
                        background-color: #ffffff;
                      "
                      bgcolor="#ffffff"
                    >
                      <table
                        class="es-content-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                          border-width: 0;
                        "
                        role="none"
                      >
                        <tr>
                          <td
                            align="left"
                            style="
                              margin: 0;
                              padding-top: 40px;
                              padding-right: 20px;
                              padding-bottom: 40px;
                              padding-left: 20px;
                              border-radius: 20px;
                              background-image: url(https://ebhisyy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png);
                              background-repeat: no-repeat;
                              background-position: center center;
                            "
                            background="https://ebhisyy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="none"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="padding: 0; margin: 0"
                                      >
                                        <h1
                                          style="
                                            margin: 0;
                                            font-family: 'Krona One', sans-serif;
                                            mso-line-height-rule: exactly;
                                            letter-spacing: 0;
                                            font-size: 40px;
                                            font-style: normal;
                                            font-weight: bold;
                                            line-height: 48px;
                                            color: #2e0249;
                                          "
                                        >
                                          Cảm ơn bạn đã gửi đơn tuyển sinh đến
                                          Đại học Duy Tân
                                        </h1>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-top: 30px;
                                          padding-bottom: 20px;
                                          font-size: 0px;
                                        "
                                      >
                                        <a
                                          target="_blank"
                                          href="https://viewstripo.email"
                                          style="
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                          ><img
                                            src="https://ebhisyy.stripocdn.email/content/guids/CABINET_7f661c510918550caee5b218f4fcca74e3008d1df27067e4d27f814cb3c0cba5/images/610e34139c43a5bf098e3435_36.png"
                                            alt="Christina Scott"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                              border-radius: 20px;
                                            "
                                            width="225"
                                            title="Christina Scott"
                                        /></a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="padding: 0; margin: 0"
                                      >
                                        <h2
                                          style="
                                            margin: 0;
                                            font-family: 'Krona One', sans-serif;
                                            mso-line-height-rule: exactly;
                                            letter-spacing: 0;
                                            font-size: 24px;
                                            font-style: normal;
                                            font-weight: bold;
                                            line-height: 29px;
                                            color: #2e0249;
                                          "
                                        >
                                          Đơn tuyển sinh đã được gửi!
                                        </h2>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-p0r es-m-p0l es-m-txt-l"
                                        style="
                                          margin: 0;
                                          padding-top: 20px;
                                          padding-right: 15px;
                                          padding-bottom: 30px;
                                          padding-left: 15px;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                        >
                                          Họ và tên: ${option.candidate.fullName}
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                        >
                                          Ngày sinh: ${option.candidate.birthday}
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                        >
                                          CCCD: ${option.candidate.cccd}
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                        >
                                          Email: ${option.candidate.email}
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                        >
                                          Địa chỉ nhận thông báo:
                                          ${option.candidate.addressToReceiveAdmissionNotice}
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                        >
                                          Mã tuyển sinh:
                                          <b style="font-weight: bold"
                                            >${option.code}</b
                                          >
                                        </p>
                                        Chú ý: đây là mã tuyển sinh của bạn, dùng để
                                        tra cứu và cập nhật thông tin
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
    `,
  };

  await smtpTransport.sendMail(mailOptions);
};

export default sendEmail;
