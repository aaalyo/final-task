
function Team() {

    const team = [{
        name: "George Monbiot",
        photo: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/contributor/2015/7/9/1436429139792/George-Monbiot.jpg?width=140&height=140&quality=85&auto=format&fit=max&s=9f763842e368450a534bef9f7d6ecba2",
    },
    {
        name: "Aditya Chakrabortty",
        photo: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/contributor/2014/9/24/1411565174256/Aditya-Chakrabortty.jpg?width=140&height=140&quality=85&auto=format&fit=max&s=dc4860dee5c6c8b5560489b5ab522e7d"
    },
    {
        name: "Marina Hyde",
        photo: "https://i.guim.co.uk/img/uploads/2018/01/10/Marina-Hyde.jpg?width=140&height=140&quality=85&auto=format&fit=max&s=f978fec8c4e3e2c776d8383328145ce7"
    },
    {
        name: "Zoe Williams",
        photo: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/4/17/1397749341828/ZoeWilliams.jpg?width=140&height=140&quality=85&auto=format&fit=max&s=ed6ead49082539c9f1a8279c6af1b049"
    }
    ];

    const authors = team.map((author, index) => {
        return (
            <div key={index} className="card col-4 col-md-2 m-3 bg-warning">
                <img src={author.photo} className="card-img-top mt-2" alt="man" />
                <div className="card-body">
                    <p className="card-text text-center text-dark fw-bold fst-italic">{author.name}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="col border border-top-0">
            <div className="row mt-3 justify-content-between">
                {authors}
            </div>
        </div>
    )
}

export default Team