import SimpleMap from "./Map";

function Contacts() {

    return (
        <div className="col border border-top-0">
            <div className="row mt-3 mb-5">
                <div className="col-12 col-md-6">
                    <SimpleMap />
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-secondary">
                        Please address written correspondence to:.
                    </p>
                    <p className="fs-4">
                        The Guardian, Kings Place, 90 York Way, London, N1 9GU, United Kingdom
                    </p>
                    <p className="text-secondary">
                        The switchboard number for the London office and the Observer website is:
                    </p>
                    <p>
                        <span className="fw-bold">020 3353 2000</span> (or if dialling from overseas: <span className="fw-bold">+44 20 3353 2000</span>).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contacts