import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Chip,
    FormControlLabel,
    Checkbox,
    Stack,
    Avatar,
    ThemeProvider,
    createTheme
} from '@mui/material';
import { Grid } from '@mui/system';

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

// Stock details options
const stockDetailsOptions = [
    { label: '52-Week High', value: 'high52Week' },
    { label: '52-Week Low', value: 'low52Week' },
    { label: 'Current Price', value: 'currentPrice' },
    { label: 'Market Cap', value: 'marketCap' },
    { label: 'PE Ratio', value: 'peRatio' },
    { label: 'Dividend Yield', value: 'dividendYield' },
    { label: 'EPS', value: 'eps' },
    { label: 'Volume', value: 'volume' },
    { label: 'Beta', value: 'beta' },
    { label: 'Sector', value: 'sector' }
];

const StockDetailsSelection = ({ 
    selectedStocks, 
    onBack, 
    onSubmit 
}) => {
    const [selectedDetails, setSelectedDetails] = useState({});

    // Initialize selected details for each stock
    React.useEffect(() => {
        const initialDetails = {};
        selectedStocks.forEach(stock => {
            initialDetails[stock.symbol] = [];
        });
        setSelectedDetails(initialDetails);
        console.log('Initial selectedDetails:', initialDetails);
    }, [selectedStocks]);

    const toggleStockDetail = (stockSymbol, detailValue) => {
        setSelectedDetails(prev => {
            const currentStockDetails = prev[stockSymbol] || [];
            const isSelected = currentStockDetails.includes(detailValue);
            
            const newDetails = {
                ...prev,
                [stockSymbol]: isSelected
                    ? currentStockDetails.filter(d => d !== detailValue)
                    : [...currentStockDetails, detailValue]
            };
            console.log('Updated selectedDetails:', newDetails);
            return newDetails;
        });
    };

    const isAnyDetailSelected = () => {
        const result = Object.values(selectedDetails).some(details => details.length > 0);
        console.log('isAnyDetailSelected:', result);
        return result;
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '100%',
                    padding: '0px',
                    maxHeight: '100%',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
              width: '0.1em'
            },
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
                        <img src="./data.png" alt="Data selection icon" />
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
                        Select Stock Details
                    </Typography>
                </Stack>

                {/* Stock Headers */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {selectedStocks.map((stock) => (
                        <Chip
                            key={stock.symbol}
                            label={stock.symbol}
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

                {/* Details Selection Grid */}
                <Grid container spacing={2}>
                    {selectedStocks.map((stock) => (
                        <Grid item xs={12} key={stock.symbol}>
                            <Box 
                                sx={{ 
                                    border: '1px solid rgba(255,255,255,0.2)', 
                                    borderRadius: 2, 
                                    p: 2 
                                }}
                            >
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        color: 'white', 
                                        mb: 2,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {stock.symbol} - {stock.name}
                                </Typography>
                                
                                <Grid container spacing={1}>
                                    {stockDetailsOptions.map((option) => (
                                        <Grid item xs={6} sm={4} md={3} key={option.value}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={(selectedDetails[stock.symbol] || []).includes(option.value)}
                                                        onChange={() => toggleStockDetail(stock.symbol, option.value)}
                                                        sx={{
                                                            color: 'white',
                                                            '&.Mui-checked': {
                                                                color: 'rgb(0, 140, 255)',
                                                            },
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <Typography 
                                                        variant="body2" 
                                                        sx={{ color: 'white' }}
                                                    >
                                                        {option.label}
                                                    </Typography>
                                                }
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Action Buttons */}
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
                        onClick={onSubmit}
                        disabled={!isAnyDetailSelected()}
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: "10px",
                            padding: "10px 20px",
                            backdropFilter: "blur(5px)",
                            "&:hover": {
                                backgroundColor: "rgba(82, 82, 82, 0.5)",
                            },
                            "&.Mui-disabled": {
                                color: "rgba(255,255,255,0.3)",
                                borderColor: "rgba(255,255,255,0.3)"
                            }
                        }}
                    >
                        Continue
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
            </Box>
        </ThemeProvider>
    );
};

export default StockDetailsSelection;