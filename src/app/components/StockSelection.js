import React, { useState } from 'react';
import {
  TextField,
  Button,
  Chip,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
  Avatar,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { stockData } from './stockData';

// Create dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'transparent',
      paper: 'rgba(0, 0, 0, 0)'
    },
    primary: {
      main: '#90caf9'
    }
  }
});

const StockGridSelection = ({ onBack, onSubmit }) => {
  const [stocks] = useState(stockData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [openWarningModal, setOpenWarningModal] = useState(false);

  const filteredStocks = stocks.filter(stock => 
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStock = (stock) => {
    setSelectedStocks(prev => {
      const isSelected = prev.find(s => s.symbol === stock.symbol);
      if (isSelected) {
        return prev.filter(s => s.symbol !== stock.symbol);
      } else {
        // Limit to 10 stocks
        return prev.length < 10 
          ? [...prev, stock] 
          : prev;
      }
    });
  };

  const handleDelete = (symbol) => {
    setSelectedStocks(prev => prev.filter(stock => stock.symbol !== symbol));
  };

  const handleSubmission = () => {
    if (selectedStocks.length === 0) {
      setOpenWarningModal(true);
    } else {
      onSubmit(selectedStocks);
    }
  };

  const textFieldStyles = {
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid blue",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover:after": {
      borderBottom: "2px solid white",
    },
  };
  
  const inputLabelStyles = {
    color: "white",
    "&:hover": {
      color: "white",
    },
    "&.Mui-focused": {
      color: "blue",
    },
    "&.Mui-error": {
      color: "red",
    },
    "&.Mui-disabled": {
      color: "grey",
    },
  };
  
  const inputStyles = {
    color: "white",
    "&:hover": {
      color: "white",
    },
    "&.Mui-focused": {
      color: "blue",
    },
    "&.Mui-error": {
      color: "red",
    },
    "&.Mui-disabled": {
      color: "grey",
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          padding: '0px',
          maxHeight: '100%',
        }}
      >
        <Stack 
          direction="row" 
          spacing={4} 
          justifyContent="flex-start"
          alignItems="center"
          sx={{ 
            width: '100%'
          }}
        >
          <Avatar 
            variant="square"
            sx={{ 
              bgcolor: 'transparent',
              width: 40,
              height: 40,
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }
            }}
          >
            <img src="./about.png" alt="Feature icon" />
          </Avatar>

          <Typography
            variant="h4"
            component="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Select Stock
          </Typography>
        </Stack>

        <TextField
          id="standard-basic"
          label="Search stocks..."
          variant="standard"
          name="stockSearch"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={textFieldStyles}
          InputLabelProps={{
            sx: inputLabelStyles,
          }}
          InputProps={{
            sx: inputStyles,
          }}
        />

        <Box sx={{ mb: 0, display: 'flex', flexWrap: 'wrap', gap: 1}}>
          {selectedStocks.map((stock) => (
            <Chip
              key={stock.symbol}
              label={stock.symbol}
              onDelete={() => handleDelete(stock.symbol)}
              color="primary"
              sx={{
                backgroundColor: 'rgb(0, 140, 255)',
                '&:hover': {
                  backgroundColor: 'rgba(144, 202, 249, 0.3)'
                }
              }}
            />
          ))}
        </Box>

        <Typography 
          variant="caption" 
          sx={{ 
            color: 'white', 
            opacity: 0.7, 
            mb: 1 
          }}
        >
          Selected: {selectedStocks.length} / 10 stocks
        </Typography>

        <Box 
          sx={{ 
            maxHeight: '110vh',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '0.1em'
            },
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: 1,
            p: 1
          }}>
            {filteredStocks.map((stock) => (
              <Button
                key={stock.symbol}
                variant={selectedStocks.find(s => s.symbol === stock.symbol) ? "contained" : "outlined"}
                onClick={() => toggleStock(stock)}
                disabled={selectedStocks.length >= 10 && !selectedStocks.find(s => s.symbol === stock.symbol)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '60px',
                  width: '100%',
                  padding: 1,
                  opacity: selectedStocks.length >= 10 && !selectedStocks.find(s => s.symbol === stock.symbol) ? 0.5 : 1,
                  backgroundColor: selectedStocks.find(s => s.symbol === stock.symbol) 
                    ? 'rgb(0, 140, 255)'
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: selectedStocks.find(s => s.symbol === stock.symbol)
                      ? 'rgba(144, 202, 249, 0.3)'
                      : 'rgba(255, 255, 255, 0.08)'
                  }
                }}
              >
                <Typography 
                  variant="subtitle2" 
                  component="div"
                  sx={{
                    fontWeight: 'bold'
                  }}
                >
                  {stock.symbol}
                </Typography> 
                <Typography 
                  variant="caption" 
                  component="div" 
                  sx={{ 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    whiteSpace: 'nowrap', 
                    width: '100%',
                    opacity: 0.7,
                    textAlign: 'center'
                  }}
                >
                  {stock.name}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          mt: 2 
        }}>
          <Button
            type="submit"
            variant="outlined"
            size="small"
            onClick={handleSubmission}
            sx={{
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "10px 20px",
              backdropFilter: "blur(5px)",
              "&:hover": {
                backgroundColor: "rgba(82, 82, 82, 0.5)",
              },
            }}
          >
            Submit
          </Button>
          
          <Button
            variant="outlined"
            onClick={onBack}
            size="small"
            sx={{
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "10px 20px",
              backdropFilter: "blur(5px)",
              "&:hover": {
                backgroundColor: "rgba(82, 82, 82, 0.5)",
              },
            }}
          >
            Back
          </Button>
        </Box>

        {/* Warning Modal for No Stock Selection */}
        <Dialog
          open={openWarningModal}
          onClose={() => setOpenWarningModal(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ color: 'white' }}>
            {"No Stocks Selected"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{ color: 'white' }}>
              Please select at least one stock before proceeding.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={() => setOpenWarningModal(false)} 
              color="primary" 
              autoFocus
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default StockGridSelection;