import React, { ChangeEvent, memo } from 'react';

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

    const _handleBasicInfoFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange('basicInfo', e)
    }

    return (
        <fieldset>
            <legend>Basic Info:</legend>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={values.name} onChange={_handleBasicInfoFormChange}/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={values.email} onChange={_handleBasicInfoFormChange}/>
        </fieldset>
    );
});

// export const MemoizedBasicInfo = memo(BasicInfo)
