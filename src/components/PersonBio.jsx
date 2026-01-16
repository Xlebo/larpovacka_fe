import "./personBio.css"

export default function PersonBio({contact: {imgUrl, about, name, quote, email, phoneNumbers}}) {

    return (
        <div className="bio">
            {/*<img src={imgUrl} alt={name}/>*/}
            <div className="text">
                <h2>{name}</h2>
                {/*<p>{about}</p>*/}
                <p><b>Email:</b> <a href={`mailto:${email}`}>{email}</a></p>
                <p><b>Tel.č.:</b> {phoneNumbers.join(", ")}</p>
            </div>
        </div>
    )
}