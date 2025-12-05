export default function Jumbotron() {
    return (
        <div className="jumbotron position-relative p-0">
            <section
                className="text-center text-dark d-flex flex-column justify-content-center align-items-center"
                style={{ "background": "url('https://picsum.photos/800') center center / cover no-repeat", "height": "30vh" }}>
            </section>

            <a className="btn btn-primary position-absolute bottom-0 start-0 m-3" href="#">
                Find out now!
            </a>
        </div>
    )
}