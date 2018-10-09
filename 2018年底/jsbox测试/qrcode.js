$photo.pick({
    handler: function (resp) {
        let image = resp.image
        let text = $qrcode.decode(image)
        console.log(text)
    }
})