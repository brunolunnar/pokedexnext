import { styled } from "../global";

export const NavBarStyled = styled('nav',{
    display:'flex',
    backgroundColor:'$gray500',
    justifyContent:'space-between',
    padding:'10px',
    'ul':{
        display:"flex",
        gap:'10px',
        listStyle:'none',
        alignItems:'center',
        fontSize:'2rem',
    },
    'ul li':{
        marginRight:'1.3rem',
    },
    ".logo":{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'$white',
        fontSize:'3rem',

    },
    '.logo h1':{
        marginLeft: '.5em',
    },
    'ul a':{
        color:'$white',
        textDecoration:'none',
        padding:'5px',
        transition:'.4s',
        borderBottom:'2px solid transparent',

    },
    'ul a:hover':{
        borderColor: '$white',
    }
})