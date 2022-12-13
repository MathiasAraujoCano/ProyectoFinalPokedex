import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = (props) => {

    function generateColor(type) {
        switch (type) {
            case 'electric':    return "#f9cf30"                        
      
            case 'fire':    return "#f57d31"                        
              
            case 'psychic':    return "#fb5584"                        
              
            case 'grass':    return "#74cb48"                        
                      
            case 'water':    return "#6493eb"                        
             
            case 'poison':    return "#a43e9e"                        
               
            case 'bug':    return "#a78723"                        
              
            case 'flying':    return "#a891ec"                        
                 
            case 'steel':    return "#fb5584"                        
              
            case 'rock':    return "#b69e31"                        
                       
            case 'normal':    return "#aaa67f"                        
               
            case 'ghost':    return "#70559b"                        
                
            case 'type':    return "#242829"  
            
            case 'fighting': return "#c12239"

            case 'ground': return "#dec16b"

            case 'fairy': return "#e69eac"

            case 'ice': return "#9ad6df"

            case 'dragon' : return "#7037ff"
                 
            default:   
                return ""                        
                
        }
    }
        return(
            
                <div className="Divstats">
                {
                    props.pokemon.stats.map((stat,key)=>{
                        return(
                            <div key={key} >
                                <div className="StatsName">
                                    {stat.key}
                                </div>
                                <div className="StatsValue">
                                    {String(stat.value).padStart(3, '0')}
                                </div>
                                <ProgressBar 
                                maxCompleted={200}
                                className="ProgressBar"
                                completed={stat.value}
                                height={"5px"}
                                isLabelVisible={false}
                                bgColor= {`${generateColor(props.pokemon.type[0])}`}
                                />
                            </div>
                        )
                    })
                }
                </div>         
        )
    }
  export default Progress;
