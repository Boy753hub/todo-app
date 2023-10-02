import { Outlet } from "react-router-dom";
import Header from "../components/header";
import TodoContextProvider from "../contexts/todoContexts";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";
import MainPage from "../pages/MainPage";
import HeaderContextProvider from "../contexts/headerContexts";

export const routes = [
    {
        element: (
        <div>
            <HeaderContextProvider>
                <Header/>
                <Outlet/>
            </HeaderContextProvider>
        </div>
        )
        ,
        path: "/",
        children: [
            {
                element: (
                <div>
                    <TodoContextProvider>
                        <MainPage/>
                    </TodoContextProvider>
                </div>
                )
                ,
                index: true,
            },
            {
                element: <CreatePage/>,
                path: 'Create'
            },
            {
                element: <EditPage/>,
                path: 'Edit/:userId'
            }
        ]
    }
]