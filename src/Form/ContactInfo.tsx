import React, {ChangeEvent, memo} from 'react';
import {OptionalProps} from "./Optional";

export type ContactForm = {
    street: string;
    city: string;
    country: string;
}

export type ContactProps = {
    values: ContactForm;
    onChange: (section: 'contact', onChange: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const Contact: React.FC<ContactProps> = memo<ContactProps>(({
                                                    values,
                                                    onChange
                                                }) => {

    const _handleContactFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChange('contact', e)
    }

    return (
        <fieldset>
            <legend>Contact:</legend>

            <label htmlFor="street">Street: </label>
            <input type="text" id="street" name="street" value={values.street} onChange={_handleContactFormChange}/>

            <label htmlFor="city">City: </label>
            <input type="text" id="city" name="city" value={values.city} onChange={_handleContactFormChange}/>

            <label htmlFor="country">Country: </label>
            <select id="country" name="country" value={values.country} onChange={_handleContactFormChange}>
                <option value="Alaska">Alaska</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Egypt">Egypt</option>
            </select>
        </fieldset>
    );
});
