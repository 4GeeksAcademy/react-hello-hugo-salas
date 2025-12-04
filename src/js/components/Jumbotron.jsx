export default function Jumbotron() {
    return (
        <div className="container-fluid">
            <section
                className="text-center text-dark d-flex flex-column justify-content-center align-items-center"
                style={{ "background": "url('https://picsum.photos/800') center center / cover no-repeat", "height": "30vh" }}>


                <div className="bg-white bg-opacity-75 py-3 px-4 mb-2 w-100 rounded">
                    <h1 className="fw-bold display-4 mb-0">One Page Wonder</h1>
                </div>

                <div className="bg-white bg-opacity-75 py-2 px-4 w-100 rounded">
                    <h2 className="fw-semibold display-6 mb-0">Will Knock Your Socks Off</h2>
                </div>
            </section>
        </div>
    )
}