import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { DocumentDownload } from "iconsax-react";
import React, { useState } from "react";

function HomeMauro() {

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleOpenConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleDownloadClick = () => {
    handleOpenConfirmation();
  };

  const handleConfirmDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/CVMauricioLores.pdf';
    link.download = 'CVMauricioLores.pdf';
    link.click();
    handleCloseConfirmation();
  };

  return (
    <Box
      sx={{
        backgroundColor:'#0A0B0D',
        background: `linear-gradient(to bottom, #0A0B0D, #1C2026)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: {xs:'column', md:'row'},
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box sx={{ textAlign: 'center', alignItems:'center', margin:'2rem' }}>
            <img src="images/MauricioLores1.jpg" alt="" style={{ width: '300px', height: 'auto', borderRadius: '12px'}} />
        </Box>
        <Box sx={{ width:'maxContent', marginTop: {xs: '0', lg:'6rem'}}}>
        <Typography fontWeight="bold" sx={{textAlign:'center', fontSize: {xs:'30px', md:'48px  '},}}>
              Mauricio Lores
            </Typography>
            <Typography fontWeight="bold" sx={{textAlign:'center', fontSize: {xs:'30px', md:'48px  '},}}>
              Front End Developer
            </Typography>
            
            <Typography sx={{ maxWidth:'600px', textAlign:'center', margin:'1rem auto', fontSize: {xs:'16px', md:'18px  '}}}>
            Soy desarrollador Front End en constante formacion, con conocimientos en Diseño UX/UI, desarrollo web, Javascript, ReactJs. Actualmente diseño, rediseño y programo nuevos proyectos y sitios de aplicaciones web, del lado del cliente (Front-end). Continuamente estoy aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general.
            </Typography>
            <Button
            color="primary"
              variant="contained"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '2rem auto',
                borderRadius: '6px',
                "&:hover": {
                  backgroundColor: '#A4A5A6',
                  color: '#2D3540',
                },
              }}
              onClick={handleDownloadClick}
            >
              <DocumentDownload style={{ marginRight: '10px' }} size="32" color="white" variant="Bulk" />
              Descargar CV
            </Button>
            <Dialog open={isConfirmationOpen} onClose={handleCloseConfirmation}>
        <DialogTitle>Confirmar Descarga</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas descargar el CV?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDownload} color="primary">
            Descargar
          </Button>
        </DialogActions>
      </Dialog>
        </Box>
      
     
    </Box>
  );
}

export default HomeMauro;
