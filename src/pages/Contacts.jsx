import PersonBio from "../components/PersonBio.jsx";

export default function Contacts() {
    const data = [
        {
            "imgUrl": "img/portrait/chlebo.png",
            "name": "Chlebo",
            "quote": "Behold, the cob of consequences!",
            "email": "samo.chlebo@gmail.com",
            "phoneNumbers": ["+421 904 919 739", "+420 733 533 623"]
        }
    ]

    return (
        <main>
            {
                data.map((contact) => {
                        return (<PersonBio contact={contact}/>)
                    }
                )
            }
        </main>
    )
}