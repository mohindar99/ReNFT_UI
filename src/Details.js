import React from 'react'
import './Details.css'

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#ab47bc',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ab47bc',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ce93d8',
      },
      '&:hover fieldset': {
        borderColor: '#ab47bc',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ab47bc',
      },
    },
  });

function Details({img}) {
  return (
    <div className='details-container' >
        <div className='details-left-container' >
        <img
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
        src={img}
        alt={'lmao'}
        loading="lazy"
      />
        </div>
        <div className='details-right-container' >
            <div style={{ marginTop: '5%', marginBottom: '2%' }} >
                <span className='grey-color' >Lender</span> 0xf23...9a2
            </div>
            <div>
                <div style={{ fontSize: '1.5rem' }} >
                    Semitic-Ye-Yacht-Club 
                </div>
                <div style={{ fontSize: '2rem' }} >
                    Semitic Ye Yacht Club #288
                </div>
                <div>
                <span className='grey-color' >Contract Address</span> 0x6ed...b84
                </div>
            </div>
            <div className='grey-color' style={{ fontSize: '1.2rem', marginTop: '2%', marginBottom: '2%' }} >
                Some Description
            </div>
            <CssTextField id="outlined-basic" type='number' label="Rent Duration" variant="outlined" sx={{ width: '100%', input: {color: 'black'}, label: {color: '#b4bbbf'} }} />
            <div className='grey-color' style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end', marginTop: '2%' }} >
                Max Duration in days <span style={{ border: '1px solid #b4bbbf', borderRadius: '5px', padding: '1%', marginLeft: '1%' }} >7</span>
            </div>
            <div className='values-container' >
                <div className='values' >
                    <div className='grey-color' >
                        Daily Price
                    </div>
                    <div>
                        1 <span className='grey-color' >USDT</span>
                    </div>
                </div>
                <div className='values' >
                    <div className='grey-color' >
                        Collateral
                    </div>
                    <div>
                        3 <span className='grey-color' >USDT</span>
                    </div>
                </div>
                <Divider variant="middle" sx={{ borderColor: '#b4bbbf' }} />
                <div className='values' >
                    <div className='grey-color' >
                        Total Amount
                    </div>
                    <div>
                        0 <span className='grey-color' >USDT</span>
                    </div>
                </div>
            </div>
            <Button variant="contained" color="secondary" sx={{ width: '100%', fontSize: '1.2rem', marginTop: '2%', color: 'white' }} >
                RENT
            </Button>
        </div>
    </div>
  )
}

export default Details