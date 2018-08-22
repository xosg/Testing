let run = () => setTimeout(() => {
    console.log(`123
        456`)
    run()
    throw 'HaHa'
}, 1000);


run()