import { Box } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import './App.css';
import MainRoutes from './Pages/Routes';



function App() {
  return (
    <Box height={'100vh'} position="relative">
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100vh"
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(60%)',
          zIndex: -1,
        }}
      />

      <MainRoutes />
      <Toaster position="bottom-right" reverseOrder={false} />
    </Box>
  );
}

export default App;
