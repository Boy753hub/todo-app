import React from 'react'
import UserForm from '../components/userForm'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import styles from '../styles/App.module.css'
import { ColorRing } from 'react-loader-spinner';
import useRequest from '../Hooks/useRequest'
import { PPA } from '../styles/styled'
import { useHeaderContext } from '../contexts/headerContexts'

const EditPage = () => {
  const navigate = useNavigate()
  const {userId} = useParams()
  const {response,loading,error} = useFetch({url: `/api/v1/todo/${userId}`, method: 'GET'})
  const {sendRequest} = useRequest({url: `/api/v1/todo/${userId}`, method: 'PUT'})

  
  const {isOpen} = useHeaderContext()

  if(loading && !response) return <PPA color={isOpen ? '#121212' : ''}>

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
  if(error || !response) return <p>{error}</p>

  const onSubmit = (name, lastname, desc) =>{
    sendRequest({name, lastname ,desc})
    .then(()=> navigate('/'))
    .catch((err)=> console.log(err))

  } 


  return <UserForm onFormSubmit={onSubmit} name={response?.name} lastname={response?.lastname} desc={response?.desc}/>
}

export default EditPage