import React, { useEffect, useState } from "react";
import { ContactsBox, UserContacts } from "../styles";

import { FaEnvelope, FaRegAddressCard, FaLink, FaPhone } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const Contacts = () => {

    const { id }: any = useParams();

    const [contact, setContact ] = useState<any>([]);

    const url = "/fake_API/db.json";

    const getContactData = async () => {
        const response = await axios.get(url);
        const data = response.data.users;
        setContact(data[id]);
    }

    useEffect(() => {
        getContactData();
    }, [])

    return (
        <UserContacts>
            <ContactsBox contactsBg="var(--bg-dotted), var(--email-gradient-bg)">
                <div className="left">
                    e-mail
                </div>
                <div className="right">
                    <FaEnvelope size="20" />
                    <p className="get-link">{contact.email}</p>
                </div>
            </ContactsBox>
            <ContactsBox contactsBg="var(--bg-dotted), var(--address-gradient-bg)">
                <div className="left">
                    endereço
                </div>
                <div className="right">
                    <FaRegAddressCard size="20" />
                    <p>{contact.address}</p>
                </div>
            </ContactsBox>
            <ContactsBox contactsBg="var(--bg-dotted), var(--website-gradient-bg)">
              <div className="left">
                website
              </div>
              <div className="right">
                <FaLink size="20" />
                <p className="get-link">{contact.website}</p>
              </div>
            </ContactsBox>

            <ContactsBox contactsBg="var(--bg-dotted), var(--phone-gradient-bg)">
              <div className="left">
                telefone
              </div>
              <div className="right">
                <FaPhone size="20" />
                <p>{contact.phone}</p>
              </div>
            </ContactsBox>
        </UserContacts>
    )
}

export default Contacts;