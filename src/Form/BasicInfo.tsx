import React, {ChangeEvent, memo} from 'react';

export type BasicInfoForm = {
    name: string;
    email: string;
}

export type BasicInfoProps = {
    values: BasicInfoForm;
    onChange: (section: 'basicInfo', onChange: ChangeEvent<HTMLInputElement>) => void;
}

export const BasicInfo: React.FC<BasicInfoProps> = memo<BasicInfoProps>(({
                                                                             values,
                                                                             onChange
                                                                         }) => {

    return (
        <fieldset>
            <legend>Basic Info:</legend>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={values.name} onChange={onChange}/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={values.email} onChange={onChange}/>
        </fieldset>
    );
});

// export const MemoizedBasicInfo = memo(BasicInfo)
