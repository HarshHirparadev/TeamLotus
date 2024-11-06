// App.tsx
import React from 'react';
// import NoteState from "../../context/NoteState"; // Assuming this is another context
import TabLayout from './_layout';
import { ApolloProvider } from '../../components/ApolloProvider'; // Assuming you have ApolloProvider set up here

export default function App() {
  return (<>
   
          <TabLayout />
  </>
       
  );
}
