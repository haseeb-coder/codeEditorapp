import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store, { persist } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '../components/common/Loading/Loading';

const ReduxProvider = (props : PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
         <PersistGate persistor={persist} loading={<Loading />} >
            {props.children}
         </PersistGate>
    </Provider> 
  )
}

export default ReduxProvider