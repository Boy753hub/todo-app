import React from 'react'
import UserForm from '../components/userForm';
import useRequest from '../Hooks/useRequest';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/App.module.css'
import { ColorRing } from 'react-loader-spinner';
import { useHeaderContext } from '../contexts/headerContexts';
import { PPA } from '../styles/styled';

const CreatePage = () => {

    const {sendRequest, loading} = useRequest({url: '/api/v1/todo', method: 'POST'})
    const navigate = useNavigate()

      
    const handleSubmit = ( name, lastname, desc) => {
        sendRequest([{name: name ,lastname: lastname, desc: desc, isCompleted: false}])
        .then(()=> navigate('/'))
        .catch(err => console.log(err))
    
      }
      
      const {isOpen} = useHeaderContext()
    
      if(loading) return <PPA color={isOpen ? '#121212' : ''}>
  
      <div className={styles.spinner}>
          <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
      </div> 
      </PPA>

  return <UserForm onFormSubmit={handleSubmit}/>
  
}

export default CreatePage