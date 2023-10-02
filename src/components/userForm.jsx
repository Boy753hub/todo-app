import React,{useRef} from 'react'
import styles from '../styles/App.module.css'
import { Form, Input , Button, FormList, PPA} from '../styles/styled';
import { useHeaderContext } from '../contexts/headerContexts';

const UserForm = ({onFormSubmit,name, lastname, desc}) => {
    const nameRef = useRef()
    const lastnameRef = useRef()
    const descRef = useRef();

    
    const {isOpen, data, changeLan} = useHeaderContext()

    const onSubmit = (e) => {
      e.preventDefault();
      if (nameRef.current.value && lastnameRef.current.value && descRef.current.value) {
        onFormSubmit(nameRef.current.value , lastnameRef.current.value, descRef.current.value);
      } else {
        console.log('Please fill in all the information');
      }
    };
  
    return (
      <PPA color={isOpen ? '#121212' : ''}>
       <div className={styles.createpage}>
        <FormList>
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder={data[changeLan].name}
              ref={nameRef}
              defaultValue={name}
            />
            <Input
              type="text"
              placeholder={data[changeLan].lastname}
              ref={lastnameRef}
              defaultValue={lastname}
            />
            <Input
              type="text"
              placeholder={data[changeLan].task}
              ref={descRef}
              defaultValue={desc}
            />
            <Button type="submit">{data[changeLan].Add}</Button>
          </Form>
        </FormList>
        </div>
      </PPA>
    );
  };
  
export default UserForm