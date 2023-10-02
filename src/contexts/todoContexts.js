import useFetch from "../Hooks/useFetch";
import { createContext } from "react";
import { useContext, useMemo } from "react";

const TodoContext = createContext(null)

const TodoContextProvider = ({children}) => {
    const {response, error , loading, resendRequest} = useFetch({url: '/api/v1/todo', method: 'GET'})

    
    const list = useMemo(()=>{
        return response?.items.map(user => {
            return {
              name: user.name,
              lastname: user.lastname,
              id: user._uuid,
              desc: user.desc,
              isCompleted: user.isCompleted,
              date: user._created
            }
          }) || []
    }, [response])

    const contextValue = useMemo(()=> ({
        loading,
        error,
        resendRequest,
        list
    }), [loading, list, resendRequest, error ])

    return <TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider>
}

export const useTodoContext = () =>{
    const contextValue = useContext(TodoContext)
    if(!contextValue) throw new Error('ur component is not inside of userProvider')

    return contextValue
}

export default TodoContextProvider