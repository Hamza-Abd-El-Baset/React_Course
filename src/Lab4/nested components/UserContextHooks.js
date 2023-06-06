import React , { createContext } from "react";

const UserContextHooks=createContext()

const UserProviderHooks=UserContextHooks.Provider

const UserConsumerHooks=UserContextHooks.Consumer

export {UserProviderHooks,UserConsumerHooks}

export default UserContextHooks