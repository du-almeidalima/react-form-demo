import React, { ChangeEvent, memo } from 'react';

export type OptionalForm = {
    newsLetter: boolean;
    gender: 'F' | 'M';
}

export type OptionalProps = {
    values: OptionalForm;
    onChange: (section: 'optional', onChange: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const Optional = memo<OptionalProps>(({
                                                           values,
                                                           onChange
                                                       }) => {

    return (
        <fieldset>
            <legend>Optional:</legend>

            <label htmlFor="street">Receive News Letter: </label>
            <input type="checkbox"
                   name="newsLetter"
                   checked={values.newsLetter}
                   onChange={onChange}
            />

            <label>Gender: </label>
            <label htmlFor="gender" style={{marginLeft: 0}}>F:
                <input type="radio"
                       name="gender"
                       id="female"
                       checked={values.gender === 'F'}
                       value="F"
                       onChange={onChange}
                />
            </label>
            <label htmlFor="gender">M:
                <input type="radio"
                       name="gender"
                       id="male"
                       checked={values.gender === 'M'}
                       value="M"
                       onChange={onChange}
                />
            </label>

        </fieldset>
    );
});
