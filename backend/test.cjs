let { getCookie, igApi } = require("insta-fetcher");

(async () => {
    try {
        let cookie = await getCookie("stud_ymeteial", "farzie@890")

        if (cookie) {
            console.log(cookie);
            let ig = new igApi(cookie)
            console.log(ig);

            ig.fetchUser("i.farzie").then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })

        }

    } catch (error) {
        console.log(error);

    }

    //     let ig = new igApi(cookie)
    //     console.log(ig);

    //     ig.fetchUser("i.farzie").then((res) => {
    //         console.log(res);
    //     }) 
}
)()