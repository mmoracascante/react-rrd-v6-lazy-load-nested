import { ErrorMessage, Field, useField } from 'formik'

interface Props {
    name: string
    label?: string
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    [x: string]: any
}


export const MyTextInput = ({ label, ...props }: Props) => {

    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            <ErrorMessage name={props.name} component='span' />
        </>
    )
}