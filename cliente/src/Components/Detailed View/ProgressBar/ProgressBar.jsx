import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = (props) => {

    function generateColor(type) {
        switch (type) {
            case 'Electric':    return "#f9cf30"                        
      
            case 'Fire':    return "#f57d31"                        
              
            case 'Psychic':    return "#fb5584"                        
              
            case 'Grass':    return "#74cb48"                        
                      
            case 'Water':    return "#6493eb"                        
             
            case 'Poison':    return "#a43e9e"                        
               
            case 'Bug':    return "#a78723"                        
              
            case 'Flying':    return "#a891ec"                        
                 
            case 'Steel':    return "#fb5584"                        
              
            case 'Rock':    return "#b69e31"                        
                       
            case 'Normal':    return "#aaa67f"                        
               
            case 'Ghost':    return "#70559b"                        
                
            case 'Type':    return "#242829"  
            
            case 'Fighting': return "#c12239"

            case 'Ground': return "#dec16b"

            case 'Fairy': return "#e69eac"

            case 'Ice': return "#9ad6df"

            case 'Dragon' : return "#7037ff"
                 
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
