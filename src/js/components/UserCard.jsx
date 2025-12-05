// UserCard.jsx
export default function UserCard() {
    return (
        <div className="card">
            <img src="https://picsum.photos/400" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">Find out now!</a>
            </div>
        </div>
    );
}
