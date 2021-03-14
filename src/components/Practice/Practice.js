import React,{Component} from 'react'
import AceEditor from "react-ace";
import Auxillary from '../../hoc/Auxillary'

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import classes from './Practice.module.css';

import Editor from  '../Editor/Editor'

const practice=(props)=>{
   
     console.log("practice",props)
    let template=`#include<bits/stdc++.h
    using namespace std;`

    let attachedClasses=[classes.Sidebar,classes.Close]
    
    if(props.show)
    {
        attachedClasses=[classes.Sidebar,classes.Open]
    }
        return (
            <Auxillary>
    <div className={attachedClasses.join(' ')}>
         
                     <div>
                   <Editor mode="c_cpp" text="Code" height="500px" template={template}/>
                   </div>
                   <div className={classes.Practice}>
                       <div>
                           <Editor mode="text" height="100px" width="250px" text="Output"/>
                       </div>
                       <div>
                           <Editor mode="text" height="100px" width="250px" text="Input"/>
                       </div>
    
                   </div>
               
          
        </div>
            </Auxillary>  
          
          );
    
    
}

export default practice