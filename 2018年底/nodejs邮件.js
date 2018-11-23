'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        // service: 'qq',
        // 将发送服务器的端口号修改成465或587
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'jinhengyu666@qq.com', // generated ethereal user
            pass: 'ziczgtshjihgebfe' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'jinhengyu666@qq.com', // sender address
        to: '13805177441@163.com', // list of receivers
        subject: 'this is from nodejs', // Subject line
        // text: 'Hello world?', // plain text body
        html: '<b>Hello , this mail is from nodemailer module</b>', // html body
        // attachments: [{
        //     filename: '',
        //     path: ''
        // }]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});