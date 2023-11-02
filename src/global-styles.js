import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    
    :root{
        font-size: 16px;
        
        --ff-primary:'Inter', sans-serif;
        
        --fw-reg:400;
        --fw-500:500;
        --fw-bold:600;
        --fw-bolder:700;
        
        --clr-white: #fff;
        --clr-blue:#0048AD;
        --clr-grey-50:#f9fafb;
        --clr-nav-icon:#f0f2f5;
        --clr-border:#e4e7ec;
        --clr-text:#344054;
        --clr-text-small:#475367;
        --clr-text-black:#101928;
        --clr-accent:#e0edff;
        --clr-metrics-text:#475367;
        --clr-black:#000;
        --clr-table:#404040;
        
        --fs-reg:0.875rem;
        --fs-small:0.75rem;
        --fs-body:1rem;
    }
    
    html,body{
        height: 100%;
    }
    
    body{
        display: flex;
        margin: 0;
        padding: 0;
        background-color: var(--clr-grey-50);
        color:var(--clr-text);
        font-size: var(--fs-body);
        font-weight: var(--fw-reg);
        font-family: var(--ff-primary);
    }
    
    #root{
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
        padding: 0;
    }

    h2{
        font-size: 1.5rem;
    }

    p{
        font-size: var(--fs-reg);
    }

    img{
        /* display: block; */
        max-width: 100%;
    }

    button{
        cursor: pointer;
    }

`
export default GlobalStyle
