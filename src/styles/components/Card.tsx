import { styled } from "../global";

export const CardContainer = styled('div',{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:'2em 1em',
    marginBottom:'2em',
    width:'23%',
    borderRadius:'1em',
    border:'2px solid #E33D33',
    boxShadow:'5px 5px 12px rgba(0,0,0,0.5)',
    backgroundColor:'$gray500',
    color:'$white',
    'p':{
        margin: '1em 0',
        backgroundColor: '$red',
        borderRadius:'5px',
        padding:'5px',
        color:'$white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    },
    'h3':{
        textTransform:'capitalize',
        marginBottom:'1em',
        fontSize:'1.4em',
    },
    'a':{
        textDecoration:'none',
        backgroundColor:'$white',
        color:'$black100',
        padding:'0.7em 1.2em',
        borderRadius:'5px',
        fontWeight:'bold',
        transition:'0.4s',

    },
    'a:hover':{
        backgroundColor:'$red',
        color:'$white',
    }
})