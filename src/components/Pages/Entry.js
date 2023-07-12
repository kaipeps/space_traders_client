import { useState } from "react";
import Login from "../Sections/Entry/Login";
import Register from "../Sections/Entry/Register";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  backgroundColor: '#1f0729',
  border: '2px solid #39bbea',
  borderRadius: '0.7rem',
  boxShadow: '0px 0px 3px #39bbea, 0px 0px 3px #39bbea',
  p: 4,
};

export default function Entry({ setBearer }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState('')
  const [form, setForm] = useState('login')
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { bearer, symbol, faction } = Object.fromEntries(new FormData(form));
    if (bearer) {
      setBearer(`Bearer ${bearer}`)
      sessionStorage.setItem('Authorization', `Bearer ${bearer}`);
    } else {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ faction, symbol })
      };
      const res = await fetch(`https://api.spacetraders.io/v2/register`, options);
      const response = await res.json();
      console.log(response)
      if (response.error) {
        console.log(`Error ${response.error.code}: ${response.error.message}`);
      } else {
        console.log(response.data)
        const { token } = response.data;
        setToken(token);
        handleModalOpen();
      }
    }
  };

  const handleFormSwitch = event => setForm(form === 'login' ? 'register' : 'login');

  return (
    <div className="Entry">
      <h1>Welcome to StarPost!</h1>
      {form === 'login' ? <Login handleFormSubmit={handleFormSubmit} handleFormSwitch={handleFormSwitch} /> : <Register handleFormSubmit={handleFormSubmit} handleFormSwitch={handleFormSwitch} />}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome, Agent. Here is your Bearer Authorization:
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              color: '#e2aa42',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              hyphens: 'none'
            }}
            className="token"
          >
            {token}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Make sure to save it as you won't be able to find it again once you close this window.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};