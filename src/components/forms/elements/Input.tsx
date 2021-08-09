/* Core */
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export const Input: FC<IPropTypes> = (props) => {
    let input = <input
        placeholder = { props.placeholder } type = { props.type }
        { ...props.register } />;

    if (props.tag === 'textarea') {
        input = <textarea placeholder = { props.placeholder } { ...props.register } />;
    }

    if (props.tag === 'select') {
        const optionsJSX = props.options?.map((option) => {
            return (
                <option key = { option.value } value = { option.value }>
                    { option.name }
                </option>
            );
        });

        input = <select { ...props.register }>{ optionsJSX }</select>;
    }

    return (
        <label>
            <div>
                { props.label } <span className = 'error-message'>{ props.error?.message }</span>
            </div>
            { input }
        </label>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};

interface IPropTypes {
    placeholder?: string;
    type?: string;
    tag?: string;
    label: string;
    register: UseFormRegisterReturn;
    error?: {
        message?: string;
    };
    options?: { value: string; name: string }[];
}
